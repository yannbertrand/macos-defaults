const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log(
      '> Recording safari ShowFullURLInSmartSearchField with param set to true'
    )

    try {
      const runner = new MacRunner()
      await runner
        .setDefault(
          'com.apple.safari',
          'ShowFullURLInSmartSearchField',
          '-bool true',
          '1'
        )
        .openApp('Safari', '-F https://www.apple.com/macos/ventura/')
        .activateApp('Safari')
        .moveAndResizeApp('Safari', 0, 0, 740, 250)
        .captureApp('Safari', `${outputPath}/true-tmp.png`)
        .deleteDefault('com.apple.safari', 'ShowFullURLInSmartSearchField')
        .killApp('Safari')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/true-tmp.png`, outputPath, 'true')
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
    'defaults delete com.apple.safari ShowFullURLInSmartSearchField && killall Safari'
  )
}
