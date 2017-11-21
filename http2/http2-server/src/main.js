// packages
const http2 = require('http2')
const fs = require('fs')
const chalk = require('chalk')
const sessionTracker = require('./lib/session-tracker')


// create server
const server = http2.createSecureServer({
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem')
})

const html = fs.readFileSync('./src/public/index.html')

// handle errors
server.on('error', console.error)
server.on('socketError', console.error)

// each 'request' creates one http2session

// handle streams
// each http2session creates multiple streams for each 'request'
// (not really a request but the client asked for it
// within this session)
server.on('stream', (stream, headers, flags) => {

  const session = stream.session
  sessionTracker.add(session)

  console.log(chalk.green(`new stream / ${session._id}`))
  console.log('  ' + headers[':method'] + ' ' + headers[':path'])
  console.log('')

  console.log(flags)
  console.log(headers)

  let buffer = ''

  stream.on('data', (data) => {
    buffer += data
  })

  // log the contents of the body
  stream.on('end', () => {
    console.log(chalk.cyan("  body"))
    console.log(buffer.toString('utf8'))
    console.log("")
  })

  // stream is a duplex
  stream.respond({
    ':status': 200,
    'content-type': 'text/html'
  })

  stream.end(html)
})

// start server
server.listen(8443, () => {
  console.log('> server listens on port 8443')
})