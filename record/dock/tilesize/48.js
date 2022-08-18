const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock icon size with param set to 48')

    try {
      const runner = new MacRunner()
      await runner
        .setDefault('com.apple.dock', 'tilesize', '-int 48', '48')
        .killApp('Dock')
        .wait(1000)
        .captureScreen(`${outputPath}/48-tmp.png`)
        .deleteDefault('com.apple.dock', 'tilesize')
        .killApp('Dock')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/48-tmp.png`, outputPath, '48')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/48` }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info('defaults delete com.apple.dock tilesize && killall Dock')
}
