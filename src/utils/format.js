export function formatTemp(celsius, unit) {
  const value = unit === "F" ? (celsius * 9) / 5 + 32 : celsius;
  return `${Math.round(value)}°`;
}

export function formatDay(isoDate, index) {
  if (index === 0) return "Today";
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", { weekday: "short" });
}

export function formatYear(dateString) {
  return dateString ? dateString.slice(0, 4) : "TBA";
}
