import { useEffect, useState } from "react";
import { fetchGenres, fetchMovies } from "../api/movies";
import { useAsync } from "../hooks/useAsync";
import { useDebounce } from "../hooks/useDebounce";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const DEFAULTS = { genre: "", minRating: "", sort: "rating.desc" };

export default function MoviesPanel() {
  const [text, setText] = useState("");
  const query = useDebounce(text.trim(), 450);
  const [filters, setFilters] = useState(DEFAULTS);
  const [page, setPage] = useState(1);

  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState({ loading: true, error: null });
  const [tick, setTick] = useState(0);

const { data: genreData } = useAsync((signal) => fetchGenres(signal), []);
const genres = genreData ?? [];

  // Any change to the search or filters sends us back to page 1.
  useEffect(() => setPage(1), [query, filters]);

  useEffect(() => {
    const controller = new AbortController();
    setStatus({ loading: true, error: null });

    fetchMovies({ query, ...filters, page }, controller.signal)
      .then(({ results, totalPages }) => {
        // page 1 replaces the list, later pages are appended ("Load more")
        setMovies((prev) => (page === 1 ? results : [...prev, ...results]));
        setTotalPages(totalPages);
        setStatus({ loading: false, error: null });
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setStatus({ loading: false, error: err.message });
      });

    return () => controller.abort();
  }, [query, filters, page, tick]);

  const updateFilters = (patch) => setFilters((f) => ({ ...f, ...patch }));
  const reset = () => {
    setText("");
    setFilters(DEFAULTS);
  };

  const { loading, error } = status;
  const hasMore = page < totalPages;

  return (
    <div className="panel">
      <SearchBar label="movies" value={text} onChange={setText} placeholder="Search movies, e.g. Inception" />
      <FilterBar genres={genres} filters={filters} onChange={updateFilters} onReset={reset} />

      {error && <ErrorMessage message={error} onRetry={() => setTick((t) => t + 1)} />}

      {!error && movies.length === 0 && !loading && (
        <p className="empty">No movies match those filters. Try loosening them.</p>
      )}

      {movies.length > 0 && (
        <div className="movie-grid">
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      )}

      {loading && <Spinner label="Loading movies…" />}

      {!loading && !error && hasMore && movies.length > 0 && (
        <button type="button" className="btn btn--wide" onClick={() => setPage((p) => p + 1)}>
          Load more
        </button>
      )}
    </div>
  );
}
