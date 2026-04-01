
import {test, expect} from "@playwright/test";
import { URLSearchParams } from "node:url";
// test('Query param: fetch call id 5', async ({ request }) => {
// const url = 'https://jsonplaceholder.typicode.com/posts';
// const queryparams = { id: 5 };
// const response = await request.get(url, { params: queryparams });
// console.log("Status Code:", response.status());
// expect(response.status()).toBe(200);
// const data = await response.json();
// console.log(data);
// expect(data[0].id).toBe(5);
// });
// test('Query parameter: fetch call 95', async ({ request }) => {
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const queryparams = { id: 95, userId: 10 };
//   const response = await request.get(url, { params: queryparams });
//   console.log("Status Code:", response.status());
//   expect(response.status()).toBe(200);
//   const data = await response.json();
//   console.log(data);
//   expect(data[0].id).toBe(95);
//   expect(data[0].userId).toBe(10);
// });
// test('Query parameter: fetch call user id 15 , id 10', async ({ request }) => {
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const queryparams = { id: 15, userId: 10 };
//   const response = await request.get(url, { params: queryparams });
//   console.log("Status Code:", response.status());
//   expect(response.status()).toBe(200);
//   const data = await response.json();
//   console.log(data);
// //   expect(data[0].id).toBe(10);
// //   expect(data[0].userId).toBe(15);
// });
test('Query parameter: fetch call with userid 12 and 15', async ({ request }) => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  //const queryparams = new URLSearchParams([['id','12'],['id','15']]);
  const queryparams = new URLSearchParams("id=12&id=15");
  const response = await request.get(url,{params:queryparams});
  console.log("Status Code:", response.status());
  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
   expect(data.length).toBe(2);
//   expect(data[0].id).toBe(12);
//   expect(data[1].id).toBe(15);
//   expect(data[0].userId).toBe(10);
});
// test('Query parameter: put call with userid 12', async ({ request }) => {
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const queryparam