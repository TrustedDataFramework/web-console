const io = require('socket.io-client')
const program = require('commander')
const path = require('path')

program
    .option("-f --token_file <string>", "token file")

program.parse(process.argv)
// convert to absolute path, avoid require node_modules
program.tokenFile = path.resolve(program.tokenFile)

const tokenFile = require(program.token_file)