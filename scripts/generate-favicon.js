/**
 * Generates a minimal 32x32 favicon.ico (~750 bytes) from a simple gold icon.
 * Run: node scripts/generate-favicon.js
 */
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

function createMinimalIco() {
  const size = 32
  const pixelCount = size * size

  const icoHeader = Buffer.alloc(6)
  icoHeader.writeUInt16LE(0, 0)
  icoHeader.writeUInt16LE(1, 2)
  icoHeader.writeUInt16LE(1, 4)

  const dirEntry = Buffer.alloc(16)
  dirEntry.writeUInt8(size, 0)
  dirEntry.writeUInt8(size, 1)
  dirEntry.writeUInt8(0, 2)
  dirEntry.writeUInt8(0, 3)
  dirEntry.writeUInt16LE(1, 4)
  dirEntry.writeUInt16LE(32, 6)

  const bmpHeaderSize = 40
  const xorDataSize = pixelCount * 4
  const andDataSize = pixelCount / 8
  const imageSize = bmpHeaderSize + xorDataSize + andDataSize

  dirEntry.writeUInt32LE(imageSize, 8)
  dirEntry.writeUInt32LE(6 + 16, 12)

  const bmpHeader = Buffer.alloc(bmpHeaderSize)
  bmpHeader.writeUInt32LE(bmpHeaderSize, 0)
  bmpHeader.writeInt32LE(size, 4)
  bmpHeader.writeInt32LE(size * 2, 8)
  bmpHeader.writeUInt16LE(1, 12)
  bmpHeader.writeUInt16LE(32, 14)
  bmpHeader.writeUInt32LE(0, 16)
  bmpHeader.writeUInt32LE(xorDataSize, 20)

  const xorData = Buffer.alloc(xorDataSize)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4
      const cx = x - size / 2
      const cy = y - size / 2
      const dist = Math.sqrt(cx * cx + cy * cy)
      if (dist < size / 2 - 1) {
        xorData[i] = 0x18
        xorData[i + 1] = 0x0c
        xorData[i + 2] = 0xc9
        xorData[i + 3] = 0xff
      } else {
        xorData[i] = 0
        xorData[i + 1] = 0
        xorData[i + 2] = 0
        xorData[i + 3] = 0
      }
    }
  }

  const andData = Buffer.alloc(andDataSize, 0x00)

  const ico = Buffer.concat([icoHeader, dirEntry, bmpHeader, xorData, andData])
  const out = resolve('public/favicon.ico')
  writeFileSync(out, ico)
  console.log(`✅ favicon.ico generated: ${(ico.length / 1024).toFixed(1)}KB`)
}

createMinimalIco()
