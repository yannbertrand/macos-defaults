const delay = require('delay')
const robot = require('robotjs')
const { captureImage, compressPngImage } = require('../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording dock readme screenshot')

    // Preparation
    const { width, height } = robot.getScreenSize()
    const screenshot = `${outputPath}/dock-tmp.png`

    await delay(2000)

    // Screenshot
    captureImage(0, height - 80, width, 80).write(screenshot)

    try {
      await compressPngImage(screenshot, outputPath, 'dock')
    } catch (compressPngImageError) {
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/dock` }
  },
}
