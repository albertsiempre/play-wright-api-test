import { test, expect } from '@playwright/test';

test('should register success', async ({ request }) => {
  const login = await request.post(`/login`, {
    data: {
      username: `${process.env.LOGIN_USERNAME}`,
      password: `${process.env.LOGIN_PASSWORD}`,
    },
  });

  console.log(`${process.env.LOGIN_PASSWORD}`)
  expect(login.ok()).toBeTruthy();
  expect(await login.json()).not.toEqual(expect.objectContaining({
      message: 'invalid credential'
  }))
});

test('should register failed', async ({ request }) => {
    const login = await request.post(`/login`, {
      data: {
        username: 'test',
        password: 'test',
      },
    });
    
    expect(login.ok()).toBeTruthy();
    expect(await login.json()).toEqual(expect.objectContaining({
        message: 'invalid credential'
    }))
  });

  