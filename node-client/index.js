const io = require('socket.io-client')
const program = require('commander')

program
    .option("-f --token_file <string>", "token file")

program.parse(process.argv)

const tokenFile = require(program.token_file)