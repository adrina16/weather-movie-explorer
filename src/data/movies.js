// YOUR movie list. Add, remove or edit entries freely; the app updates itself.
//
//  title   : movie name
//  year    : release year
//  rating  : score out of 10 (approximate, edit as you like)
//  genres  : one or more genre names (they feed the Genre filter automatically)
//  emoji   : shown on the card
//  hue     : 0-360, picks the card's colour
//  poster  : (optional) paste an image link or a file path like "/posters/inception.jpg"
//            (put your own image files in the /public/posters folder)

export const MOVIES = [
  { title: "The Shawshank Redemption", year: 1994, rating: 9.3, genres: ["Drama"], emoji: "⛓️", hue: 210 },
  { title: "The Godfather", year: 1972, rating: 9.2, genres: ["Crime", "Drama"], emoji: "🌹", hue: 0 },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genres: ["Action", "Crime", "Drama"], emoji: "🦇", hue: 240 },
  { title: "Pulp Fiction", year: 1994, rating: 8.9, genres: ["Crime", "Drama"], emoji: "💼", hue: 35 },
  { title: "Forrest Gump", year: 1994, rating: 8.8, genres: ["Drama", "Romance"], emoji: "🏃", hue: 120 },
  { title: "Inception", year: 2010, rating: 8.8, genres: ["Action", "Sci-Fi", "Thriller"], emoji: "🌀", hue: 220 },
  { title: "The Matrix", year: 1999, rating: 8.7, genres: ["Action", "Sci-Fi"], emoji: "💊", hue: 140 },
  { title: "Interstellar", year: 2014, rating: 8.7, genres: ["Adventure", "Drama", "Sci-Fi"], emoji: "🪐", hue: 265 },
  { title: "Spirited Away", year: 2001, rating: 8.6, genres: ["Animation", "Adventure", "Fantasy"], emoji: "🏮", hue: 10 },
  { title: "Parasite", year: 2019, rating: 8.5, genres: ["Drama", "Thriller"], emoji: "🪨", hue: 90 },
  { title: "Whiplash", year: 2014, rating: 8.5, genres: ["Drama", "Music"], emoji: "🥁", hue: 20 },
  { title: "The Lion King", year: 1994, rating: 8.5, genres: ["Animation", "Adventure", "Family"], emoji: "🦁", hue: 40 },
  { title: "Gladiator", year: 2000, rating: 8.5, genres: ["Action", "Adventure", "Drama"], emoji: "⚔️", hue: 25 },
  { title: "Dune: Part Two", year: 2024, rating: 8.5, genres: ["Action", "Adventure", "Sci-Fi"], emoji: "🏜️", hue: 30 },
  { title: "3 Idiots", year: 2009, rating: 8.4, genres: ["Comedy", "Drama"], emoji: "🎓", hue: 50 },
  { title: "Coco", year: 2017, rating: 8.4, genres: ["Animation", "Family", "Fantasy"], emoji: "🎸", hue: 330 },
  { title: "Avengers: Endgame", year: 2019, rating: 8.4, genres: ["Action", "Adventure", "Sci-Fi"], emoji: "🛡️", hue: 275 },
  { title: "Toy Story", year: 1995, rating: 8.3, genres: ["Animation", "Comedy", "Family"], emoji: "🤠", hue: 195 },
  { title: "Dangal", year: 2016, rating: 8.3, genres: ["Action", "Biography", "Drama"], emoji: "🤼", hue: 15 },
  { title: "Oppenheimer", year: 2023, rating: 8.3, genres: ["Biography", "Drama", "History"], emoji: "💥", hue: 5 },
  { title: "Finding Nemo", year: 2003, rating: 8.2, genres: ["Animation", "Adventure", "Comedy"], emoji: "🐠", hue: 190 },
  { title: "Zindagi Na Milegi Dobara", year: 2011, rating: 8.2, genres: ["Adventure", "Comedy", "Drama"], emoji: "🏝️", hue: 170 },
  { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genres: ["Action", "Adventure", "Sci-Fi"], emoji: "🔥", hue: 18 },
  { title: "The Grand Budapest Hotel", year: 2014, rating: 8.1, genres: ["Adventure", "Comedy", "Crime"], emoji: "🏨", hue: 320 },
  { title: "Inside Out", year: 2015, rating: 8.1, genres: ["Animation", "Comedy", "Family"], emoji: "🧠", hue: 285 },
  { title: "Lagaan", year: 2001, rating: 8.1, genres: ["Drama", "Musical", "Sport"], emoji: "🏏", hue: 80 },
  { title: "La La Land", year: 2016, rating: 8.0, genres: ["Comedy", "Drama", "Music", "Romance"], emoji: "🎹", hue: 300 },
  { title: "Dilwale Dulhania Le Jayenge", year: 1995, rating: 8.0, genres: ["Drama", "Romance"], emoji: "🚂", hue: 345 },
  { title: "Knives Out", year: 2019, rating: 7.9, genres: ["Comedy", "Crime", "Mystery"], emoji: "🔪", hue: 60 },
  { title: "Titanic", year: 1997, rating: 7.9, genres: ["Drama", "Romance"], emoji: "🚢", hue: 205 },
  { title: "Get Out", year: 2017, rating: 7.7, genres: ["Horror", "Mystery", "Thriller"], emoji: "☕", hue: 250 },
  { title: "Superbad", year: 2007, rating: 7.6, genres: ["Comedy"], emoji: "🎉", hue: 100 },
  { title: "The Conjuring", year: 2013, rating: 7.5, genres: ["Horror", "Mystery", "Thriller"], emoji: "🕯️", hue: 355 },
  { title: "Barbie", year: 2023, rating: 6.8, genres: ["Adventure", "Comedy", "Fantasy"], emoji: "💖", hue: 325 },
];
