const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log(
      '> Recording safari ShowFullURLInSmartSearchField with param set to false'
    )

    try {
      const runner = new MacRunner()
      await runner
        .setDefault(
          'com.apple.safari',
          'ShowFullURLInSmartSearchField',
          '-bool false',
          '0'
        )
        .openApp('Safari', '-F https://www.apple.com/macos/monterey/')
        .activateApp('Safari')
        .moveAndResizeApp('Safari', 0, 0, 740, 250)
        .captureApp('Safari', `${outputPath}/false-tmp.png`)
        .deleteDefault('com.apple.safari', 'ShowFullURLInSmartSearchField')
        .killApp('Safari')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/false-tmp.png`, outputPath, 'false')
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
    'defaults delete com.apple.safari ShowFullURLInSmartSearchField && killall Safari'
  )
}
