const robot = require('robotjs')
const MacRunner = require('../../mac-runner')
const delay = require('delay')
const { compressVideo } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log(
      '> Recording finder NSToolbarTitleViewRolloverDelay with param set to 0.5'
    )

    const { width, height } = robot.getScreenSize()
    const recordWidth = 740
    const recordHeight = 404
    const cropArea = {
      x: 0,
      y: height - recordHeight - MacRunner.getMenuBarHeight(),
      width: recordWidth,
      height: recordHeight,
    }
    const pos1 = {
      x: cropArea.x + recordWidth / 3 + 20,
      y: MacRunner.getMenuBarHeight() + 100,
    }
    const pos2 = {
      x: cropArea.x + recordWidth / 3 + 20,
      y: MacRunner.getMenuBarHeight() + 30,
    }

    try {
      const runner = new MacRunner()
      await runner
        .setDefault(
          'NSGlobalDomain',
          'NSToolbarTitleViewRolloverDelay',
          '-float 0.5',
          '0.5'
        )
        .killApp('Finder')
        .openApp('Finder', '~/macos-defaults')
        .activateApp('Finder')
        .moveAndResizeApp('Finder', 0, 0, 740, 400)
        .register(() => robot.moveMouse(pos1.x, pos1.y))
        .startVideo({ highlightClicks: true, cropArea })
        .register(() => delay(300))
        .register(() => robot.moveMouseSmooth(pos2.x, pos2.y))
        .register(() => delay(1500))
        .register(() => robot.moveMouseSmooth(pos1.x, pos1.y))
        .register(() => delay(1000))
        .stopVideo(`${outputPath}/0.5.mp4`)
        .deleteDefault('NSGlobalDomain', 'NSToolbarTitleViewRolloverDelay')
        .killApp('Finder')
        .run()
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressVideo(`${outputPath}/0.5.mp4`, outputPath, '0.5')
    } catch (compressVideoError) {
      logRollbackInfo()
      throw new Error(compressVideoError)
    }

    return { filepath: `${outputPath}/0.5`, isVideo: true }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info(
    'defaults delete NSGlobalDomain NSToolbarTitleViewRolloverDelay && killall Finder'
  )
}
