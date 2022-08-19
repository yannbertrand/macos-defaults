const MacRunner = require('../mac-runner')
const { compressPngImage } = require('../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock readme screenshot')

    try {
      const { screenWidth, screenHeight } = MacRunner.getScreenSize()
      const dockHeight = MacRunner.getDockHeight()

      const runner = new MacRunner()
      await runner
        .captureScreenRect(
          0,
          screenHeight - dockHeight,
          screenWidth,
          dockHeight,
          `${outputPath}/dock-tmp.png`
        )
        .run()
    } catch (runnerError) {
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/dock-tmp.png`, outputPath, 'dock')
    } catch (compressPngImageError) {
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/dock` }
  },
}
