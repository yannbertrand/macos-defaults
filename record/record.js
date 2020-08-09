const glob = require('glob-promise')
const path = require('path')
const robot = require('robotjs')

module.exports = async (files) => {
  try {
    const scriptFiles = files.length > 0 ? files : await glob('!(node_modules)/*/*')

    console.info(`Found ${scriptFiles.length} scripts to run. Please close Safari and do not move the mouse until the end\n`)
    robot.keyTap('h', 'command')

    for (const scriptFile of scriptFiles) {
      const script = require(`./${scriptFile}`)
      await script.run(getImagePath(scriptFile))
    }

    console.info(`\nAll videos and screenshots were successfully recorded. You can use your mouse again\n`)
  } catch (error) {
    if (error.code === 'RECORDER_TIMEOUT') {
      console.error(error.message)
      console.info('The recorder timed out.')
      console.info('You probably need to activate the screen recording feature for the terminal you\'re using.')
      console.info('You\'ll find that settings under: System Parameters > Security & Confidentiality > Confidentiality > Screen recording')
    } else if (error.code === 'ENOTDIR') {
      console.error(error.message)
      console.info('A mandatory folder was not found.')
    } else {
      console.error('An error occured while recording', error)
    }
  }
}

const getImagePath = file => path.normalize(`../images/${path.dirname(file)}`)
