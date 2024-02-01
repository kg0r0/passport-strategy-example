# Example

## Usage

### Run

```
$ npm install
$ npm run dev

> example@1.0.0 dev
> ts-node src/index.ts

listen port: 3000
```

### Request

```
$ curl -c cookie.txt -X POST -d 'username=johndoe&password=secret'  http:///localhost:3000/login
wellcome johndoe!

$ curl -b cookie.txt http:///localhost:3000/content
Hello johndoe!

$ curl http:///localhost:3000/content
Unauthorized
```
