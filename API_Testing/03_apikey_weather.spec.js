import { test, expect } from '@playwright/test';
import { openWeatherParams,openWeatherHeader,openWeatherParams_Invalid,openWeatherParams_NOAPI_KEY } from '../Utils/apikey_weather';


const BASE_URL = process.env.OPENWEATHER_BASE_URL;

// test('[OpenWeather] Valid API key returns 200', async ({ request }) => {
//   const res = await request.get(`${BASE_URL}/weather`, {
//     params: openWeatherParams({ extra: { q: 'London' } }),
//   });

//   expect(res.status()).toBe(200);
//   const body = await res.json();
//   expect(body).toHaveProperty('name', 'London');
//   expect(body.main).toHaveProperty('temp');
//   console.log('City:', body.name, '| Temp:', body.main.temp);
// });

test('[OpenWeather] Valid API returns 200', async ({ request }) => {
  const { baseURL, params } = openWeatherHeader({
    extra: { lat: 12, lon: 77 }
  });
   const res = await request.get(`${baseURL}/weather`, { params });
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.main).toHaveProperty('temp');
  console.log('City:', body.name, '| Temp:', body.main.temp, '°C');
});

 test('[OpenWeather] InValid API key returns 401', async ({ request }) => {
 const { baseURL, params } = openWeatherHeader({
  keyValue :process.env.INVALID_OPENWEATHER_API_KEY,
  extra: { lat: 12, lon: 77 }
 });

  const res = await request.get(`${baseURL}/weather`, { params });

expect(res.status()).toBe(401);

});

test('[OpenWeather] NO API key returns 401', async ({ request }) => {
 const { baseURL, params } = openWeatherHeader({
  keyValue:'',
  extra: { lat: 12, lon: 77}
 });

  const res = await request.get(`${baseURL}/weather`, { params });

expect(res.status()).toBe(401);

});

test('[OpenWeather] Valid City ID returns 200', async ({ request }) => {
  const { baseURL, params } = openWeatherHeader({
    extra: {id:process.env.id,lang:process.env.language}
  });

  const res = await request.get(`${baseURL}/weather`, { params });

  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.id).toBe(524901);
  expect(body.main).toHaveProperty('temp');
  console.log('City:', body.name, '| Temp:', body.main.temp, '°C');
});

test('[OpenWeather-Forecast] Valid City ID returns 200 and forecast', async ({ request }) => {
  const { baseURL, params } = openWeatherHeader({
    extra: {q:process.env.City}
  });

  const res = await request.get(`${baseURL}/forecast`, { params });

  expect(res.status()).toBe(200);
  const body = await res.json();
  
});



