// One shared "messenger" for every API call: it sends the request,
// checks the reply, and turns failures into readable errors.
export async function getJSON(url, signal) {
  let res;
  try {
    res = await fetch(url, { signal });
  } catch (err) {
    if (err.name === "AbortError") throw err;
    throw new Error("Network error. Check your internet connection and try again.");
  }

  if (!res.ok) {
    if (res.status === 401) throw new Error("API key was rejected. Check your .env file.");
    if (res.status === 429) throw new Error("Too many requests. Please wait a moment.");
    throw new Error(`Request failed (${res.status}).`);
  }
  return res.json();
}
