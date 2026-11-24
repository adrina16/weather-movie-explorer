# Weather & Movie Explorer

A responsive React app with two tools in one page:

- **Weather:** live data from the free **Open-Meteo** REST API (weather + city geocoding). No account or API key needed.
- **Movies:** search, filter and sort a movie list that you own, stored in `src/data/movies.js`.

## Features

- City weather search with current conditions and a 7-day forecast
- °C / °F toggle and recent-search chips (saved in the browser)
- Movie search (debounced) with genre, rating and sort filters, plus "Load more" pagination
- Loading spinners, friendly error messages and a retry button
- Reusable components and custom hooks (`useAsync`, `useDebounce`, `useLocalStorage`)
- Stale requests are cancelled with `AbortController`
- Responsive layout (desktop to phone) and accessible labels

## Run it

```bash
npm install
npm run dev
```

Then open the link shown in the terminal (usually http://localhost:5173).

## Make the movie list yours

Open `src/data/movies.js` and add, remove or edit entries. Genres in the filter update automatically.
To use a real poster, add `poster: "/posters/inception.jpg"` to a movie and put the image in `public/posters/`.

## Project structure

```
src/
  api/          http.js, weather.js (network), movies.js (searches your list)
  data/         movies.js  (your movie list)
  hooks/        useAsync, useDebounce, useLocalStorage
  components/   SearchBar, FilterBar, Tabs, Spinner, ErrorMessage,
                WeatherCard, ForecastList, MovieCard, WeatherPanel, MoviesPanel
  utils/        weatherCodes.js, format.js
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | Lint with oxlint |
