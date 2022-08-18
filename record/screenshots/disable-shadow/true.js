const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log(
      '> Recording screencapture disable-shadow with param set to true'
    )

    try {
      const runner = new MacRunner()
      await runner
        .openApp('Safari', '-F https://apple.com')
        .activateApp('Safari')
        .moveAndResizeApp('Safari', 0, 0, 740 * 2, 413 * 2)
        // We do not set the default as `captureApp` takes a param to disable shadow
        .captureApp('Safari', `${outputPath}/true-tmp.png`, true)
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

function logRollbackInfo() {}
