const API_KEY = '8bb720e5ee41a512169272b2f689bd54'

export const requests = {
  fetchMovieData: `?api_key=${API_KEY}&language=en-US`,
  fetchMovieVideos: `/videos?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTopMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
}
