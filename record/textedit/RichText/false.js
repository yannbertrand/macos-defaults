const MacRunner = require('../../mac-runner')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording TextEdit opens rich text files to true')

    try {
      const fileName = '/tmp/lorem.txt';
      await manageFile(fileName, true)
      await addContentToFile(fileName, "")

      const runner = new MacRunner()
      await runner
        .setDefault(
          'com.apple.TextEdit',
          'RichText',
          '-bool true', '1',
          ''
        )
        .openApp('TextEdit', fileName)
        .captureApp('TextEdit', `${outputPath}/false.png`)
        .deleteDefault(
          'com.apple.TextEdit',
          'RichText',
          'killall -SIGKILL TextEdit'
        )
        .run()

        await manageFile(fileName, false);
    } catch (runnerError) {
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(`${outputPath}/false.png`, outputPath, 'false')
    } catch (compressPngImageError) {
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/false` }
  }
}

async function manageFile(filename, create) {
  console.log(`   Command: ${create ? 'create' : 'remove'} ${filename}`)
  const { stderr: mngFile } = await exec(
    `${create ? 'touch' : 'rm -f'} ${filename}`
  )
  if (mngFile) {
    console.error(
      'An error occured while working with a file'
    )
    throw new Error(mngFile)
  }
}

async function addContentToFile(filename, content) {
  console.log(`   Command: add content to ${filename}`)
  const { stderr: mngFile } = await exec(
    `cat > ${filename} << EOF 
${content}
EOF`
  )
  if (mngFile) {
    console.error(
      'An error occured while working with a file'
    )
    throw new Error(mngFile)
  }
}
