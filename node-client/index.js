const program = require('commander')
<<<<<<< HEAD
const io = require('socket.io-client')
const keccak256 = require('./sha3').keccak256;
=======
const path = require('path')

>>>>>>> 75d22e26fc36eeecc258b5ca72a9b3d7438403da
program
    .option("-f --token_file <string>", "token file")
program.parse(process.argv)
<<<<<<< HEAD
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

=======
// convert to absolute path, avoid require node_modules
program.tokenFile = path.resolve(program.tokenFile)
>>>>>>> 75d22e26fc36eeecc258b5ca72a9b3d7438403da

setTimeout(test, 5000);
