const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording finder show hidden files to false')

    try {
      const runner = new MacRunner()
      await runner
        .setDefault('com.apple.Finder', 'AppleShowAllFiles', '-bool false', '0')
        .killApp('Finder')
        .openApp('Finder', '~')
        .captureApp('Finder', `${outputPath}/false.png`)
        .deleteDefault('com.apple.Finder', 'AppleShowAllFiles')
        .killApp('Finder')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/false.png`, outputPath, 'false')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/false` }
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
