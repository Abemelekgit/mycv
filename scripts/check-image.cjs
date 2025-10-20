const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const img = path.join(__dirname, '..', 'public', 'avatar.jpg')

async function info() {
  if (!fs.existsSync(img)) {
    console.error('No avatar found at', img)
    process.exit(1)
  }
  try {
    const stats = fs.statSync(img)
    const metadata = await sharp(img).metadata()
    console.log('path:', img)
    console.log('size:', stats.size, 'bytes')
    console.log('format:', metadata.format)
    console.log('width x height:', metadata.width, 'x', metadata.height)
    console.log('hasAlpha:', metadata.hasAlpha)
    console.log('space:', metadata.space)
  } catch (err) {
    console.error('error reading image metadata:', err)
    process.exit(1)
  }
}

info()
