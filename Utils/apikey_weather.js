// export function openWeatherParams({
//   keyValue = process.env.OPENWEATHER_API_KEY,
//   extra = {}
// } = {}) {
//   if (!keyValue) throw new Error('API key is missing. Set OPENWEATHER_API_KEY in .env file.');
//   return {
//     appid: keyValue,
//     ...extra,
//   };
// }


export function openWeatherHeader({
  keyValue = process.env.OPENWEATHER_API_KEY,
  baseURL = process.env.OPENWEATHER_BASE_URL,
  extra = {}
} = {}) {
  // if (!keyValue) throw new Error('API key is missing. Set OPENWEATHER_API_KEY in .env file.');
  if (!baseURL) throw new Error('Base URL is missing. Set OPENWEATHER_BASE_URL in .env file.');

  return {
    baseURL,
    params: {
      appid: keyValue,
      ...extra,
    },
  }
}
