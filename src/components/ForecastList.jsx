import { describeWeather } from "../utils/weatherCodes";
import { formatDay, formatTemp } from "../utils/format";

export default function ForecastList({ daily, unit }) {
  return (
    <ul className="forecast" aria-label="7-day forecast">
      {daily.time.map((date, i) => {
        const { icon, label } = describeWeather(daily.weather_code[i]);
        return (
          <li key={date} className="forecast__day">
            <span className="forecast__name">{formatDay(date, i)}</span>
            <span className="forecast__icon" role="img" aria-label={label}>{icon}</span>
            <span className="forecast__rain" title="Chance of precipitation">
              💧 {daily.precipitation_probability_max[i] ?? 0}%
            </span>
            <span className="forecast__temps">
              <strong>{formatTemp(daily.temperature_2m_max[i], unit)}</strong>
              <span>{formatTemp(daily.temperature_2m_min[i], unit)}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
