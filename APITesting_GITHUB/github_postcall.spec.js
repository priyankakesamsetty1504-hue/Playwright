// import {test,expect} from '@playwright/test'
// import { github_login } from '../Utils/github';
// import { request } from 'node:http'

const {test,expect} = require('@playwright/test');
const { github_login } = require('../Utils/github');
const { request } = require('node:http');
test('@smoke Verify that a POST request to create an issue with an empty title returns Unprocessable Entity status.',async({request})=>{
const {baseURL,extraHTTPHeaders}=github_login({
    extra:{Accept:'application/vnd.github+json'}
 });
const res= await request.post(`${baseURL}/repos/priyankakesamsetty1504-hue/Codegen/issues`,
  {
    headers: extraHTTPHeaders,
    data: {
        body: 'issue content'
    }
});
expect(res.status()).toBe(422);
const body=await res.json();
expect(body.message).toBe('Unprocessable Entity (WebDAV) (RFC 4918)');
const responseBody = await res.json();
// GitHub APIs return "Validation Failed" for missing titles
expect(responseBody.message).toContain('"title" wasn\'t supplied');
});

test('Verify that a POST request to fork a repository returns a 200 Accepted status.',async({request})=>{
const {baseURL,extraHTTPHeaders}=github_login({
    extra:{Accept:'application/vnd.github+json'}
});

const beforeRes = await request.post(`${baseURL}/repos/octocat/Hello-World/forks`, {
  headers: extraHTTPHeaders
});
expect(beforeRes.status()).toBe(200);
const beforeCount = (await beforeRes.json()).forks_count;


await new Promise(res => setTimeout(res, 5000));


const afterRes = await request.get(`${baseURL}/repos/octocat/Hello-World`, {
  headers: extraHTTPHeaders
});
const afterCount = (await afterRes.json()).forks_count;

console.log(`Before: ${beforeCount}, After: ${afterCount}`);
expect(afterCount).toBeGreaterThan(beforeCount)});

test(`Verify that idempotency is properly maintained if a user submits an identical POST request twice one after the other`,async({request})=>{
  const { baseURL, extraHTTPHeaders } = github_login({
    extra: { Accept: 'application/vnd.github+json' }
  });
   const branchRes = await request.get(
    `${baseURL}/repos/priyankakesamsetty1504-hue/Hello-World/git/ref/heads/master`,
    { headers: extraHTTPHeaders }
  );
   expect(branchRes.status()).toBe(200);
   const base_branch = (await branchRes.json()).object.sha;
  const branchName = `refs/heads/test-branch-${Date.now()}`;
  const payload = {
    ref: branchName,
    sha: base_branch
  };
   const res1 = await request.post(
    `${baseURL}/repos/priyankakesamsetty1504-hue/Hello-World/git/refs`,
    {
      headers: extraHTTPHeaders,
      data: payload
    }
  );

  console.log("First request status:", res1.status());
  expect(res1.status()).toBe(201);
  const res2 = await request.post(
    `${baseURL}/repos/priyankakesamsetty1504-hue/Hello-World/git/refs`,
    {
      headers: extraHTTPHeaders,
      data: payload
    }
  );

  console.log("Second request status:", res2.status());
  expect(res2.status()).toBe(422);

});

test('Verify that a POST request to create a pull request',async({request})=>{
const {baseURL,extraHTTPHeaders}=github_login({
    extra:{Accept:'application/vnd.github+json'}  
});
const res= await request.post(`${baseURL}/repos/priyankakesamsetty1504-hue/Hello-World/pulls`,{
    headers: extraHTTPHeaders,
    data: {
        title: 'Test Pull Request',
        head: 'test-branch-1774851541283',
        base: 'master',
        body: 'This is a test pull request.'
    }
});
expect(res.status()).toBe(422);
const body = await res.json();
//expect(body.title).toBe('Test Pull Reque);
console.log(body.message);
});


test('@correlation Create issue and correlate issue ID', async({request}) => {

    const { baseURL, extraHTTPHeaders } = github_login({
        extra: { Accept: 'application/vnd.github+json' }
    });

    const createRes = await request.post(`${baseURL}/repos/priyankakesamsetty1504-hue/Hello-World/issues`, {
        headers: extraHTTPHeaders,
        data: { title: 'Test Issue1' }
    });
    
    const createBody = await createRes.json();
     console.log('Full Body:', JSON.stringify(createBody))
    const issueNumber = createBody.number;  
    console.log('Status:', createRes.status()); 
    console.log('Created Issue Number:', issueNumber);

    const getRes = await request.get(`${baseURL}/repos/priyankakesamsetty1504-hue/Hello-World/issues/${issueNumber}`, {
        headers: extraHTTPHeaders  
    });
    expect(getRes.status()).toBe(200);
});
