import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test.describe('Data-driven POST Requests', () => {

  const filepath = path.resolve(__dirname, '../files/PostData_DDT.json');
  const postsData = JSON.parse(fs.readFileSync(filepath, 'utf-8'));

  const headers = { "Content-Type": "application/json" };

  for (const postData of postsData) {
    test(`Create Post for userId ${postData.userId}`, async ({ request }) => {
      
      const url = 'https://jsonplaceholder.typicode.com/posts';
      
      const response = await request.post(url, {
        data: postData,
        headers: headers
      });

      expect(response.status()).toBe(201);
      
      const body = await response.json();
      expect(body.userId).toBe(postData.userId);
      expect(body).toHaveProperty('id');
    });
  }
});