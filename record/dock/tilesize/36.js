const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock icon size with param set to 36')

    try {
      const runner = new MacRunner()
      await runner
        .setDefault('com.apple.dock', 'tilesize', '-int 36', '36')
        .killApp('Dock')
        .wait(1000)
        .captureScreen(`${outputPath}/36-tmp.png`)
        .deleteDefault('com.apple.dock', 'tilesize')
        .killApp('Dock')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/36-tmp.png`, outputPath, '36')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/36` }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info('defaults delete com.apple.dock tilesize && killall Dock')
}
