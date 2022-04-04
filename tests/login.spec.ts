import { test, expect } from '@playwright/test';

test('should login success', async ({ request }) => {
  const login = await request.post(`/api/login`, {
    data: {
      username: `${process.env.LOGIN_USERNAME}`,
      password: `${process.env.LOGIN_PASSWORD}`,
    },
  });

  expect(login.ok()).toBeTruthy();
});

test('should login failed user not found', async ({ request }) => {
    const login = await request.post(`/api/login`, {
      data: {
        username: 'test',
        password: 'test',
      },
    });
    
    expect(login.ok()).not.toBeTruthy();
    expect(await login.json()).toEqual(expect.objectContaining({
        error: 'user not found'
    }))
  });

test('should login failed missing email or username', async ({ request }) => {
    const login = await request.post(`/api/login`, {
      data: {
        username: '',
        password: 'test',
      },
    });
    
    expect(login.ok()).not.toBeTruthy();
    expect(await login.json()).toEqual(expect.objectContaining({
        error: 'Missing email or username'
    }))
  });

  