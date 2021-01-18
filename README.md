## Description

[NestJS](https://github.com/nestjs/nest) Authenticated with [PassportJS](http://www.passportjs.org/) API with [PostgreSQL](https://www.postgresql.org/) and Swagger starter repository.

## Installation

```bash
$ yarn install
```

## Adding environment variables

```bash
$ export NEWS_API_TOKEN=af41c86f654a4f2d88338ae25d6b85aa 
$ export export NEWS_API_URI=https://newsapi.org/v2/
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn dev

# watch mode
$ yarn debug

# production mode
$ yarn prod
```

## Access API

[http://localhost:8080](http://localhost:8080) Here you'll get the message `Hello World!`

## Access Swagger documentation

[http://localhost:8080](http://localhost:8080/api) Here you'll be able to test the API's endpoints

#### In order to debug, if you're using VSCode you'll just need to enable Auto Attach

`CMD+Shift+P => Debug: Toggle Auto Attach`
