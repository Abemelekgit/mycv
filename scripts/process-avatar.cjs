const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const projectRoot = path.resolve(__dirname, '..')
const input = path.join(projectRoot, 'public', 'avatar.jpg')
const outJpg = path.join(projectRoot, 'public', 'avatar.jpg')
const outWebp = path.join(projectRoot, 'public', 'avatar.webp')

async function process() {
  if (!fs.existsSync(input)) {
    console.error('Input file not found:', input)
    process.exit(1)
  }

  try {
    // Resize and sharpen, write optimized JPEG
    await sharp(input)
      .resize(1600, 1600, { fit: 'cover', position: 'centre' })
      // stronger but controlled sharpen
      .sharpen(1.2, 0.6, 0.02)
      .jpeg({ quality: 98 })
      .toFile(outJpg + '.tmp')

    // Create higher-quality webp version
    await sharp(outJpg + '.tmp')
      .webp({ quality: 92 })
      .toFile(outWebp)

    // Replace original
    fs.renameSync(outJpg + '.tmp', outJpg)

    console.log('Processed avatar written to:', outJpg)
    console.log('WebP copy written to:', outWebp)
  } catch (err) {
    console.error('Error processing avatar:', err)
    process.exit(1)
  }
}

process()
