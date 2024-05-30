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
