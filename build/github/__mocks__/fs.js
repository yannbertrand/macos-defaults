const fs = jest.genMockFromModule('fs');

const result = {}

fs.mkdirSync = jest.fn()
fs.writeFileSync = jest.fn((path, content) => {
  result[path] = content
})
fs.copyFileSync = jest.fn((origin, destination) => {
  result[destination] = `copied:${origin}`
})
fs.readFakeFileSync = jest.fn(path => result[path])
fs.readFileSync = jest.requireActual("fs").readFileSync

module.exports = fs
