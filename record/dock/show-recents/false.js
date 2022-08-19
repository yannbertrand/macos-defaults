const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock show-recents with param set to false')

    try {
      const { screenWidth, screenHeight } = MacRunner.getScreenSize()

      // Dock gets larger when not showing most recent Apps
      const dockHeight = MacRunner.getDockHeight() + 4

      const runner = new MacRunner()
      await runner
        .setDefault('com.apple.dock', 'show-recents', '-bool false', '0')
        .killApp('Dock')
        .wait(1000)
        .captureScreenRect(
          screenWidth - 740,
          screenHeight - dockHeight,
          740,
          dockHeight,
          `${outputPath}/false-tmp.png`
        )
        .deleteDefault('com.apple.dock', 'show-recents')
        .killApp('Dock')
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
  console.info('defaults delete com.apple.dock show-recents && killall Dock')
}
