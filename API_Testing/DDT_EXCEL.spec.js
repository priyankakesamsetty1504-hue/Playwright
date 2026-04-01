import {test,expect} from 'playwright/test';
import * as fs from 'fs';
import * as path from 'path';
const XLSX = require('xlsx');

test.describe('Data-driven POST Requests using xlsx', () => {
    const filepath = path.resolve(__dirname, '../files/newPostData1.xlsx');
     const workbook = XLSX.readFile(filepath);
     const sheetNames= workbook.SheetNames[0];
     const sheet= workbook.Sheets[sheetNames];
       const records = XLSX.utils.sheet_to_json(sheet);
        console.log(`Total test records from Excel: ${records.length}`);
const headers = { "Content-Type": "application/json" };
for (const record of records) {
    test(`Create Post for userId ${record.userId}`, async ({ request }) => {

      const url = 'https://jsonplaceholder.typicode.com/posts';

      const response = await request.post(url, {
        data: {
          title: record.title,
          body: record.body,
          userId: record.userId,
        },
        headers: headers
      });
expect(response.status()).toBe(201);
      const body = await response.json();
      console.log('Response:', body);
      expect(body).toHaveProperty('id');
      expect(body.userId).toBe(record.userId);
      expect(body.title).toBe(record.title);
    });
  }

});