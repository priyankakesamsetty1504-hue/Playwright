export function apiKeyHeader({
  keyValue = process.env.API_KEY,
  keyName = process.env.API_KEY_HEADER,
  extra = {}
}) {
  if (!keyValue) throw new Error('API key is missing. Set API_KEY in environment or pass key explicitly.');
  return { ...extra, [keyName]: keyValue };
}