const MacRunner = require('../../mac-runner')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording TextEdit opens rich text files to true')

    try {
      const fileName = '/tmp/lorem.rtf';
      await manageFile(true, fileName)
      await addContentToFile(fileName, "{\\rtf1\\ansi\\ansicpg1252\\cocoartf2577\\cocoatextscaling0\\cocoaplatform0{\\fonttbl}{\\colortbl;\\red255\\green255\\blue255;}{\\*\\expandedcolortbl;;}\\paperw11900\\paperh16840\\margl1440\\margr1440\\vieww11520\\viewh8400\\viewkind0}")

      const runner = new MacRunner()
      await runner
        .setDefault(
          'com.apple.TextEdit',
          'RichText',
          '-bool true', '1',
          ''
        )
        .openApp('TextEdit', fileName)
        .captureApp('TextEdit', `${outputPath}/true.png`)
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
      await compressPngImage(`${outputPath}/true.png`, outputPath, 'true')
    } catch (compressPngImageError) {
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/true` }
  }
}

async function manageFile(create, filename) {
  const cmd = create ? 'touch' : 'rm -f';
  const { stderr: mngFile } = await exec(
    `${cmd} ${filename}`
  )
  if (mngFile) {
    console.error(
      'An error occured while working with a file'
    )
    throw new Error(mngFile)
  }
}

async function addContentToFile(filename, content) {
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