import { getJSON } from "./http";

// Open-Meteo: free, no API key required.
const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

// Step 1: turn a city name ("Dubai") into coordinates, like looking up an address.
export async function findCity(name, signal) {
  const url = `${GEO_URL}?name=${encodeURIComponent(name)}&count=1&language=en&format=json`;
  const data = await getJSON(url, signal);
  if (!data.results?.length) throw new Error(`No city found for "${name}".`);

  const { name: city, country, admin1, latitude, longitude } = data.results[0];
  return { city, country, region: admin1, latitude, longitude };
}

// Step 2: ask for the weather at those coordinates. Always fetched in °C;
// the UI converts to °F so toggling units never needs another request.
export async function getForecast({ latitude, longitude }, signal) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    timezone: "auto",
    forecast_days: "7",
  });
  return getJSON(`${FORECAST_URL}?${params}`, signal);
}

export async function getWeatherByCity(cityName, signal) {
  const place = await findCity(cityName, signal);
  const forecast = await getForecast(place, signal);
  return { place, forecast };
}
