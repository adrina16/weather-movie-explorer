import { describeWeather } from "../utils/weatherCodes";
import { formatTemp } from "../utils/format";

export default function WeatherCard({ place, current, unit }) {
  const { label, icon } = describeWeather(current.weather_code);
  const where = [place.city, place.region, place.country].filter(Boolean).join(", ");

  return (
    <section className="card weather-card" aria-label={`Current weather in ${place.city}`}>
      <p className="weather-card__place">{where}</p>
      <div className="weather-card__main">
        <span className="weather-card__icon" aria-hidden="true">{icon}</span>
        <div>
          <p className="weather-card__temp">{formatTemp(current.temperature_2m, unit)}{unit}</p>
          <p className="weather-card__label">{label}</p>
        </div>
      </div>
      <dl className="stats">
        <div>
          <dt>Feels like</dt>
          <dd>{formatTemp(current.apparent_temperature, unit)}</dd>
        </div>
        <div>
          <dt>Humidity</dt>
          <dd>{current.relative_humidity_2m}%</dd>
        </div>
        <div>
          <dt>Wind</dt>
          <dd>{Math.round(current.wind_speed_10m)} km/h</dd>
        </div>
      </dl>
    </section>
  );
}
