const glob = require('glob-promise')
const path = require('path')
const rimraf = require('rimraf')
const sharp = require('sharp')
const { spawn } = require('child_process')

module.exports = async (files) => {
  try {
    const scriptFiles = files.length > 0 ? files : await glob('!(node_modules)/*/*')
    const videoFiles = []
    const imageFiles = []

    console.info(`Found ${scriptFiles.length} scripts to run. Please close Safari and do not move the mouse until the end\n`)
    for (const scriptFile of scriptFiles) {
      const script = require(`./${scriptFile}`)
      const { filepath, isVideo } = await script.run(getImagePath(scriptFile))

      if (isVideo) {
        videoFiles.push(filepath)
      } else {
        imageFiles.push(filepath)
      }
    }
    console.info(`\nAll videos were successfully recorded. You can use your mouse again\n`)

    console.info(`Converting ${videoFiles.length} videos to GIF+WebM\n`)
    await Promise.all([
      ...convertVideosToGif(videoFiles),
      ...convertVideosToWebm(videoFiles),
    ])
    console.info(`All videos and images were succesfully converted!\n`)
  } catch (error) {
    if (error.code === 'RECORDER_TIMEOUT') {
      console.error(error.message)
      console.info('You probably need to activate the screen recording feature for the terminal you\'re using.')
      console.info('You\'ll find that settings under: System Parameters > Security & Confidentiality > Confidientiality > Screen recording')
    } else if (error.code === 'ENOTDIR') {
      console.error(error.message)
    } else {
      console.error('An error occured while recording', error)
    }
  }
}

const convertImagesToWebp = (imageFiles) => {
  return imageFiles.map(imageFile => {
    try {
      return convertImageToWebp(imageFile)
    } catch (error) {
      console.error(`Error while converting ${imageFile}.png to WebP during ${error} step`)
    }
  })
}

const convertVideosToGif = (videoFiles) => {
  return videoFiles.map(videoFile => {
    try {
      return convertVideoToGif(videoFile)
    } catch (error) {
      console.error(`Error while converting ${videoFile}.mp4 to Gif during ${error} step`)
    }
  })
}

const convertVideosToWebm = (videoFiles) => {
  return videoFiles.map(videoFile => {
    try {
      return convertVideoToWebm(videoFile)
    } catch (error) {
      console.error(`Error while converting ${videoFile}.mp4 to WebM during ${error} step`)
    }
  })
}

const convertImageToWebp = (filePath) => {
  return new Promise((resolve, reject) => {
    sharp(`${filePath}.png`).toFile(`${filePath}.webp`)
      .then(() => {
        rimraf(`${filePath}.png`, (error) => {
          if (error) {
            console.error(error)
            return reject('rimraf')
          }

          resolve()
        })
      })
      .catch((error) => {
        console.error(error)
        reject('sharp')
      })
  })
}

const convertVideoToWebm = (filePath) => {
  return new Promise((resolve, reject) => {
    const ffmpeg = spawn('ffmpeg', ['-i', `${filePath}.mp4`, '-b:v', '1M', '-q:v', '10', '-y', `${filePath}.webm`])
    ffmpeg.on('exit', ffmpegExitCode => {
      if (ffmpegExitCode === '1') {
        return reject('ffmpeg')
      }

      resolve()
    })
  })
}

const convertVideoToGif = (filePath) => {
  return new Promise((resolve, reject) => {
    const ffmpeg = spawn('ffmpeg', ['-i', `${filePath}.mp4`, '-r', '20', `${filePath}%04d.png`])
    ffmpeg.on('exit', ffmpegExitCode => {
      if (ffmpegExitCode === '1') {
        return reject('ffmpeg')
      }

      const gifski = spawn('gifski', ['-o', `${filePath}.gif`, `${filePath}*.png`], { shell: true })
      gifski.on('exit', gifskiExitCode => {
        if (gifskiExitCode === '1') {
          return reject('gifski')
        }

        rimraf(`${filePath}*.png`, (error) => {
          if (error) {
            console.error(error)
            return reject('rimraf')
          }

          resolve()
        })
      })
    })
  })
}

const getImagePath = file => path.normalize(`../images/${path.dirname(file)}`)
