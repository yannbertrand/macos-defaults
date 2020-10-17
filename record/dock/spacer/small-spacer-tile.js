const delay = require('delay')
const glob = require('glob-promise')
const robot = require('robotjs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording addition of spacer tile to dock')

    const { stderr: setEnvError } = await exec(`defaults write com.apple.screencapture show-thumbnail -bool false && defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="small-spacer-tile";}' && killall Dock`)
    if (setEnvError) {
      console.error('An error occured while setting up the dock spacer tile')
      logFullRollbackInfo()
      throw new Error(setEnvError)
    }

    // Preparation
    await delay(3000)

    // Screenshot
    robot.keyTap('3', ['command', 'shift'])
    
    await delay(1000)
    const screenshot = (await glob(`/Users/${process.env.USER}/Desktop/*.png`)).pop()

    try {
      await compressPngImage(screenshot, outputPath, 'small-spacer-tile')
    } catch (compressPngImageError) {
      logFullRollbackInfo()
      throw new Error(compressPngImageError)
    }

    const { stderr: deleteEnvError } = await exec('defaults delete com.apple.screencapture show-thumbnail')
    if (deleteEnvError) {
      console.error('An error occured while cleaning the dock orientation environment')
      logRollbackInfo()
      throw new Error(deleteEnvError)
    } else {
      logRollbackInfo()
    }

    return { filepath: `${outputPath}/small-spacer-tile` }
  }
}

function logFullRollbackInfo() {
  console.info('Please manually perform these steps to make sure everything is properly reset:')
  console.info('1. Run the following command in the console:')
  console.info('defaults delete com.apple.screencapture show-thumbnail')
  console.info('2. Right-click the spacer tile in the dock and then click "Remove from Dock"')
}

function logRollbackInfo() {
    console.info('Please manually perform this step to make sure everything is properly reset:')
    console.info('Right-click the spacer tile in the dock and then click "Remove from Dock"')
  }
