import { test, expect } from '@playwright/test';
import { apiKeyHeader } from '../Utils/apikey';
import dotenv from 'dotenv';
import path from 'path';

test.describe('API Key Authentication with Postman Echo', () => {

  const BASE_URL = process.env.ECHO_BASE_URL;
  const HEADER_NAME = process.env.API_KEY_HEADER;

    test('[API Key Auth - Header] Postman Echo with API key in header', async ({ request }) => {
    const headers = apiKeyHeader({ extra: { Accept: 'application/json' } });
    const res = await request.get(`${BASE_URL}/get`, { headers });

    expect(res.ok()).toBeTruthy();
    const body = await res.json();

    // Postman Echo echoes incoming headers
    const echoedKey = body.headers?.[HEADER_NAME];
    expect(echoedKey, `Expected header ${HEADER_NAME} to be echoed`).toBe(process.env.API_KEY);
    expect(body.url).toContain('/get');

    });

}); 

test.describe('API Key Authentication with Postman Echo', () => {

  const BASE_URL = process.env.ECHO_BASE_URL;
  const HEADER_NAME = process.env.API_KEY_HEADER;

    test('[API Key Auth - Header] Postman Echo with API key in header_invalid', async ({ request }) => {
    const headers = apiKeyHeader({ extra: { Accept: 'application/json' } });
    const res = await request.get(`${BASE_URL}/get`, { headers });

    expect(res.ok()).toBeTruthy();
    const body = await res.json();

    // Postman Echo echoes incoming headers
    const echoedKey = body.headers?.[HEADER_NAME];
    expect(echoedKey, `Expected header ${HEADER_NAME} to be echoed`).toBe(process.env.API_KEY_invalid);
    expect(body.url).toContain('/get');

    });

}); 