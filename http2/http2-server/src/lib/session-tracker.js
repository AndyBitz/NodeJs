// packages
const chalk = require('chalk')


class SessionTracker {
  constructor() {
    this._counter = 1
  }

  add(session) {
    if (session._id === undefined) {
      console.log(chalk.yellow(`add session ${this._counter}\n`))
      session._id = this._counter
      const ref = this._counter
      this._counter++
      session.on('close', () => {
        console.log(chalk.red(`close session ${ref}\n`))
      })
    }
  }
}

SessionTracker.instance = SessionTracker.instance || new SessionTracker()

module.exports = SessionTracker.instance
