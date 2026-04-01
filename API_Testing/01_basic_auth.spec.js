import { request } from 'node:http';
import { test, expect } from 'playwright/test';
import path from 'node:path';
import * as fs from 'fs';

function basicAuthHeader(username, password) {
  const token = Buffer.from(`${username}:${password}`).toString('base64');
  return `Basic ${token}`;
}

test('[Basic Auth-success] postman Echo Basic auth with correct credentials', async ({ request }) => {
  const BASE_URL = 'https://postman-echo.com';
  const USER = 'postman';
  const PASS = 'password';

  const res = await request.get(`${BASE_URL}/basic-auth`, {
    headers: {
      Authorization: basicAuthHeader(USER, PASS),
      Accept: 'application/json',
    },
  });
  expect(res.status(), `Expected 200 Ok for valid Basic Auth`).toBe(200);
  const body = await res.json();
  expect(body).toMatchObject({
    authenticated: true,
  });

}); 
test('[Basic Auth-success] postman Echo Basic auth with incorrect credentials', async ({ request }) => {
  const BASE_URL = 'https://postman-echo.com';
  const USER = 'postman';
  const PASS = 'password100';

  const res = await request.get(`${BASE_URL}/basic-auth`, {
    headers: {
      Authorization: basicAuthHeader(USER, PASS),
      Accept: 'application/json',
    },
  });
  expect(res.status(), `Expected 200 Ok for valid Basic Auth`).toBe(200);
  const body = await res.json();
  expect(body).toMatchObject({
    authenticated: true,
  });

}); 

test('[Basic Auth-success] postman Echo Basic auth with no credentials', async ({ request }) => {
  const BASE_URL = 'https://postman-echo.com';
//   const USER = 'postman';
//   const PASS = 'password100';

  const res = await request.get(`${BASE_URL}/basic-auth`, {
    headers: {
      Authorization: basicAuthHeader(USER, PASS),
      Accept: 'application/json',
    },
  });
  expect(res.status(), `Expected 200 Ok for valid Basic Auth`).toBe(200);
  const body = await res.json();
  expect(body).toMatchObject({
    authenticated: true,
  });

}); 
test('[Basic Auth-success] postman Echo Basic auth with correct credentials-outputfile', async ({ request }) => {
  const BASE_URL = 'https://postman-echo.com';
  const USER = 'postman';
  const PASS = 'password';

  const res = await request.get(`${BASE_URL}/basic-auth`, {
    headers: {
      Authorization: basicAuthHeader(USER, PASS),
      Accept: 'application/json',
    },
  });
  expect(res.status(), `Expected 200 Ok for valid Basic Auth`).toBe(200);
  const body = await res.json();
  expect(body).toMatchObject({
    authenticated: true,
  });

fs.writeFileSync('response.json', JSON.stringify(body));


});