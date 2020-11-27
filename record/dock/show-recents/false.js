const delay = require('delay')
const robot = require('robotjs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { captureImage, compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock show-recents with param set to false')

    const { stderr: setEnvError } = await exec(
      'defaults write com.apple.dock show-recents -bool false && killall Dock'
    )
    if (setEnvError) {
      console.error(
        'An error occured while setting up the dock show-recents command'
      )
      logRollbackInfo()
      throw new Error(setEnvError)
    }

    // Preparation
    await delay(3000)
    const { width, height } = robot.getScreenSize()
    const screenshot = `${outputPath}/dock-tmp.png`

    // Screenshot
    captureImage(width / 2, height - 80, width, 80).write(screenshot)

    try {
      await compressPngImage(screenshot, outputPath, 'false')
    } catch (compressPngImageError) {
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/false` }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info('defaults delete com.apple.dock show-recents && killall Dock')
}
