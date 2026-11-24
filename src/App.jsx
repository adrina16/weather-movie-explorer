import { useState } from "react";
import Tabs from "./components/Tabs";
import WeatherPanel from "./components/WeatherPanel";
import MoviesPanel from "./components/MoviesPanel";

const TABS = [
  { id: "weather", label: "Weather", icon: "⛅" },
  { id: "movies", label: "Movies", icon: "🎬" },
];

export default function App() {
  const [tab, setTab] = useState("weather");

  return (
    <div className="app">
      <header className="header">
        <h1>Weather &amp; Movie Explorer</h1>
        <p>Check the sky, then pick something to watch.</p>
        <Tabs tabs={TABS} active={tab} onChange={setTab} />
      </header>

      <main>{tab === "weather" ? <WeatherPanel /> : <MoviesPanel />}</main>

      <footer className="footer">
        Live weather by <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a> · Movie list
        curated by me.
      </footer>
    </div>
  );
}
