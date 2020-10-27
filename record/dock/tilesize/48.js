const delay = require('delay')
const glob = require('glob-promise')
const robot = require('robotjs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock icon size with param set to 48')

    const { stderr: setEnvError } = await exec('defaults write com.apple.screencapture show-thumbnail -bool false && defaults write com.apple.dock tilesize -string bottom && killall Dock')
    if (setEnvError) {
      console.error('An error occured while setting up the dock tilesize command')
      logRollbackInfo()
      throw new Error(setEnvError)
    }

    // Preparation
    await delay(3000)

    // Screenshot
    robot.keyTap('3', ['command', 'shift'])
    
    await delay(1000)
    const screenshot = (await glob(`/Users/${process.env.USER}/Desktop/*.png`)).pop()

    try {
      await compressPngImage(screenshot, outputPath, '48')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    const { stderr: deleteEnvError } = await exec('defaults delete com.apple.screencapture show-thumbnail && defaults delete com.apple.dock tilesize && killall Dock')
    if (deleteEnvError) {
      console.error('An error occured while cleaning the dock tilesize environment')
      logRollbackInfo()
      throw new Error(deleteEnvError)
    }

    return { filepath: `${outputPath}/48` }
  }
}

function logRollbackInfo() {
  console.info('Please manually run this command to make sure everything is properly reset:')
  console.info('defaults delete com.apple.screencapture show-thumbnail && defaults delete com.apple.dock tilesize && killall Dock')
}
