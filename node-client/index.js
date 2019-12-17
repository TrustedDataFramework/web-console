const program = require('commander')
const io = require('socket.io-client')
const keccak256 = require('./sha3').keccak256;
program
    .option("-f --token_file <string>", "token file")
program.parse(process.argv)
const tokenFile = require(program.token_file)
let port = tokenFile.port;
let token = tokenFile.token;
console.log("111");

let token256 = keccak256(Buffer.from(token, 'ascii'))
const socket = io.connect("http://localhost:"+port+"?token="+token256);
console.log("222");
socket.on('console-out', function(data) {
    if(data.code == 200){
        console.log(data.output)
    }
    if(data.code == 500){
        console.error(data.error)
    }
});

function test(){
socket.emit('console-in', {
    input: "console.log(\"hello world\")"
})
}


setTimeout(test, 5000);
