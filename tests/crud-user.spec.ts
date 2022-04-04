import { test, expect } from '@playwright/test';

test('should get user success', async ({ request }) => {
  const callApi = await request.get(`/api/users/1`);

  expect(callApi.ok()).toBeTruthy();
  expect(callApi.status()).toEqual(200);

  expect(await callApi.json()).toEqual(expect.objectContaining({
      data: {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg"
      },
  }))
});

test('should create user success', async ({ request }) => {
  const callApi = await request.post(`/api/users`, {
    data: {
      name: 'morpheus',
      job: 'leader',
    },
  });

  expect(callApi.ok()).toBeTruthy();
  expect(callApi.status()).toEqual(201);

  expect(await callApi.json()).toEqual(expect.objectContaining({
      name: 'morpheus',
      job: 'leader'
  }))
});

test('should update user success', async ({ request }) => {
  const callApi = await request.put(`/api/users`, {
    data: {
      name: 'morpheus',
      job: 'zion resident',
    },
  });

  expect(callApi.ok()).toBeTruthy();
  expect(callApi.status()).toEqual(200);

  expect(await callApi.json()).toEqual(expect.objectContaining({
      name: 'morpheus',
      job: 'zion resident'
  }))
});

test('should delete user no content', async ({ request }) => {
  const callApi = await request.delete(`/api/users/2`);

  expect(callApi.ok()).toBeTruthy();
  expect(callApi.status()).toEqual(204);
});