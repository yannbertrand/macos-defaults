const fs = require('fs')
const mkdirp = require('mkdirp')
const pngquant = require('node-pngquant-native')
const sharp = require('sharp')
const { spawn } = require('child_process')

module.exports.compressPngImage = async (inputPath, outputFolder, outputName) => {
  const tmpOutput = `${outputFolder}/${outputName}-tmp.png`
  const finalOutput = `${outputFolder}/${outputName}.png`

  await mkdirp(outputFolder)
  fs.renameSync(inputPath, tmpOutput)

  return new Promise((resolve, reject) => {
    console.info('   Compressing PNG image')
    sharp(tmpOutput)
      .resize(740, undefined, { fit: sharp.fit.inside, withoutEnlargement: true })
      .toFormat('png')
      .toBuffer()
      .then(resizedBuffer => {
        const responseBuffer = pngquant.compress(resizedBuffer)
        fs.writeFile(finalOutput, responseBuffer, writeFileError => {
          removeSync(tmpOutput)
          if (writeFileError) {
            console.error('An error occured while saving the image')
            reject(writeFileError)
          }

          resolve()
        })
      })
  })
}

module.exports.compressVideo = async (inputPath, outputFolder, outputName) => {
  const tmpOutput = `${outputFolder}/${outputName}-tmp.mp4`
  const finalOutput = `${outputFolder}/${outputName}.mp4`

  await mkdirp(outputFolder)
  fs.renameSync(inputPath, tmpOutput)

  try {
    await resizeVideo(tmpOutput, finalOutput)
  } catch (resizeVideoError) {
    console.error('An error occured while resizing the video')
    throw new Error(resizeVideoError)
  } finally {
    removeSync(tmpOutput)
  }
}

function resizeVideo(input, output) {
  console.info('   Resizing video')

  return new Promise((resolve, reject) => {
    const ffmpeg = spawn('ffmpeg', ['-i', input, '-vf', 'scale=\'min(740,iw)\':-2', '-c:v', 'libx264', '-crf', '18', '-preset', 'veryslow', '-y', '-c:a', 'copy', output])

    if (process.env.NODE_ENV === 'DEBUG') {
      ffmpeg.stderr.on('data', function (message) {
        console.debug(`${message}`)
      })
    }

    ffmpeg.on('exit', ffmpegExitCode => {
      if (ffmpegExitCode === '1') {
        return reject('ffmpeg')
      }

      resolve()
    })
  })
}

function removeSync(file) {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file)
  }
}
