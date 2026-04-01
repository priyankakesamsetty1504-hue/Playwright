import {test,expect} from '@playwright/test';
import { apiKeyQuery } from '../Utils/apikeyquery';

test('[API Key - Query] Postman Echo reflects query key', async ({ request }) => {
    const BASE_URL = process.env.ECHO_BASE_URL;
    const urlWithKey = apiKeyQuery(`${BASE_URL}/get`);
    const res = await request.get(urlWithKey);
    expect(res.ok()).toBeTruthy();
 
    const body = await res.json();
    // The full URL with query is echoed back
    expect(body.url, 'URL should contain the api key query param').toContain(process.env.API_KEY);
  });