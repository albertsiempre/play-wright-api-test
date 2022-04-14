# **Sample API Test Using Playwright**

## Introduction
In this example, we will automate api tests on several endpoints in [reqres.in](https://reqres.in/), for register, login and CRUD user.

## Getting Started
 1. Clone this repository `git clone https://github.com/albertsiempre/play-wright-api-test` or `git@github.com:albertsiempre/play-wright-api-test`
 2. Run `npm i -D @playwright/test` for install playwright
 3. Run `npx playwright install` for install supported browser
 4. Set Environment Variables, please see below.
 5. Run `npx playwright test` for run the test

## Environment Variable Configuration

> Please configure this the OS environment variable
> example : `export YOUR_VARIABLE=your_value`

| Variable | Description
| - | -
| `LOGIN_USERNAME` | Username on reqres.in
| `LOGIN_PASSWORD` | Password on reqres.in
