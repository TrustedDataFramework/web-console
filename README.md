# web-console
web-console for monitoring sunflower core

## socketIO response

connect to server with your access token

```javascript
let webConsole = new (require('./index.js'))
webConsole.connect("http://localhost:8082", "your access token generated by sunflower core")

// shutdown the remote server
webConsole.shutdown()
```

