import { MOVIES } from "../data/movies";

// The "movie shelf" lives in src/data/movies.js. These functions behave like an API
// (they return promises and can be cancelled), so the rest of the app doesn't care
// whether the movies come from your own list or from a server.

export const PAGE_SIZE = 12;

export const SORT_OPTIONS = [
  { value: "rating.desc", label: "Top rated" },
  { value: "year.desc", label: "Newest" },
  { value: "year.asc", label: "Oldest" },
  { value: "title.asc", label: "A to Z" },
];

// Short pause so loading states are visible and requests can be cancelled like real ones.
function pause(ms, signal) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(resolve, ms);
    signal?.addEventListener("abort", () => {
      clearTimeout(id);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}

export async function fetchGenres(signal) {
  await pause(0, signal);
  const names = [...new Set(MOVIES.flatMap((m) => m.genres))].sort();
  return names.map((name) => ({ id: name, name }));
}

function sortMovies(list, sort) {
  const [field, dir] = sort.split(".");
  const factor = dir === "asc" ? 1 : -1;
  return [...list].sort((a, b) => {
    if (a[field] > b[field]) return factor;
    if (a[field] < b[field]) return -factor;
    return 0;
  });
}

export async function fetchMovies({ query, genre, minRating, sort, page }, signal) {
  await pause(250, signal);

  let results = MOVIES;
  if (query) results = results.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()));
  if (genre) results = results.filter((m) => m.genres.includes(genre));
  if (minRating) results = results.filter((m) => m.rating >= Number(minRating));

  results = sortMovies(results, sort);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  return { results: results.slice(start, start + PAGE_SIZE), totalPages };
}
