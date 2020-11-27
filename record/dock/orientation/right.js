const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock orientation with param set to right')

    try {
      const runner = new MacRunner()
      await runner
        .setDefault(
          'com.apple.dock',
          'orientation',
          '-string right',
          'killall Dock'
        )
        .wait(2000)
        .captureScreen(`${outputPath}/right-tmp.png`)
        .deleteDefault('com.apple.dock', 'orientation', 'killall Dock')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/right-tmp.png`, outputPath, 'right')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/right` }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info('defaults delete com.apple.dock orientation && killall Dock')
}
