const aperture = require('aperture')()
const delay = require('delay')
const robot = require('robotjs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const {
  makeAppActive,
  moveAndResizeApp,
  compressVideo,
} = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log(
      '> Recording finder FXEnableExtensionChangeWarning with param set to true'
    )

    const { stderr: setEnvError } = await exec(
      'defaults write com.apple.finder FXEnableExtensionChangeWarning -string true && killall Finder'
    )
    if (setEnvError) {
      console.error(
        'An error occured while setting up the finder FXEnableExtensionChangeWarning command'
      )
      logRollbackInfo()
      throw new Error(setEnvError)
    }
    await delay(1000)

    // Preparation
    await makeAppActive('Finder')
    robot.keyTap('g', ['command', 'shift'])
    await delay(100)
    robot.keyTap('right')
    robot.keyTap('a', 'command')
    robot.keyTap('backspace')
    robot.typeString('~/macos-defaults/')
    await delay(1000)
    robot.keyTap('enter')
    await delay(500)
    robot.keyTap('right')
    await delay(100)
    robot.keyTap('right')
    await delay(100)
    robot.keyTap('right')
    await delay(100)
    robot.keyTap('right')
    await delay(100)
    robot.keyTap('right')
    await delay(100)

    const { width, height } = robot.getScreenSize()
    const recordWidth = 720
    const recordHeight = 404
    const cropArea = {
      x: width / 2 - recordWidth / 2,
      y: 345,
      width: recordWidth,
      height: recordHeight,
    }

    await moveAndResizeApp('Finder', cropArea, height)

    // Action!
    await aperture.startRecording({ highlightClicks: true, cropArea })

    robot.keyTap('enter')
    await delay(100)
    robot.keyTap('right', 'command')
    await delay(100)
    robot.keyTap('left', ['shift', 'alt'])
    await delay(100)
    robot.typeStringDelayed('txt', 300)
    await delay(100)
    robot.keyTap('enter')
    await delay(1500)
    robot.keyTap('escape')
    await delay(300)

    const fp = await aperture.stopRecording()
    // End recording

    robot.keyTap('w', 'command')

    try {
      await compressVideo(fp, outputPath, 'true')
    } catch (compressVideoError) {
      logRollbackInfo()
      throw new Error(compressVideoError)
    }

    const { stderr: deleteEnvError } = await exec(
      'defaults delete com.apple.finder FXEnableExtensionChangeWarning && killall Finder'
    )
    if (deleteEnvError) {
      console.error(
        'An error occured while cleaning the finder FXEnableExtensionChangeWarning environment'
      )
      logRollbackInfo()
      throw new Error(deleteEnvError)
    }
    await delay(1000)

    return { filepath: `${outputPath}/true`, isVideo: true }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info(
    'defaults delete com.apple.finder FXEnableExtensionChangeWarning && killall Finder'
  )
}
