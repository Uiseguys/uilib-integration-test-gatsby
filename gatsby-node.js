const fs = require('fs-extra')
const path = require('path')

exports.onPostBootstrap = () => {
  console.log('Copying web components')
  fs.copySync(path.join(__dirname, '/node_modules/@ui-guys/stencil-bs-ui-lib'), path.join(__dirname, '/public/stencil-bs-ui-lib'))
}