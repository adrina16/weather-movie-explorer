// Reusable search box. Works two ways:
//  - live typing (onChange only), used for movies
//  - submit on Enter / button (pass onSubmit), used for cities
export default function SearchBar({ value, onChange, onSubmit, placeholder, label, buttonText }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(value.trim());
  }

  return (
    <form className="search" onSubmit={handleSubmit} role="search">
      <label className="sr-only" htmlFor={`search-${label}`}>
        {label}
      </label>
      <input
        id={`search-${label}`}
        className="input"
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
      {onSubmit && (
        <button type="submit" className="btn" disabled={!value.trim()}>
          {buttonText ?? "Search"}
        </button>
      )}
    </form>
  );
}
