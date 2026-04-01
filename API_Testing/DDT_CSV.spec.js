import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import {parse} from 'csv-parse/sync';

test.describe('Data-driven POST Requests using CSV', () => {

  const filepath = path.resolve(__dirname, '../files/newPostData.csv')
  const postsData = fs.readFileSync(filepath, 'utf-8');
  const records=parse(postsData,{
    columns:true,
    skip_empty_lines:true
  });

  const headers = { "Content-Type": "application/json" };

  for (const record of records) {
    test(`Create Post for userId ${record.userId}`, async ({ request }) => {
      
      const url = 'https://jsonplaceholder.typicode.com/posts';
      
      const response = await request.post(url, {
        data: record,
        headers: headers
      });

      expect(response.status()).toBe(201);
      
      const body = await response.json();
      expect(body.userId).toBe(record.userId);
      expect(body).toHaveProperty('id');
    });
  }
});