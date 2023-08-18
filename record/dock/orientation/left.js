const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock orientation with param set to left')

    try {
      const runner = new MacRunner()
      await runner
        .setDefault('com.apple.dock', 'orientation', '-string left', 'left')
        .killApp('Dock')
        .wait(1000)
        .captureScreen(`${outputPath}/left-tmp.png`)
        .deleteDefault('com.apple.dock', 'orientation')
        .killApp('Dock')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/left-tmp.png`, outputPath, 'left')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/left` }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info('defaults delete com.apple.dock orientation && killall Dock')
}
