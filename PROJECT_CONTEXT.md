# QuantLab Project Context

## Goal

Build a serious full-stack quantitative research/backtesting platform while improving my software engineering skills.

The broader career goal is to keep multiple paths open:

- Software Engineering
- Quant Development
- Quant Trading
- Quant Research

My strongest long-term positioning should be:

> Strong mathematical/backend engineer who can build and ship full-stack software, with quantitative finance as a specialization.

I do not want to become frontend-specialized, but I do want enough frontend skill to contribute effectively to projects and clubs using TypeScript/React.

---

## Background

I already have experience with:

- Python
- Java
- Quantitative finance / trading concepts
- Building backtesting engines
- Git basics

I am currently learning modern software engineering more seriously, especially:

- TypeScript
- React
- Backend architecture
- APIs
- SQL/PostgreSQL
- Testing
- Docker
- CI/CD
- Deployment
- Collaborative Git workflows

---

## Learning Style

Do NOT default to writing complete solutions for me.

I want a project-driven, pair-programming style.

For important fundamentals:

1. Explain the concept.
2. Give me the task or architecture.
3. Let me implement it myself.
4. Review my code like a senior engineer or PR reviewer.
5. Give hints before giving full solutions.
6. Only show the full solution if I ask or remain stuck.

AI-generated code is more acceptable for:

- Boilerplate
- Styling/CSS
- Repetitive code
- Configuration
- Concepts I already understand

For new core concepts, I should write the important code myself.

Prefer teaching through the actual project rather than sending me into long tutorial sequences.

---

## Git Workflow

Use a simple feature-branch workflow:

main
  ↓
feature branch
  ↓
commits
  ↓
push
  ↓
Pull Request
  ↓
review
  ↓
merge
  ↓
delete branch

I know the basics of:

- git clone
- git branch
- git switch
- git add
- git commit
- git push
- git pull
- upstream tracking with `-u`
- deleting local and remote branches
- PRs
- merge
- basic rebase
- basic squash
- `.gitignore`

Do not over-explain basic Git unless I ask.

---

## Current JavaScript / TypeScript Knowledge

I have completed a quick pass through JavaScript fundamentals and TypeScript fundamentals.

I understand:

### JavaScript
- `const` vs `let`
- primitive types
- arrays
- objects
- functions
- arrow functions
- `map`
- `filter`
- `reduce`
- destructuring
- spread syntax
- `import` / `export`
- basic JSON
- Promises
- `async` / `await`
- basic `try...catch`

Important Promise mental model:

- A Promise is an object representing an eventual result.
- `async` functions always return a Promise.
- `async function f() { return 42; }` is conceptually similar to returning `Promise.resolve(42)`.
- `42` itself is not a Promise.
- `await` pauses the current async function until the Promise settles without blocking the whole JS thread.

### TypeScript
- primitive type annotations
- type inference
- typed arrays
- typed functions
- object types
- interfaces
- type aliases
- union types
- optional properties
- basic generics
- `Promise<T>`

Do not make me repeat beginner tutorials unless a gap actually becomes relevant.

---

## QuantLab Roadmap

Build the project incrementally.

### Phase 1 — TypeScript CLI Portfolio Analyzer

Start small.

Core concepts:

- `Position` model
- portfolio array
- market value
- total portfolio value
- weights
- P&L
- largest position
- portfolio statistics
- functions
- modules
- clean TypeScript types

The point of this phase is to make JavaScript/TypeScript syntax natural through use.

### Phase 2 — React + TypeScript Frontend

Turn the CLI logic into a UI.

Learn:

- components
- props
- state
- events
- forms
- conditional rendering
- lists
- hooks
- API calls
- frontend architecture

Do not optimize for becoming a frontend specialist.

### Phase 3 — Python + FastAPI Backend

Use Python for the backend and quant engine.

Learn:

- routes
- request/response models
- Pydantic
- validation
- REST APIs
- service layers
- business logic
- backend architecture

### Phase 4 — Quant Engine Integration

Connect existing or new backtesting logic.

Possible features:

- historical price data
- strategy parameters
- backtest execution
- returns
- Sharpe ratio
- max drawdown
- trade history
- strategy comparison

### Phase 5 — PostgreSQL / SQL

Learn SQL directly before relying heavily on an ORM.

Core concepts:

- SELECT
- INSERT
- UPDATE
- DELETE
- WHERE
- ORDER BY
- GROUP BY
- JOIN
- primary keys
- foreign keys
- relational design

Potential entities:

- users
- strategies
- backtests
- positions
- results

### Phase 6 — Testing

Learn:

- unit tests
- integration tests
- API tests
- frontend tests
- mocking where appropriate

Prioritize correctness, especially for quantitative calculations.

### Phase 7 — Docker

Containerize:

- frontend
- backend
- database

Understand what containers solve rather than just copying Dockerfiles.

### Phase 8 — CI/CD

Use GitHub Actions for:

- tests
- linting
- builds

Eventually deploy the full project.

---

## Current Project State

We are at the very beginning of Phase 1.

The repo should currently look roughly like:

quantlab/
├── node_modules/
├── src/
│   └── index.ts
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json

`.gitignore` should include:

node_modules/

The current feature branch should be something like:

feature/portfolio-model

---

## Current Task

The first task is intentionally small.

Create a TypeScript interface:

`Position`

Each position should contain:

- ticker
- shares
- current price
- average purchase price

Then create a portfolio array with example positions such as:

- AAPL
- NVDA
- GOOGL

Do not calculate anything yet.

The next step after that will be portfolio valuation and use of `map` / `reduce`.

---

## How to Work With Me

When I send code:

- review it like a PR
- point out correctness issues
- point out design issues
- explain why
- distinguish between important fixes and optional style improvements

Prefer:

- hints
- questions
- architectural guidance
- small examples

Avoid:

- replacing all my code with your own
- overengineering beginner stages
- introducing advanced abstractions too early
- long detours into theory unless they directly help the project

The goal is to make me a better engineer, not just finish the app as fast as possible.
