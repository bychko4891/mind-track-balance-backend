
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).



# MindTrack Balance

The project was created for those who are just starting to learn English. The project uses such technologies as SpringBoot, SpringDataJPA, Hibernate, Spring Security, JUnit, Mockito.


## 🚀 About Me
I have 1 year of experience in developing applications in NestJs.



## Authors

- [@Anatolii Bychko. Create business logic, develop a project](https://www.github.com/bychko4891)
- [@Project Link](https://github.com/bychko4891/mind-track-balance-backend)


## 🛠  Skills
Programming · Java Frameworks · Git · Spring Framework · Hibernate · Debugging · Java Development · Java · Object-Oriented Programming (OOP) · SQL


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anatolii-bychko/)



## Demo

https://e-learn.top

What problem are we trying to solve?

Most of us don’t “decide” to lose focus or feel drained—it happens in small nudges: one notification, one scroll, one tab. Hours later we’re tired, anxious, and unsure where the day went. Traditional productivity tools add more dashboards and guilt. Therapy apps ask for long journaling sessions we rarely finish. The gap is simple: we need tiny, realistic steps that help us notice our state and make better choices in the moment.

Our approach (in plain language)

MindTrack Balance is built around two ideas:

Small check-ins beat big promises. Short notes and a quick mood tap create a trail of gentle data you’ll actually keep up with.

Soft friction beats willpower. A brief pause, a breathing nudge, or a focus rule at the right time is often enough to stop autopilot.

The backend powers these moments: it stores your entries, computes simple trends, and enforces light “friction” (like a pause screen before opening a distracting site). No judgment. No doom dashboards. Just enough structure to help you course-correct.

What you can do today (MVP)

Quick entries & mood: write a sentence, tap a mood, add a tag.

Attention tracking: receive time counters from the browser extension.

Soft friction & focus: add rules—delays, allow/deny lists, schedules.

Weekly digest: friendly summaries instead of noisy charts.

(Optional) Billing: plans and webhooks for future paid tiers.

Technical overview

API: REST (/api/v1) with OpenAPI/Swagger docs; optional WebSocket events.

Modules: auth, users, entries, mood, analytics, focus, reports, billing.

Jobs: background workers for reports, rule checks, and cleanups.

Storage: PostgreSQL by default (ORM entities + migrations).

Cache/Queue: Redis for sessions, rate limits, and job queues.

Security: JWT + refresh tokens, input validation, CORS, rate limiting, helmet.

Observability: structured logs, health checks, metrics.

## Suggested project structure
```bash
  /src
  /config          # env parsing, app config
  /common          # guards, interceptors, pipes, utils
  /database        # migrations, ORM entities
  /modules
  /auth
  /users
  /entries
  /mood
  /analytics
  /focus
  /reports
  /billing
  /jobs            # queue processors
  /tests           # unit/e2e
```

Example API surface

POST /auth/login, POST /auth/register, POST /auth/refresh

GET /me, PATCH /me

POST /entries, GET /entries, PATCH /entries/:id, DELETE /entries/:id

POST /mood, GET /mood?from=&to=

POST /focus/rules, GET /focus/rules

GET /analytics/summary?period=weekly

GET /reports/weekly/latest

POST /billing/webhooks (if billing enabled)

Environment (samples)

DATABASE_URL, REDIS_URL

JWT_SECRET, JWT_EXPIRES_IN

PORT, NODE_ENV

BILLING_PROVIDER, BILLING_WEBHOOK_SECRET (optional)

Roadmap

Voice notes, richer focus rules, group support, mobile (React Native), better exports.