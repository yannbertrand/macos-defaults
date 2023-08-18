const robot = require('robotjs')
const MacRunner = require('../../mac-runner')
const delay = require('delay')
const { compressVideo } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log(
      '> Recording finder FXEnableExtensionChangeWarning with param set to true'
    )

    const { width, height } = robot.getScreenSize()
    const recordWidth = 720
    const recordHeight = 404
    const cropArea = {
      x: width / 2 - recordWidth / 2,
      y: height / 2 - recordHeight / 2 + 200,
      width: recordWidth,
      height: recordHeight,
    }

    try {
      const runner = new MacRunner()
      await runner
        .setDefault(
          'com.apple.finder',
          'FXEnableExtensionChangeWarning',
          '-bool true',
          '1'
        )
        .killApp('Finder')
        .openApp('Finder', '~/macos-defaults')
        .activateApp('Finder')
        .moveAndResizeApp('Finder', cropArea.x, cropArea.y - 398, 740, 400)
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
        .register(() => robot.keyTap('escape'))
        .register(() => delay(800))
        .stopVideo(`${outputPath}/true.mp4`)
        .deleteDefault('com.apple.finder', 'FXEnableExtensionChangeWarning')
        .killApp('Finder')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressVideo(`${outputPath}/true.mp4`, outputPath, 'true')
    } catch (compressVideoError) {
      logRollbackInfo()
      throw new Error(compressVideoError)
    }

    return { filepath: `${outputPath}/true`, isVideo: true }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info(
    'defaults delete com.apple.finder FXEnableExtensionChangeWarning && killall Finder'
  )
}
