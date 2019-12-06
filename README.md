# web-console
web-console for monitoring sunflower core

## socketIO response

connect to server with your access token

1. successful output (console-out event)

```json
{
    "code": 200,
    "output": "output",
    "error" : ""
}
```


2. error output (console-out event)

```json
{
    "code": 500,
    "output": "",
    "error" : "internal error!!!"
}
```

3. write message to server (console-in event)

```json
{
    "input" : "console.log(\"hello world\")"
}
```

