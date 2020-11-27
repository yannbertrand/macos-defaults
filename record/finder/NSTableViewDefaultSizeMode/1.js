const delay = require('delay')
const robot = require('robotjs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const {
  makeAppActive,
  moveAndResizeApp,
  captureImage,
  compressPngImage,
} = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log(
      '> Recording finder NSTableViewDefaultSizeMode with param set to 1'
    )

    const { stderr: setEnvError } = await exec(
      'defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 1 && killall Finder'
    )
    if (setEnvError) {
      console.error(
        'An error occured while setting up the finder NSTableViewDefaultSizeMode command'
      )
      logRollbackInfo()
      throw new Error(setEnvError)
    }
    await delay(1000)

    // Preparation
    await makeAppActive('Finder')
    robot.keyTap('g', ['command', 'shift'])
    await delay(100)
    robot.keyTap('right')
    robot.keyTap('a', 'command')
    robot.keyTap('backspace')
    robot.typeString('~/macos-defaults/')
    await delay(1000)
    robot.keyTap('enter')
    await delay(500)

    const { width, height } = robot.getScreenSize()
    const recordWidth = 720
    const recordHeight = 404
    const cropArea = {
      x: width / 2 - recordWidth / 2,
      y: 345,
      width: recordWidth,
      height: recordHeight,
    }

    await moveAndResizeApp('Finder', cropArea, height)
    await delay(1000)
    const screenshot = `${outputPath}/1.png`

    // Screenshot
    captureImage(
      cropArea.x,
      height - recordHeight - cropArea.y,
      cropArea.width,
      cropArea.height
    ).write(screenshot)

    try {
      await compressPngImage(screenshot, outputPath, '1')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    const { stderr: deleteEnvError } = await exec(
      'defaults delete NSGlobalDomain NSTableViewDefaultSizeMode && killall Finder'
    )
    if (deleteEnvError) {
      console.error(
        'An error occured while cleaning the finder NSTableViewDefaultSizeMode environment'
      )
      logRollbackInfo()
      throw new Error(deleteEnvError)
    }
    await delay(1000)

    return { filepath: `${outputPath}/1` }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info(
    'defaults delete NSGlobalDomain NSTableViewDefaultSizeMode && killall Finder'
  )
}
