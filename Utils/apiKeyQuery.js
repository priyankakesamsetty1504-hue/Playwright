export function apiKeyQuery(url, {
  keyValue = process.env.API_KEY,
  queryName = process.env.API_KEY_QUERY
} = {}) {
  if (!keyValue) throw new Error('API key is missing. Set API_KEY in environment or pass key explicitly.');
  return `${url}?${queryName}=${keyValue}`;
}