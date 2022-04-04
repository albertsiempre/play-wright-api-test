import { test, expect } from '@playwright/test';

test('should register success', async ({ request }) => {
  const reg = await request.post(`/api/register`, {
    data: {
      email: `${process.env.LOGIN_USERNAME}`,
      password: `${process.env.LOGIN_PASSWORD}`,
    },
  });

  expect(reg.ok()).toBeTruthy();
});

test('should register failed missing password', async ({ request }) => {
    const login = await request.post(`/api/register`, {
      data: {
        email: `${process.env.LOGIN_USERNAME}`,
      },
    });
    
    expect(login.ok()).not.toBeTruthy();
    expect(await login.json()).toEqual(expect.objectContaining({
        error: 'Missing password'
    }))
  });