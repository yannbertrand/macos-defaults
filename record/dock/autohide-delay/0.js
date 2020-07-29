const aperture = require('aperture')()
const delay = require('delay')
const fs = require('fs')
const robot = require('robotjs')
const util = require('util')
const mkdirp = require('mkdirp')
const exec = util.promisify(require('child_process').exec)

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock autohide-delay with param set to 0')

    const { stderr: setEnvError } = await exec('defaults write com.apple.dock autohide -bool true && defaults write com.apple.dock autohide-delay -float 0 && killall Dock')
    if (setEnvError) {
      console.error('An error occured while setting up the dock autohide-delay command')
      console.info('Please manually run this command to reset:')
      console.info('defaults delete com.apple.dock autohide && defaults delete com.apple.dock autohide-delay && killall Dock')
      throw new Error(setEnvError)
    }

    // Preparation
    await delay(1000)

    const { height } = robot.getScreenSize()
    const pos1 = { x: 475, y: height-80 }
    const pos2 = { x: 495, y: height }
    const pos3 = { x: 500, y: height-70 }
    const recordWidth = 441
    const recordHeight = 120
    const cropArea = {
      x: pos2.x - recordWidth/2, y: 0,
      width: recordWidth, height: recordHeight
    }

    robot.moveMouse(pos1.x, pos1.y)
    robot.mouseClick()
    await delay(500)
    robot.moveMouseSmooth(pos1.x, pos2.y)
    await delay(500)
    robot.moveMouse(pos1.x, pos1.y)

    // Action!
    await aperture.startRecording({ highlightClicks: true, cropArea })

    robot.moveMouseSmooth(pos2.x, pos2.y, 2)
    await delay(1000)
    robot.moveMouseSmooth(pos3.x, pos3.y, 5)
    await delay(100)
    robot.moveMouseSmooth(pos1.x, pos1.y, 10)
    await delay(500)

    const fp = await aperture.stopRecording()
    // End recording

    await mkdirp(outputPath)
    fs.renameSync(fp, `${outputPath}/0.mp4`)

    const { stderr: deleteEnvError } = await exec('defaults delete com.apple.dock autohide && defaults delete com.apple.dock autohide-delay && killall Dock')
    if (deleteEnvError) {
      console.error('An error occured while cleaning the dock autohide-delay environment')
      console.info('Please manually run this command to make sure everything is properly reset:')
      console.info('defaults delete com.apple.dock autohide && defaults delete com.apple.dock autohide-delay && killall Dock')
      throw new Error(deleteEnvError)
    }

    return { filepath: `${outputPath}/0`, isVideo: true }
  }
}
