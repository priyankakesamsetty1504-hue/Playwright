import { test, expect } from "playwright/test";
import * as fs from "fs";


test("POST call test", async ({ request }) => {
  const url = "http://jsonplaceholder.typicode.com/posts";
  const filepath = "./files/newPostData.json";
  const newPostPayLoad = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  const headers = {"Content-Type": "application/json"};
  const response = await request.post(url, {params: newPostPayLoad, headers});
  console.log("Status Code:", response.status());
  expect(response.status()).toBe(201);
  const data = await response.json();
  console.log("Response Payload:", newPostPayLoad);
});