const COMMAND = "command"
const SERVER_EVENT = "server"

module.exports.COMMANDS = {
    SHUTDOWN: `${COMMAND}.shutdown`
}

module.exports.EVENTS = {
    SHUTDOWN: `${SERVER_EVENT}.shutdown`,
    LOG: `${SERVER_EVENT}.log`
}