const fs = require('fs')
const mkdirp = require('mkdirp')
const pngquant = require('node-pngquant-native')
const sharp = require('sharp')
const Jimp = require('jimp')
const robot = require('robotjs')
const { spawn } = require('child_process')

module.exports.captureImage = (x, y, w, h) => {
  // Taken from https://github.com/octalmage/robotjs/issues/13#issuecomment-501102240
  const pic = robot.screen.capture(x, y, w, h)
  const width = pic.byteWidth / pic.bytesPerPixel // pic.width is sometimes wrong!
  const height = pic.height
  const image = new Jimp(width, height)
  let red, green, blue
  pic.image.forEach((byte, i) => {
    switch (i % 4) {
      case 0:
        return (blue = byte)
      case 1:
        return (green = byte)
      case 2:
        return (red = byte)
      case 3:
        image.bitmap.data[i - 3] = red
        image.bitmap.data[i - 2] = green
        image.bitmap.data[i - 1] = blue
        image.bitmap.data[i] = 255
    }
  })
  return image
}

module.exports.compressPngImage = async (
  inputPath,
  outputFolder,
  outputName
) => {
  const tmpOutput = `${outputFolder}/${outputName}-tmp.png`
  const finalOutput = `${outputFolder}/${outputName}.png`

  await mkdirp(outputFolder)
  fs.renameSync(inputPath, tmpOutput)

  return new Promise((resolve, reject) => {
    console.info('   Compressing PNG image')
    sharp(tmpOutput)
      .resize(740, undefined, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFormat('png')
      .toBuffer()
      .then((resizedBuffer) => {
        const responseBuffer = pngquant.compress(resizedBuffer)
        fs.writeFile(finalOutput, responseBuffer, (writeFileError) => {
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
    const ffmpeg = spawn('ffmpeg', [
      '-i',
      input,
      '-vf',
      "scale='min(740,iw)':-2",
      '-c:v',
      'libx264',
      '-crf',
      '18',
      '-preset',
      'veryslow',
      '-y',
      '-c:a',
      'copy',
      output,
    ])

    if (process.env.NODE_ENV === 'DEBUG') {
      ffmpeg.stderr.on('data', function (message) {
        console.debug(`${message}`)
      })
    }

    ffmpeg.on('exit', (ffmpegExitCode) => {
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

module.exports.makeAppActive = async (appName) => {
  return new Promise((resolve, reject) => {
    const osascript = spawn('osascript', [
      '-e',
      'try',
      '-e',
      `tell application "${appName}" to activate`,
      '-e',
      'end try',
    ])

    if (process.env.NODE_ENV === 'DEBUG') {
      osascript.stderr.on('data', function (message) {
        console.debug(`${message}`)
      })
    }

    osascript.on('exit', (osascriptExitCode) => {
      if (osascriptExitCode === '1') {
        return reject('osascript')
      }

      resolve()
    })
  })
}

module.exports.moveAndResizeApp = async (appName, cropArea, screenHeight) => {
  const x = { start: cropArea.x, end: cropArea.x + cropArea.width }
  const y = {
    start: screenHeight - cropArea.y - cropArea.height,
    end: screenHeight - cropArea.y,
  }

  return new Promise((resolve, reject) => {
    const osascript = spawn('osascript', [
      '-e',
      'try',
      '-e',
      `tell application "${appName}"`,
      '-e',
      `set the bounds of the first window to {${x.start}, ${y.start}, ${x.end}, ${y.end}}`,
      '-e',
      'end tell',
      '-e',
      'end try',
    ])

    if (process.env.NODE_ENV === 'DEBUG') {
      osascript.stderr.on('data', function (message) {
        console.debug(`${message}`)
      })
    }

    osascript.on('exit', (osascriptExitCode) => {
      if (osascriptExitCode === '1') {
        return reject('osascript')
      }

      resolve()
    })
  })
}
