const io = require('socket.io-client')
const keccak256 = require('./sha3').keccak256;
const events = require('./events')
const OK = 200
const ERROR = 500
const url = require('url')

class WebConsole {
    static COMMANDS = events.COMMANDS
    static EVENTS = events.EVENTS

    WebConsole(){
    
    }

    connect(host, port , token){
        this.token = token
    
        this.socket = io.connect(`http://${host}:${port}?token=${this._hashRaw()}`);
        this.socket.on(events.EVENTS.LOG, function(data) {
            if(data.code == OK){
                console.log(data.info)
                return
            }
            if(data.code == ERROR){
                console.error(data.error)
                return
            }
        });
    }

    shutdown(){
        this.socket.emit(events.COMMANDS.SHUTDOWN, this._buildPayload())
    }

    _buildPayload(){
        const salt = Date.now()
        return {
            token: this._hashWithSalt(salt),
            createdAt: salt
        }
    }

    _hashWithSalt(salt){
        return keccak256(Buffer.from(this.token + salt, 'ascii'))
    }

    _hashRaw(){
        return keccak256(Buffer.from(this.token, 'ascii'))
    }

    getCommands(){
        return WebConsole.COMMANDS
    }

    getEvents(){
        return WebConsole.EVENTS
    }
}

module.exports = WebConsole;


