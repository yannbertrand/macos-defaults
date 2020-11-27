const aperture = require('aperture')()
const delay = require('delay')
const robot = require('robotjs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { makeAppActive, compressVideo } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log(
      '> Recording menu bar clock FlashDateSeparators with param set to false'
    )

    // Set the menu bar menuExtras to only show the clock, it will be on the left of notification center, siri, and spotlight search.
    const { stderr: setEnvError } = await exec(
      `defaults write com.apple.menuextra.clock FlashDateSeparators -bool false && killall SystemUIServer && sleep 10`
    )

    if (setEnvError) {
      console.error(
        'An error occured while setting up the menu bar clock FlashDateSeparators command'
      )
      logRollbackInfo()
      throw new Error(setEnvError)
    }

    // Preparation
    await makeAppActive('Finder')
    const { width, height } = robot.getScreenSize()
    const recordWidth = 400
    const recordHeight = 22
    const cropArea = {
      x: width - recordWidth,
      y: height - recordHeight, // Film the menu bar, which is 22 pixels
      width: recordWidth,
      height: recordHeight,
    }

    // Action!
    await aperture.startRecording({ cropArea })
    await delay(2000)

    const fp = await aperture.stopRecording()
    // End recording

    try {
      await compressVideo(fp, outputPath, 'false')
    } catch (compressVideoError) {
      logRollbackInfo()
      throw new Error(compressVideoError)
    }

    const { stderr: deleteEnvError } = await exec(
      'defaults delete com.apple.menuextra.clock FlashDateSeparators && killall SystemUIServer && sleep 10'
    )
    if (deleteEnvError) {
      console.error(
        'An error occured while cleaning the menu bar clock FlashDateSeparators environment'
      )
      logRollbackInfo()
      throw new Error(deleteEnvError)
    }

    return { filepath: `${outputPath}/false`, isVideo: true }
  },
}

function logRollbackInfo() {
  console.info(
    'Please manually run this command to make sure everything is properly reset:'
  )
  console.info(
    'defaults delete com.apple.menuextra.clock FlashDateSeparators && killall SystemUIServer'
  )
}
