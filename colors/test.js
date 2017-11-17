const ColorPrinter = require('./lib')

function log(str) {
  console.log(str)
}

function Test_4bit() {
  console.info("\nRunning Test_4bit")
  console.info("-----------------")

  console.info("Default Colors")
  for (let i=0; i < 8; i++) {
    const fg = ColorPrinter.fg_4bit("hello world", 37-i)
    const bg = ColorPrinter.bg_4bit("hello world", 47-i)
    log(`${i+1}. ${fg} ${bg}`)
  }

  console.info("\nBright Colors")
  for (let i=0; i < 8; i++) {
    const fg = ColorPrinter.fg_4bit("hello world", 37-i, true)
    const bg = ColorPrinter.bg_4bit("hello world", 107-i)
    log(`${i+1}. ${fg} ${bg}`)
  }

  console.log()
}

Test_4bit()


function Test_8bit() {
  console.info("\nRunning Test_8bit")
  console.info("-----------------")

  console.info("256 Colors")

  let fgBuffer = ''
  let bgBuffer = ''

  for (let i=0; i < 256; i++) {
    fgBuffer += ColorPrinter.fg_8bit('Aa', i)
    bgBuffer += ColorPrinter.bg_8bit(' ', i)

    if ((i+1)%32 === 0) {
      fgBuffer += '\n'
      bgBuffer += '\n'
    }
  }

  log(fgBuffer)
  log(bgBuffer)
}

Test_8bit()

function Test_24bit() {
  console.info("\nRunning Test_8bit")
  console.info("-----------------")

  console.info("16 Million Colors (Only Some Gradients")

  console.info('Red Gradient')
  for (let i=0; i < 256; i++) {
    process.stdout.write(ColorPrinter.bg_24bit(' ', i, 0, 0))
    if ((i+1)%32 === 0) { process.stdout.write('\n') }
  }
  console.log("\n")

  console.info ('Green Gradient')
  for (let i=0; i < 256; i++) {
    process.stdout.write(ColorPrinter.bg_24bit(' ', 0, i, 0))
    if ((i+1)%32 === 0) { process.stdout.write('\n') }
  }
  console.log("\n")

  console.info ('Blue Gradient')
  for (let i=0; i < 256; i++) {
    process.stdout.write(ColorPrinter.bg_24bit(' ', 0, 0, i))
    if ((i+1)%32 === 0) { process.stdout.write('\n') }
  }
  console.log("\n")

  console.info ('Magenta Gradient')
  for (let i=0; i < 256; i++) {
    process.stdout.write(ColorPrinter.bg_24bit(' ', i, 0, i))
    if ((i+1)%32 === 0) { process.stdout.write('\n') }
  }
  console.log("\n")

  console.info ('Yellow Gradient')
  for (let i=0; i < 256; i++) {
    process.stdout.write(ColorPrinter.bg_24bit(' ', i, i, 0))
    if ((i+1)%32 === 0) { process.stdout.write('\n') }
  }
  console.log("\n")

  console.info ('Cyan Gradient')
  for (let i=0; i < 256; i++) {
    process.stdout.write(ColorPrinter.bg_24bit(' ', 0, i, i))
    if ((i+1)%32 === 0) { process.stdout.write('\n') }
  }
  console.log("\n")

  console.info ('Black to White')
  for (let i=0; i < 256; i++) {
    process.stdout.write(ColorPrinter.bg_24bit(' ', i, i, i))
    if ((i+1)%32 === 0) { process.stdout.write('\n') }
  }
  console.log("\n")
}

Test_24bit()
