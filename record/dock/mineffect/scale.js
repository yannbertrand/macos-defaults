const aperture = require('aperture')()
const delay = require('delay')
const robot = require('robotjs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { compressVideo } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock mineffect with param set to scale')

    const { stderr: setEnvError } = await exec('defaults write com.apple.dock mineffect -string scale && killall Dock')
    if (setEnvError) {
      console.error('An error occured while setting up the dock mineffect command')
      logRollbackInfo()
      throw new Error(setEnvError)
    }

    // Preparation
    robot.keyTap('space', 'command')
    await delay(100)
    robot.keyTap('s')
    robot.typeString('ystem')
    await delay(1000)
    robot.keyTap('enter')
    await delay(500)

    const { width, height } = robot.getScreenSize()
    const pos1 = { x: width - 682, y: height - 695 }
    const pos2 = { x: width - 110, y: height - 50 }
    const recordWidth = 750
    const recordHeight = 750
    const cropArea = {
      x: width - recordWidth, y: 0,
      width: recordWidth, height: recordHeight
    }

    robot.moveMouse(pos1.x, pos1.y)

    // Action!
    await aperture.startRecording({ highlightClicks: true, cropArea })

    robot.mouseClick()
    await delay(100)
    robot.moveMouseSmooth(pos2.x, pos2.y, 2)
    await delay(400)
    robot.mouseClick()
    await delay(400)
    robot.moveMouseSmooth(pos1.x, pos1.y, 2)
    await delay(200)

    const fp = await aperture.stopRecording()
    // End recording

    robot.keyTap('q', 'command')

    try {
      await compressVideo(fp, outputPath, 'scale')
    } catch (compressVideoError) {
      logRollbackInfo()
      throw new Error(compressVideoError)
    }

    const { stderr: deleteEnvError } = await exec('defaults delete com.apple.dock mineffect && killall Dock')
    if (deleteEnvError) {
      console.error('An error occured while cleaning the dock mineffect environment')
      logRollbackInfo()
      throw new Error(deleteEnvError)
    }

    return { filepath: `${outputPath}/scale`, isVideo: true }
  }
}

function logRollbackInfo() {
  console.info('Please manually run this command to make sure everything is properly reset:')
  console.info('defaults delete com.apple.dock mineffect && killall Dock')
}
