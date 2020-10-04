const aperture = require('aperture')()
const delay = require('delay')
const robot = require('robotjs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { makeAppActive, moveAndResizeApp, compressVideo } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording finder NSToolbarTitleViewRolloverDelay with param set to 0')

    const { stderr: setEnvError } = await exec('defaults write NSGlobalDomain NSToolbarTitleViewRolloverDelay -float 0 && killall Finder')
    if (setEnvError) {
      console.error('An error occured while setting up the finder NSToolbarTitleViewRolloverDelay command')
      logRollbackInfo()
      throw new Error(setEnvError)
    }
    await delay(1000)

    // Preparation
    await makeAppActive('Finder')
    await delay(500)

    const { width, height } = robot.getScreenSize()
    const recordWidth = 720
    const recordHeight = 404
    const cropArea = {
      x: width / 2 - recordWidth / 2, y: 345,
      width: recordWidth, height: recordHeight
    }
    const pos1 = { x: cropArea.x + recordWidth / 3, y: cropArea.y }
    const pos2 = { x: cropArea.x + recordWidth / 3, y: cropArea.y - recordHeight / 2 + 38 }

    await moveAndResizeApp('Finder', cropArea, height)
    robot.moveMouse(pos1.x, pos1.y)

    // Action!
    await aperture.startRecording({ highlightClicks: true, cropArea })

    robot.moveMouseSmooth(pos2.x, pos2.y)
    await delay(1500)
    robot.moveMouseSmooth(pos1.x, pos1.y)
    await delay(1000)

    const fp = await aperture.stopRecording()
    // End recording

    robot.keyTap('w', 'command')

    try {
      await compressVideo(fp, outputPath, '0')
    } catch (compressVideoError) {
      logRollbackInfo()
      throw new Error(compressVideoError)
    }

    const { stderr: deleteEnvError } = await exec('defaults delete NSGlobalDomain NSToolbarTitleViewRolloverDelay && killall Finder')
    if (deleteEnvError) {
      console.error('An error occured while cleaning the finder NSToolbarTitleViewRolloverDelay environment')
      logRollbackInfo()
      throw new Error(deleteEnvError)
    }
    await delay(1000)

    return { filepath: `${outputPath}/0`, isVideo: true }
  }
}

function logRollbackInfo() {
  console.info('Please manually run this command to make sure everything is properly reset:')
  console.info('defaults delete NSGlobalDomain NSToolbarTitleViewRolloverDelay && killall Finder')
}
