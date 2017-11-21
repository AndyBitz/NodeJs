// packages
const http2 = require('http2')
const fs = require('fs')

// ignore self signed cert
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

const client = http2.connect('https://localhost:8443', {
  ca: fs.readFileSync('localhost-cert.pem')
})

// handle errors
client.on('socketError', console.error)
client.on('error', console.error)

// create request
const req = client.request({
  ':path': '/',
  ':method': 'post',
  'test-header': 'test-header-value',
})

// write the body of the request
req.write('hello world\nthis is a robbery')

req.on('response', (headers, flags) => {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`)
  }
})

req.setEncoding('utf8')
let data = ''
req.on('data', (chunk) => { data += chunk })
req.on('end', () => {
  console.log(`\n${data}`)
  client.destroy()
})

req.end()
