import { useEffect, useState } from "react";

// Waits until the user stops typing before passing the value along,
// like a waiter who lets you finish ordering before walking to the kitchen.
export function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}
