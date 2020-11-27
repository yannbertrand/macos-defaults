const delay = require('delay')
const glob = require('glob-promise')
const robot = require('robotjs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { makeAppActive, compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording screenshot disable-shadow with param set to true')

    const { stderr: setEnvError } = await exec(
      'defaults write com.apple.screencapture show-thumbnail -bool false && defaults write com.apple.screencapture disable-shadow -bool true'
    )
    if (setEnvError) {
      console.error(
        'An error occured while setting up the screenshot disble-shadow command'
      )
      logRollbackInfo()
      throw new Error(setEnvError)
    }

    // Preparation
    robot.moveMouse(
      robot.getScreenSize().width / 2,
      robot.getScreenSize().height / 2
    )
    robot.mouseClick()

    await makeAppActive('Safari')

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
    const screenshot = (
      await glob(`/Users/${process.env.USER}/Desktop/*.png`)
    ).pop()

    try {
      await compressPngImage(screenshot, outputPath, 'true')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    const { stderr: deleteEnvError } = await exec(
      'defaults delete com.apple.screencapture show-thumbnail && defaults delete com.apple.screencapture disable-shadow'
    )
    if (deleteEnvError) {
      console.error(
        'An error occured while cleaning the dock autohide-delay environment'
      )
      logRollbackInfo()
      throw new Error(deleteEnvError)
    }

    return { filepath: `${outputPath}/true`, isVideo: false }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info(
    'defaults delete com.apple.screencapture show-thumbnail && defaults delete com.apple.screencapture disable-shadow'
  )
}
