const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording finder show hidden files to true')

    try {
      const runner = new MacRunner()
      await runner
        .setDefault('com.apple.Finder', 'AppleShowAllFiles', '-bool true', '1')
        .killApp('Finder')
        .wait(1000)
        .openApp('Finder', '~')
        .activateApp('Finder')
        .moveAndResizeApp('Finder', 0, 0, 740, 400)
        .captureApp('Finder', `${outputPath}/true.png`)
        .deleteDefault('com.apple.Finder', 'AppleShowAllFiles')
        .killApp('Finder')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/true.png`, outputPath, 'true')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/true` }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info(
    'defaults delete com.apple.Finder AppleShowAllFiles && killall Finder'
  )
}
