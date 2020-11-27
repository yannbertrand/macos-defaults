import path from 'path'

const FILES = [
  'dock/orientation/bottom.js',
  'dock/orientation/left.js',
  'dock/orientation/right.js',
  'finder/AppleShowAllFiles/false.js',
  'finder/AppleShowAllFiles/true.js',
]

console.info(`\nFound ${FILES.length} scripts to run.`)

for (const scriptFile of FILES) {
  const script = await import(`./${scriptFile}`)
  await script.run(getImagePath(scriptFile))
}

console.info(`\nAll videos and screenshots were successfully recorded.\n`)

function getImagePath(file) {
  return path.normalize(`../images/${path.dirname(file)}`)
}
