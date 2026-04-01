import { test, expect} from "playwright/test";
test('create a post call for id 110',async({request})=>
{
    const url = "http://jsonplaceholder.typicode.com/posts";
    const postData = {
    id: 110,
    title: "Reshma's Data",
    body: "created by Reshma",
    userId: 1100,
    }

const headers = {"Content-Type": "application/json"};
const response = await request.post(url,{params:postData,headers});
console.log("Status Code:", response.status());
expect(response.status()).toBe(201);
const data = await response.json();
 console.log("Request Payload:", postData);
 console.log((await response.body()));
  });
