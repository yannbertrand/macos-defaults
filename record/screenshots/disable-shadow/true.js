const delay = require('delay')
const glob = require('glob-promise')
const robot = require('robotjs')
const util = require('util')
const fs = require('fs')
const mkdirp = require('mkdirp')
const exec = util.promisify(require('child_process').exec)

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording screenshot disable-shadow with param set to true')

    const { stderr: setEnvError } = await exec('defaults write com.apple.screencapture show-thumbnail -bool false && defaults write com.apple.screencapture disable-shadow -bool true')
    if (setEnvError) {
      console.error('An error occured while setting up the screenshot disble-shadow command')
      console.info('Please manually run this command to reset:')
      console.info('defaults delete com.apple.screencapture show-thumbnail && defaults delete com.apple.screencapture disable-shadow')
      throw new Error(setEnvError)
    }

    // Preparation
    robot.moveMouse(robot.getScreenSize().width / 2, robot.getScreenSize().height / 2)
    robot.mouseClick()

    robot.keyTap('space', 'command')
    await delay(100)
    robot.keyTap('s')
    robot.typeString('afari')
    await delay(1000)
    robot.keyTap('enter')
    await delay(500)

    robot.moveMouse(robot.getScreenSize().width / 2, robot.getScreenSize().height / 2)
    robot.mouseClick()

    robot.keyTap('l', 'command')
    await delay(100)

    robot.keyTap('h')
    robot.typeString('ttps://www.apple.com/macos/')
    await delay(100)
    robot.keyTap('enter')
    await delay(8000)

    // Screenshot
    robot.keyTap('4', ['command', 'shift'])
    await delay(100)
    robot.keyTap('space')
    await delay(100)
    robot.keyTap('enter')
    await delay(100)

    robot.keyTap('w', 'command')

    await delay(1000)
    const screenshot = (await glob(`/Users/${process.env.USER}/Desktop/*.png`)).pop()

    await mkdirp(outputPath)
    fs.renameSync(screenshot, `${outputPath}/true.png`)

    const { stderr: deleteEnvError } = await exec('defaults delete com.apple.screencapture show-thumbnail && defaults delete com.apple.screencapture disable-shadow')
    if (deleteEnvError) {
      console.error('An error occured while cleaning the dock autohide-delay environment')
      console.info('Please manually run this command to make sure everything is properly reset:')
      console.info('defaults delete com.apple.screencapture show-thumbnail && defaults delete com.apple.screencapture disable-shadow')
      throw new Error(deleteEnvError)
    }

    return { filepath: `${outputPath}/true`, isVideo: false }
  }
}
