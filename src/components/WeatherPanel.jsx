import { useState } from "react";
import { getWeatherByCity } from "../api/weather";
import { useAsync } from "../hooks/useAsync";
import { useLocalStorage } from "../hooks/useLocalStorage";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import WeatherCard from "./WeatherCard";
import ForecastList from "./ForecastList";

export default function WeatherPanel() {
  const [city, setCity] = useLocalStorage("wme:city", "London");
  const [input, setInput] = useState("");
  const [unit, setUnit] = useLocalStorage("wme:unit", "C");
  const [recent, setRecent] = useLocalStorage("wme:recent", []);

  const { data, loading, error, retry } = useAsync(
    (signal) => getWeatherByCity(city, signal),
    [city],
  );

  function search(name) {
    if (!name) return;
    setCity(name);
    setInput("");
    setRecent((list) => [name, ...list.filter((c) => c.toLowerCase() !== name.toLowerCase())].slice(0, 5));
  }

  return (
    <div className="panel">
      <div className="toolbar">
        <SearchBar
          label="city"
          value={input}
          onChange={setInput}
          onSubmit={search}
          placeholder="Search a city, e.g. Tokyo"
          buttonText="Get weather"
        />
        <div className="segmented" role="group" aria-label="Temperature unit">
          {["C", "F"].map((u) => (
            <button
              key={u}
              type="button"
              className={unit === u ? "is-active" : ""}
              aria-pressed={unit === u}
              onClick={() => setUnit(u)}
            >
              °{u}
            </button>
          ))}
        </div>
      </div>

      {recent.length > 0 && (
        <div className="chips" aria-label="Recent searches">
          {recent.map((name) => (
            <button key={name} type="button" className="chip" onClick={() => search(name)}>
              {name}
            </button>
          ))}
        </div>
      )}

      {loading && <Spinner label="Fetching the forecast…" />}
      {error && <ErrorMessage message={error} onRetry={retry} />}

      {data && !loading && !error && (
        <div className="weather-grid">
          <WeatherCard place={data.place} current={data.forecast.current} unit={unit} />
          <ForecastList daily={data.forecast.daily} unit={unit} />
        </div>
      )}
    </div>
  );
}
