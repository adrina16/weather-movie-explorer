export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error" role="alert">
      <p className="error__text">⚠️ {message}</p>
      {onRetry && (
        <button type="button" className="btn btn--ghost" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
