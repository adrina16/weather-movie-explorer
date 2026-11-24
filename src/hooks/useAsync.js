import { useCallback, useEffect, useState } from "react";

/**
 * Runs an async function and tracks its three moods: loading, error, data.
 * Re-runs whenever `deps` change, cancels stale requests, and exposes retry().
 */
export function useAsync(asyncFn, deps, { enabled = true } = {}) {
  const [state, setState] = useState({ data: null, loading: enabled, error: null });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!enabled) return undefined;

    const controller = new AbortController();
    setState((s) => ({ ...s, loading: true, error: null }));

    asyncFn(controller.signal)
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((err) => {
        if (err.name === "AbortError") return; // a newer request replaced this one
        setState({ data: null, loading: false, error: err.message });
      });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, tick, enabled]);

  const retry = useCallback(() => setTick((t) => t + 1), []);
  return { ...state, retry };
}
