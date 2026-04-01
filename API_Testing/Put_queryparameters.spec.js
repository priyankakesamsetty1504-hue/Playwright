import { test, expect } from "@playwright/test";

test('Update post id 12', async ({ request }) => {

  const url = 'https://jsonplaceholder.typicode.com/posts/12';

  const updatedData = {
    id: 12,
    title: "Updated Title",
    body: "Updated body content",
    userId: 1
  };

  const response = await request.put(url, {
    data: updatedData
  });

  console.log("Status Code:", response.status());
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);

  // ✅ Validations
  expect(responseBody.id).toBe(12);
  expect(responseBody.title).toBe("Updated Title");
  expect(responseBody.body).toBe("Updated body content");
});