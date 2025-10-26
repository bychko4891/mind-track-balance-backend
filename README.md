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

Suggested project structure
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
