class ColorPrinter {

  // rgb colors
  static fg_24bit(string, r=0, g=0, b=0) {
    return `\x1b[38;2;${r};${g};${b}m${string}\x1b[0m`
  }

  static bg_24bit(string, r=0, g=0, b=0) {
    return `\x1b[48;2;${r};${g};${b}m${string}\x1b[0m`
  }


  // 256 colors
  static fg_8bit(string, color) {
    if (color < 0 || color > 255) {
      throw new Error(`Color is ${color}. Only colors from 0 to 255 are valid`)
    }

    return `\x1b[38;5;${color}m${string}\x1b[0m`
  }

  static bg_8bit(string, color) {
    if (color < 0 || color > 255) {
      throw new Error(`Color is ${color}. Only colors from 0 to 255 are valid`)
    }

    return `\x1b[48;5;${color}m${string}\x1b[0m`
  }


  // 4bit
  static fg_4bit(string, color, isBright=false) {
    if (color < 30 || color > 37) {
      throw new Error(`Color is ${color}. Only colors from 30 to 37 are valid`)
    }

    const bright = isBright ? '1;' : ''

    return `\x1b[${bright}${color}m${string}\x1b[0m`
  }

  static bg_4bit(string, color) {
    const isBright = color >= 100 && color <= 107
    const isDefault = color >= 40 && color <= 47

    if (isBright === false && isDefault === false) {
      throw new Error(`Color is ${color}. Only colors from 40 to 47 or 100 to 107 are valid`)
    }

    return `\x1b[${color}m${string}\x1b[0m`
  }
}

module.exports = ColorPrinter
module.default = ColorPrinter
