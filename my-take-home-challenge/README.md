<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# NestJS Pagination, Filtering, and Sorting Example

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
This project demonstrates pagination, filtering, and sorting with NestJS and TypeORM.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

#### Requirements

* **Utility Module:** Create a utility module in TypeScript that includes functions for applying pagination, filtering, and sorting to TypeORM query builders.
* **Entity and Repository:** Define a sample entity and repository to demonstrate the utility functions.
* **Service:** Implement a base service that uses the utility module.
* **Documentation:** Provide documentation explaining how to use the utility functions and a brief description of your implementation.
    * Filter Operators
        * equals
        * not
        * gt (greater than)
        * gte (greater than or equal)
        * lt (less than)
        * lte (less than or equal)
        * like
        * in
        * notIn
        * isNull
        * isNotNull
    * Sort Operators
        * ASC - Ascending
        * DESC - Descending
* **Query Tests**
    * GET /api/rooms?page=0&limit=10&filters=[]&sort=[{"field":"name","order":"ASC"}]
    * GET /api/rooms?page=0&limit=5&filters=[{"field":"capacity","value":10,"operator":"gte"}]&sort=[{"field":"name","order":"ASC"}]
    * GET /api/rooms?page=1&limit=2&filters=[{"field":"userId","value":1,"operator":"equals"}]&sort=[{"field":"capacity","order":"DESC"}]
    * GET /api/rooms?page=0&limit=5&filters=[{"field":"name","value":"Room","operator":"like"}]&sort=[{"field":"userId","order":"ASC"}]
* **Sample Data**

```json
[
  {
    "id": 1,
    "name": "Conference Room A",
    "capacity": 10,
    "userId": 1
  },
  {
    "id": 2,
    "name": "Meeting Room B",
    "capacity": 8,
    "userId": 2
  },
  {
    "id": 3,
    "name": "Workshop Room C",
    "capacity": 20,
    "userId": 1
  },
  {
    "id": 4,
    "name": "Training Room D",
    "capacity": 15,
    "userId": 3
  },
  {
    "id": 5,
    "name": "Seminar Room E",
    "capacity": 25,
    "userId": 2
  },
  {
    "id": 6,
    "name": "Discussion Room F",
    "capacity": 5,
    "userId": 4
  },
  {
    "id": 7,
    "name": "Board Room G",
    "capacity": 12,
    "userId": 1
  },
  {
    "id": 8,
    "name": "Conference Room H",
    "capacity": 10,
    "userId": 3
  },
  {
    "id": 9,
    "name": "Small Meeting Room I",
    "capacity": 4,
    "userId": 2
  },
  {
    "id": 10,
    "name": "Large Conference Room J",
    "capacity": 30,
    "userId": 4
  },
  {
    "id": 11,
    "name": "Project Room K",
    "capacity": 6,
    "userId": 1
  },
  {
    "id": 12,
    "name": "Collaboration Room L",
    "capacity": 10,
    "userId": 3
  },
  {
    "id": 13,
    "name": "Focus Room M",
    "capacity": 2,
    "userId": 2
  },
  {
    "id": 14,
    "name": "Presentation Room N",
    "capacity": 18,
    "userId": 1
  },
  {
    "id": 15,
    "name": "Lecture Room O",
    "capacity": 22,
    "userId": 3
  },
  {
    "id": 16,
    "name": "Briefing Room P",
    "capacity": 14,
    "userId": 4
  },
  {
    "id": 17,
    "name": "Strategy Room Q",
    "capacity": 10,
    "userId": 1
  },
  {
    "id": 18,
    "name": "Consultation Room R",
    "capacity": 5,
    "userId": 3
  },
  {
    "id": 19,
    "name": "Interview Room S",
    "capacity": 3,
    "userId": 2
  },
  {
    "id": 20,
    "name": "Brainstorming Room T",
    "capacity": 12,
    "userId": 4
  }
]

```

* **Deployment**
    * Server: Render
    * Database: Postgres



## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
