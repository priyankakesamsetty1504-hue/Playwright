import {test,expect} from "playwright/test";

test("fetch single post id-12", async ({request}) => {
  //const url = "http://jsonplaceholder.typicode.com/posts/12";
  const response = await request.get("https://jsonplaceholder.typicode.com/posts/12");
  const data = await response.json();
  expect(response.status()).toBe(200);
  console.log(await response.json());
  expect(data.id).toBe(12);
  expect(data.title).toBe("in quibusdam tempore odit est dolorem"); 
  console.log(response.headers()['content-type']);
  expect(response.headers()['content-type']).toContain("application/json; charset=utf-8");
  expect(data.body).toBeTruthy;
  
});
test("fetch all posts", async ({request}) => {
  const response = await request.get("https://jsonplaceholder.typicode.com/posts");
  console.log(await response.json());
});
test("fetch single post id-103", async ({request}) => {
  //const url = "http://jsonplaceholder.typicode.com/posts/12";
  const response = await request.get("https://jsonplaceholder.typicode.com/posts/103");
  const data = await response.json();
  expect(response.status()).toBe(404);
  // console.log(await response.json());
  // expect(data.id).toBe(12);
  // expect(data.title).toBe("in quibusdam tempore odit est dolorem"); 
  // expect(data.body).toBeTruthy;
  
});
test("delete single post id-12", async ({request}) => {
  //const url = "http://jsonplaceholder.typicode.com/posts/12";
  const response = await request.delete("https://jsonplaceholder.typicode.com/posts/12");
  const data = await response.json();
  console.log(await response.json());
  expect(response.status()).toBe(404);
  // console.log(await response.json());
  // expect(data.id).toBe(12);
  // expect(data.title).toBe("in quibusdam tempore odit est dolorem"); 
  // expect(data.body).toBeTruthy;
  
});