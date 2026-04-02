// import {test,expect} from '@playwright/test';
// import { github_login } from '../Utils/github';
// import { request } from 'node:http';
// import { getSystemErrorName } from 'node:util';

const {test,expect} = require('@playwright/test');
const { github_login } = require('../Utils/github');
const { request } = require('node:http');
const { getSystemErrorName } = require('node:util');

test('@api Verify that a GET request  without authentication returns a 200 OK status code.',async({request})=>{
    
const response = await request.get('https://api.github.com/repos/octocat/Hello-World');
expect.soft(response.status()).toBe(200);
 const body= await response.json();
 console.log(body);
console.log('Remaining:', response.headers()['x-ratelimit-remaining']);
console.log(await response.json());
console.log(response.headers());
});

test('@api Verify that a GET request with a valid authentication token returns a 200 OK status code.',async ({request})=>{
const { baseURL, extraHTTPHeaders } = github_login({
    extra: { Accept: 'application/vnd.github+json' }
  });
  const res = await request.get(`${baseURL}/repos/octocat/Hello-World`, { extraHTTPHeaders });
  expect(res.status()).toBe(200);
  const body = await res.json();
});
test('@smoke Verify that the response body contains the correct repository name and owner details when a valid GET request is made.',async({request}) =>{
    const {baseURL,extraHTTPHeaders }=github_login({
        extra:{Accept:'application/vnd.guthub+json'}
    });
    const res=await request.get(`${baseURL}/repos/octocat/Hello-World`,{extraHTTPHeaders})
    expect(res.status()).toBe(200);
    const body= await res.json();
     expect(body.name).toBe('Hello-World');
    expect(body.owner.login).toBe('octocat');
    
});
test('@smoke Verify that the API returns a 404 Not Found error when an invalid or non-existent repository name is provided.',async({request})=>{
const {baseURL,extraHTTPHeaders}=github_login({
    extra:{Accept:'application/vnd.github+json'}
});
const res=await request.get(`${baseURL}/repos/octocat/Invalid-Repo-Name-123`,{extraHTTPHeaders})
expect(res.status()).toBe(404);
const body= await res.json();
expect(body.message).toBe('Not Found')
console.log(body.message)
});

test('Verify that the API returns a 404 Not Found error when an invalid or non-existent owner name is provided',async({request})=>{
const {baseURL,extraHTTPHeaders}=github_login({
    extra:{Accept:'application/vnd.github+json'}
});
const res= await request.get(`${baseURL}/Invalid-Owner-123/Hello-World`,{extraHTTPHeaders})
expect(res.status()).toBe(404);
const body=await res.json();
expect(body.message).toBe('Not Found');
console.log(body.message);
});

test('Verify that a GET request with an invalid or expired authentication token returns a 401 Unauthorized status code',async({request})=>{
const {baseURL,extraHTTPHeaders}=github_login({
    accesskey :process.env.GHUB_InvalidAccesstoken,
    extra:{Accept:'application/vnd.github+json'}
});
const res= await request.get(`${baseURL}/repos/octocat/Hello-World`,{extraHTTPHeaders})
expect(res.status()).toBe(401);
const body=await res.json();
expect(body.message).toBe('Bad credentials');
console.log(body.message);
});

test('Verify the behavior of the API when supplied with an invalid Accept header media type.',async({request})=>{
const {baseURL,extraHTTPHeaders}=github_login({
    extra:{Accept:'application/xml'}
});
const res= await request.get(`${baseURL}/repos/octocat/Hello-World`,{extraHTTPHeaders})
//expect(res.status()).toBe(415)
const body= await res.json();
//expect(body.message).toBe(`Unsupported 'Accept' header: 'application/xml'. Must accept 'application/json`);
console.log(body.message);
});

test('Verify that a POST request to this read-only endpoint returns a 404 Not Found error.',async({request})=>{
const {baseURL,extraHTTPHeaders}=github_login({
    extra:{Accept:'application/vnd.github+json'}
});
const res= await request.post(`${baseURL}/repos/octocat/Hello-World`,{extraHTTPHeaders})
data: {
      name: 'my test'
     
    }
expect(res.status()).toBe(401);
const body=await res.json();
expect(body.message).toBe('Resource not accessible by personal access token');
});