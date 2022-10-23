import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])
  const imgBaseUrl = 'https://image.tmdb.org/t/p/original/'

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  const onClickMovie = (id) => {
    navigate(`/movie/${id}`)
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-items">
        {movies.map((movie) => (
          <img
            onClick={() => onClickMovie(movie.id)}
            key={movie.id}
            className={`row-item ${isLargeRow && 'row-large-poster'}`}
            src={`${imgBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}
