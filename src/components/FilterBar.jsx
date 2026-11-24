import { SORT_OPTIONS } from "../api/movies";

const RATINGS = [
  { value: "", label: "Any rating" },
  { value: "6", label: "6+ ★" },
  { value: "7", label: "7+ ★" },
  { value: "8", label: "8+ ★" },
];

function Select({ id, label, value, onChange, options }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select id={id} className="input" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

export default function FilterBar({ genres, filters, onChange, onReset }) {
  const genreOptions = [{ value: "", label: "All genres" }, ...genres.map((g) => ({ value: String(g.id), label: g.name }))];

  return (
    <div className="filters">
      <Select id="f-genre" label="Genre" value={filters.genre} options={genreOptions} onChange={(v) => onChange({ genre: v })} />
      <Select id="f-rating" label="Rating" value={filters.minRating} options={RATINGS} onChange={(v) => onChange({ minRating: v })} />
      <Select id="f-sort" label="Sort by" value={filters.sort} options={SORT_OPTIONS} onChange={(v) => onChange({ sort: v })} />
      <button type="button" className="btn btn--ghost" onClick={onReset}>Reset</button>
    </div>
  );
}
