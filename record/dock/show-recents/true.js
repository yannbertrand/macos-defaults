const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock show-recents with param set to true')

    try {
      const { screenWidth, screenHeight } = MacRunner.getScreenSize()
      const dockHeight = MacRunner.getDockHeight()

      const runner = new MacRunner()
      await runner
        .setDefault('com.apple.dock', 'show-recents', '-bool true', '1')
        .killApp('Dock')
        .wait(1000)
        .captureScreenRect(
          screenWidth - 740,
          screenHeight - dockHeight,
          740,
          dockHeight,
          `${outputPath}/true-tmp.png`,
        )
        .deleteDefault('com.apple.dock', 'show-recents')
        .killApp('Dock')
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
    'Please manually run this command to make sure everything is properly reset:',
  )
  console.info('defaults delete com.apple.dock show-recents && killall Dock')
}
