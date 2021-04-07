const path = require('path')

const root = path.join(__dirname, '../')
const src = path.join(root, 'src')

module.exports = {
  root,
  src,
  buildPath: path.join(root, '/build'),
  html: {
    beautifyHtml: false
  },
  lighthouse: {
    reportPath: path.join(root, 'reports'),
    PORT: 8080,
    chromeLauncherPort: 9222,
    config: {
      extends: 'lighthouse:default'
    },
    flags: {
      chromeFlags: ['--show-paint-rects'],
      output: 'html'
    }
  }
}
