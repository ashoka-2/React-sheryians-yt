
 
 const movies = [
  {
    id: 1,
    title: "Joker",
    year: 2019,
    genres: ["Crime", "Drama", "Thriller"],
    duration: "2h 2m",
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    description:
      "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
    recentlyWatched: true,
    watchProgress: 65
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    duration: "2h 49m",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.",
    recentlyWatched: true,
    watchProgress: 40
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    year: 2019,
    genres: ["Action", "Adventure", "Sci-Fi"],
    duration: "3h 1m",
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    description:
      "The Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.",
    recentlyWatched: true,
    watchProgress: 85
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action", "Crime", "Drama"],
    duration: "2h 32m",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    description:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    recentlyWatched: true,
    watchProgress: 10
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    duration: "2h 28m",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    description:
      "A skilled thief enters the subconscious of his targets to steal information.",
    recentlyWatched: true,
    watchProgress: 25
  },
  {
    id: 6,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genres: ["Animation", "Action", "Adventure"],
    duration: "1h 57m",
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/7d6EY00g1c39SGZOoCJ5Py9nNth.jpg",
    description:
      "Teen Miles Morales becomes Spider-Man and meets counterparts from other dimensions.",
    recentlyWatched: false,
    watchProgress: 0
  },
  {
    id: 7,
    title: "Dune",
    year: 2021,
    genres: ["Sci-Fi", "Adventure"],
    duration: "2h 35m",
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iopYFB1b6Bh7FWZh3onQhph1sih.jpg",
    description:
      "A noble family becomes embroiled in a war for control over the galaxy’s most valuable asset.",
    recentlyWatched: false,
    watchProgress: 0
  },

   {
    id: 8,
    title: "Frozen II",
    year: 2019,
    genres: ["Animation", "Family", "Fantasy"],
    duration: "1h 43m",
    rating: 7.1,
    poster: "https://image.tmdb.org/t/p/w500/mINJaa34MtknCYl5AjtNJzWj8cD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4W0FnjSGn4x0mKZlBRx8OjFxQUM.jpg",
    description:
      "Elsa and Anna venture beyond Arendelle to uncover the origin of Elsa’s powers.",
      recentlyWatched: false,
    watchProgress: 0
  },
  {
    id: 9,
    title: "Guardians of the Galaxy",
    year: 2014,
    genres: ["Action", "Adventure", "Comedy"],
    duration: "2h 1m",
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
    description:
      "A group of intergalactic criminals must work together to stop a fanatical villain.",
      recentlyWatched: false,
    watchProgress: 0
  },
  {
    id: 10,
    title: "The Lion King",
    year: 2019,
    genres: ["Adventure", "Drama", "Family"],
    duration: "1h 58m",
    rating: 6.9,
    poster: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
    description:
      "After the murder of his father, a young lion prince flees his kingdom.",
      recentlyWatched: false,
    watchProgress: 0
  },
  {
    id: 11,
    title: "Avatar",
    year: 2009,
    genres: ["Sci-Fi", "Adventure"],
    duration: "2h 42m",
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    description:
      "A paraplegic Marine is dispatched to the moon Pandora on a unique mission.",
      recentlyWatched: false,
    watchProgress: 0
  },
  {
    id: 12,
    title: "Doctor Strange",
    year: 2016,
    genres: ["Action", "Fantasy"],
    duration: "1h 55m",
    rating: 7.5,
    poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xfu2Mi3p0kWkZ7wG9rYlR9kz4oG.jpg",
    description:
      "A former neurosurgeon embarks on a journey of healing and mysticism.",
      recentlyWatched: false,
    watchProgress: 0
  },
  {
    id: 13,
    title: "Kung Fu Panda",
    year: 2008,
    genres: ["Animation", "Comedy", "Action"],
    duration: "1h 32m",
    rating: 7.6,
    poster: "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/cb7bYkjQyXvcJ8IMe3d7L1iE0zn.jpg",
    description:
      "A clumsy panda is unexpectedly chosen to fulfill an ancient prophecy.",
      recentlyWatched: false,
    watchProgress: 0
  },
  {
    id: 14,
    title: "Rise of the Planet of the Apes",
    year: 2011,
    genres: ["Action", "Sci-Fi", "Drama"],
    duration: "1h 45m",
    rating: 7.6,
    poster: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2858168/5972156/MOVAB19124__22934.1679613228.jpg?c=2",
    backdrop: "https://m.media-amazon.com/images/M/MV5BMTk5NzcwODU3OV5BMl5BanBnXkFtZTcwOTQyNDAxNg%40%40._V1_.jpg",
    description:
      "A scientist’s experiment gives rise to intelligent apes.",
      recentlyWatched: false,
    watchProgress: 0
  },
  {
    id: 15,
    title: "Toy Story",
    year: 1995,
    genres: ["Animation", "Family", "Comedy"],
    duration: "1h 21m",
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
    description:
      "A cowboy doll is threatened by a new spaceman figure.",
      recentlyWatched: false,
    watchProgress: 0
  },
  {
  id: 16,
  title: "The Batman",
  year: 2022,
  genres: ["Action", "Crime", "Drama"],
  duration: "2h 56m",
  rating: 7.8,
  poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
  description:
    "Batman uncovers corruption in Gotham City while pursuing the Riddler.",
  recentlyWatched: false,
  watchProgress: 0
},
{
  id: 17,
  title: "Dune: Part Two",
  year: 2024,
  genres: ["Sci-Fi", "Adventure", "Drama"],
  duration: "2h 46m",
  rating: 8.6,
  poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/8uVKfOJUhmybNsVh089EqLHUYEG.jpg",
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against those who destroyed his family.",
  recentlyWatched: true,
  watchProgress: 40
}
,
{
  id: 18,
  title: "The Creator",
  year: 2023,
  genres: ["Sci-Fi", "Action", "Drama"],
  duration: "2h 13m",
  rating: 7.1,
  poster: "https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
  description:
    "Amid a future war between humans and AI, a former special forces agent is recruited to hunt down the Creator.",
  recentlyWatched: true,
  watchProgress: 50
}
,
{
  id: 19,
  title: "Gladiator",
  year: 2000,
  genres: ["Action", "Drama"],
  duration: "2h 35m",
  rating: 8.5,
  poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
  description:
    "A former Roman General seeks revenge against the corrupt emperor.",
  recentlyWatched: false,
  watchProgress: 0
},
{
  id: 20,
  title: "The Matrix",
  year: 1999,
  genres: ["Action", "Sci-Fi"],
  duration: "2h 16m",
  rating: 8.7,
  poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/icmmSD4vTTDKOq2vvdulafOGw93.jpg",
  description:
    "A hacker discovers the truth about reality and his role in the war against machines.",
  recentlyWatched: true,
  watchProgress: 30
},
{
  id: 21,
  title: "Shutter Island",
  year: 2010,
  genres: ["Mystery", "Thriller"],
  duration: "2h 18m",
  rating: 8.2,
  poster: "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/9p3w1i9zvJ8zYzjAdKPs5XW4Vtq.jpg",
  description:
    "A U.S. Marshal investigates the disappearance of a prisoner from an insane asylum.",
  recentlyWatched: false,
  watchProgress: 0
},
{
  id: 22,
  title: "No Time to Die",
  year: 2021,
  genres: ["Action", "Thriller"],
  duration: "2h 43m",
  rating: 7.3,
  poster: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/8s4h9friP6Ci3adRGahHARVd76E.jpg",
  description:
    "James Bond comes out of retirement to face a mysterious villain.",
  recentlyWatched: false,
  watchProgress: 0
},
{
  id: 23,
  title: "Pirates of the Caribbean: The Curse of the Black Pearl",
  year: 2003,
  genres: ["Adventure", "Fantasy"],
  duration: "2h 23m",
  rating: 8.1,
  poster: "https://image.tmdb.org/t/p/w500/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/8s4h9friP6Ci3adRGahHARVd76E.jpg",
  description:
    "A blacksmith teams up with an eccentric pirate to save a kidnapped woman.",
  recentlyWatched: true,
  watchProgress: 70
},
{
  id: 24,
  title: "Blade Runner 2049",
  year: 2017,
  genres: ["Sci-Fi", "Drama", "Thriller"],
  duration: "2h 44m",
  rating: 8.0,
  poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/fWmHjzY9d5x3qjC9Z0r5fH6w2yK.jpg",
  description:
    "A young blade runner uncovers a long-buried secret that leads him to track down former blade runner Rick Deckard.",
  recentlyWatched: false,
  watchProgress: 0
}

,
{
  id: 25,
  title: "Logan",
  year: 2017,
  genres: ["Action", "Drama"],
  duration: "2h 17m",
  rating: 8.1,
  poster: "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
  description:
    "An aging Wolverine protects a young mutant in a dystopian future.",
  recentlyWatched: true,
  watchProgress: 60
},
{
  id: 26,
  title: "Edge of Tomorrow",
  year: 2014,
  genres: ["Action", "Sci-Fi"],
  duration: "1h 53m",
  rating: 7.9,
  poster: "https://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/8f0sQXQ1rC2RZ0u6Qzq6z9BSl3V.jpg",
  description:
    "A soldier relives the same battle against aliens over and over.",
  recentlyWatched: false,
  watchProgress: 0
},
{
  id: 27,
  title: "The Wolf of Wall Street",
  year: 2013,
  genres: ["Crime", "Drama"],
  duration: "3h 0m",
  rating: 8.2,
  poster: "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/9gm3lL8JMTTmc3W4BmNMCuRLdL8.jpg",
  description:
    "The rise and fall of a stockbroker living a life of excess.",
  recentlyWatched: false,
  watchProgress: 0
},
{
  id: 28,
  title: "The Amazing Spider-Man",
  year: 2012,
  genres: ["Action", "Adventure"],
  duration: "2h 16m",
  rating: 6.9,
  poster: "https://image.tmdb.org/t/p/w500/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/7X7rX5JkW5Qm8YwM4y8pQJk6B6P.jpg",
  description:
    "Peter Parker gains superpowers and faces a new threat.",
  recentlyWatched: false,
  watchProgress: 0
},
{
  id: 29,
  title: "Mission: Impossible – Fallout",
  year: 2018,
  genres: ["Action", "Thriller"],
  duration: "2h 27m",
  rating: 7.7,
  poster: "https://image.tmdb.org/t/p/w500/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/aw4FOsWr2FY373nKSxbpNi3fz4F.jpg",
  description:
    "Ethan Hunt races against time after a mission goes wrong.",
  recentlyWatched: true,
  watchProgress: 45
},
{
  id: 30,
  title: "Jurassic World",
  year: 2015,
  genres: ["Action", "Adventure", "Sci-Fi"],
  duration: "2h 4m",
  rating: 6.9,
  poster: "https://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg",
  description:
    "A new theme park on Isla Nublar descends into chaos.",
  recentlyWatched: false,
  watchProgress: 0
}

];
 
export default movies