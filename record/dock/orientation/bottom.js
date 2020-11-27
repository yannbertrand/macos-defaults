const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock orientation with param set to bottom')

    try {
      const runner = new MacRunner()
      await runner
        .setDefault(
          'com.apple.dock',
          'orientation',
          '-string bottom', 'bottom',
          'killall Dock'
        )
        .captureScreen(`${outputPath}/bottom-tmp.png`)
        .deleteDefault('com.apple.dock', 'orientation', 'killall Dock')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(
        `${outputPath}/bottom-tmp.png`,
        outputPath,
        'bottom'
      )
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/bottom` }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info('defaults delete com.apple.dock orientation && killall Dock')
}
