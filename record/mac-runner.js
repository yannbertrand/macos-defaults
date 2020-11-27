const aperture = require('aperture')()
const wait = require('delay')
const fs = require('fs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

class MacRunner {
  constructor(commands = []) {
    this.commands = commands
  }

  /**
   * Set MacOS defaults system
   * @param {*} domain Application domain
   * @param {*} key Default key
   * @param {*} params Values for the default
   * @param {*} after Action to perform after setting the default (ex: killall Finder)
   */
  setDefault(domain, key, params, after) {
    return this.register(() => {
      const defaultCommand = `defaults write ${domain} ${key} ${params}`
      const command = after ? `${defaultCommand} && ${after}` : defaultCommand
      return execCommand(command)
    })
  }

  /**
   * Delete MacOS defaults system
   * @param {*} domain Application domain
   * @param {*} key Default key
   * @param {*} after Action to perform after setting the default (ex: killall Dock)
   */
  deleteDefault(domain, key, after) {
    return this.register(() => {
      const defaultCommand = `defaults delete ${domain} ${key}`
      const command = after ? `${defaultCommand} && ${after}` : defaultCommand
      return execCommand(command)
    })
  }

  /**
   * Open an application from it's name
   * @param {*} appName Application name (ex: Finder)
   * @param {*} params Application parameters
   */
  openApp(appName, params = '') {
    return this.register(() => execCommand(`open -a "${appName}" ${params}`))
  }

  /**
   * Make active a running application
   * @param {*} appName Application name
   */
  activateApp(appName) {
    return this.register(() =>
      execCommand(`osascript -e 'tell application "${appName}" to activate'`)
    )
  }

  /**
   * Move and resize an application window
   * @param {*} appName Application name
   * @param {*} x X coordinate (from the left of the screen)
   * @param {*} y Y coordinate (from the top of the screen)
   * @param {*} width Width of the app window
   * @param {*} height Height of the app window
   */
  moveAndResizeApp(appName, x, y, width, height) {
    const h = { start: x, end: x + width }
    const v = { start: y, end: y + height }
    return this.register(() =>
      execCommand(
        `osascript -e 'tell application "${appName}" to set the bounds of the first window to {${h.start}, ${v.start}, ${h.end}, ${v.end}}'`
      )
    )
  }

  /**
   * Capture the whole screen into a file
   * @param {*} output Output file name (png)
   */
  captureScreen(output) {
    return this.register(() => execCommand(`screencapture ${output}`))
  }

  /**
   * Capture a screen rect into a file
   * @param {*} x X coordinate (from the left of the screen)
   * @param {*} y Y coordinate (from the top of the screen)
   * @param {*} width Width of the capture
   * @param {*} height Height of the capture
   * @param {*} output Output file name (png)
   */
  captureScreenRect(x, y, width, height, output) {
    return this.register(() =>
      execCommand(`screencapture -R${x},${y},${width},${height} ${output}`)
    )
  }

  /**
   * Capture the app window into a file
   * @param {*} appName Application name to capture
   * @param {*} output Output file name (png)
   */
  captureApp(appName, output) {
    return this.register(() =>
      execCommand(
        `screencapture -o -l$(osascript -e 'tell app "${appName}" to id of window 1') ${output}`
      )
    )
  }

  /**
   * Start the video recording using aperturejs
   * @param {*} options aperturejs options
   */
  startVideo(options) {
    return this.register(async () => {
      console.info('   Start video recording...')
      await aperture.startRecording(options)
      await aperture.isFileReady
    })
  }

  /**
   * Stop the video recording
   * @param {*} output video file output
   */
  stopVideo(output) {
    return this.register(async () => {
      console.info('   Stop video recording...')
      const fp = await aperture.stopRecording()
      if (fs.existsSync(output)) {
        fs.unlinkSync(output)
      }
      fs.renameSync(fp, output)
    })
  }

  /**
   * Wait for a given delay
   * @param {*} delay Delay in ms
   */
  wait(delay) {
    return this.register(() => wait(delay))
  }

  /**
   * Execute the runner with all given commands
   */
  async run() {
    await this.commands.reduce((p, fn) => p.then(fn), Promise.resolve())
  }

  register(command) {
    this.commands.push(command)
    return new MacRunner(this.commands)
  }
}

async function execCommand(command, delay = 1000) {
  console.info(`   Command: [${command}]`)
  const { stderr } = await exec(command)
  if (stderr) {
    throw new Error(stderr)
  }
  await wait(delay)
}

module.exports = MacRunner
