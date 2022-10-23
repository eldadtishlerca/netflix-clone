import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { requests } from '../api/Request'
import ReactPlayer from 'react-player'
import { Nav } from '../cmps/Nav'
import { BsFillStarFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'

export const MoviePage = () => {
  const [movieVideo, setMovieVideo] = useState([])
  const [movieDetails, setMovieDetails] = useState([])
  const [movieGenres, setMovieGenres] = useState([])

  const params = useParams()
  useEffect(() => {
    async function fetchVideo() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.movieId}${requests.fetchMovieVideos}`
      )
      setMovieVideo(request.data.results[0].key)
      return request
    }
    fetchVideo()

    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.movieId}${requests.fetchMovieData}`
      )
      setMovieDetails(request.data)
      const newGenres = request.data.genres.map((genre) => genre.name)
      console.log(newGenres)
      setMovieGenres(newGenres)
      return request
    }
    fetchData()
  }, [params])

  return (
    <div className="movie-page">
      {<Nav />}
      <div className="movie-content">
        <div className="movie-details">
          <h1 className="movie-title">
            {movieDetails.title}{' '}
            <span>
              <FaHeart color={`red`} />
            </span>
          </h1>
          <h2 className="movie-genres">Genres: {movieGenres.join(', ')}</h2>
          <p className="movie-overview">{movieDetails.overview}</p>
          <h4>
            IMDB Rating <BsFillStarFill />
          </h4>
          <p>{Math.round(movieDetails.vote_average * 10) / 10} / 10</p>
          <p>
            (<span>{movieDetails.vote_count}</span> votes)
          </p>
        </div>
        <div className="movie-video">
          {movieVideo && (
            <ReactPlayer
              className="react-player"
              controls={true}
              playing={true}
              url={`https://www.youtube.com/watch?v=${movieVideo}`}
              width="600px"
              style={{ margin: `0 auto`, marginTop: '50px' }}
              height="600px"
            />
          )}
        </div>
      </div>
    </div>
  )
}
