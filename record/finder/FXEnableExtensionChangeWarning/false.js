const robot = require('robotjs')
const MacRunner = require('../../mac-runner')
const delay = require('delay')
const { compressVideo } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log(
      '> Recording finder FXEnableExtensionChangeWarning with param set to false',
    )

    const { width, height } = robot.getScreenSize()
    const recordWidth = 720
    const recordHeight = 404
    const cropArea = {
      x: 0,
      y: height - recordHeight - MacRunner.getMenuBarHeight(),
      width: recordWidth,
      height: recordHeight,
    }

    try {
      const runner = new MacRunner()
      await runner
        .setDefault(
          'com.apple.finder',
          'FXEnableExtensionChangeWarning',
          '-bool false',
          '0',
        )
        .killApp('Finder')
        .openApp('Finder', '~/macos-defaults')
        .activateApp('Finder')
        .moveAndResizeApp('Finder', 0, 0, 740, 400)
        .register(() => robot.keyTap('right'))
        .register(() => delay(100))
        .register(() => robot.keyTap('right'))
        .register(() => delay(100))
        .startVideo({ highlightClicks: true, cropArea })
        .register(() => robot.keyTap('enter'))
        .register(() => robot.keyTap('right', 'command'))
        .register(() => robot.keyTap('left', ['shift', 'alt']))
        .register(() => robot.typeStringDelayed('txt', 300))
        .register(() => robot.keyTap('enter'))
        .register(() => delay(800))
        .register(() => robot.keyTap('enter'))
        .register(() => robot.keyTap('right', 'command'))
        .register(() => robot.keyTap('left', ['shift', 'alt']))
        .register(() => robot.typeStringDelayed('md', 300))
        .register(() => robot.keyTap('enter'))
        .register(() => delay(800))
        .stopVideo(`${outputPath}/false.mp4`)
        .deleteDefault('com.apple.finder', 'FXEnableExtensionChangeWarning')
        .killApp('Finder')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressVideo(`${outputPath}/false.mp4`, outputPath, 'false')
    } catch (compressVideoError) {
      logRollbackInfo()
      throw new Error(compressVideoError)
    }

    return { filepath: `${outputPath}/false`, isVideo: true }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:',
  )
  console.info(
    'defaults delete com.apple.finder FXEnableExtensionChangeWarning && killall Finder',
  )
}
