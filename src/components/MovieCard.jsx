export default function MovieCard({ movie }) {
  const { title, year, rating, genres, emoji, hue = 220, poster } = movie;

  return (
    <article className="movie">
      <div className="movie__poster">
        {poster ? (
          <img src={poster} alt={`${title} poster`} loading="lazy" />
        ) : (
          <div
            className="movie__art"
            style={{ background: `linear-gradient(160deg, hsl(${hue} 70% 48%), hsl(${(hue + 50) % 360} 70% 22%))` }}
            aria-hidden="true"
          >
            <span className="movie__emoji">{emoji ?? "🎬"}</span>
            <span className="movie__arttitle">{title}</span>
          </div>
        )}
        <span className="movie__rating" title="Rating out of 10">
          ★ {rating.toFixed(1)}
        </span>
      </div>
      <h3 className="movie__title">{title}</h3>
      <p className="movie__year">
        {year} · {genres.slice(0, 2).join(", ")}
      </p>
    </article>
  );
}
