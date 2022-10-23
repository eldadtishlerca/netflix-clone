import { useState, useEffect } from 'react'
import axios from 'axios'
import { requests } from '../api/Request'
import { useNavigate } from 'react-router-dom'

export const Hero = () => {
  const [currMovie, setCurrMovie] = useState([])
  const navigate = useNavigate()
  const imgBaseUrl = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending)
      const movies = request.data.results
      setCurrMovie(movies[randomIndex(movies)])
      return request
    }

    fetchData()
  }, [])

  const randomIndex = (arr) => {
    const num = Math.floor(Math.random() * arr.length - 1)
    return num
  }

  const truncate = (str, n) => {
    if (str) {
      return str.length > n ? str.substr(0, n - 1) + '...' : str
    } else {
      return 'Desc not found'
    }
  }

  const playClicked = () => {
    navigate(`/movie/${currMovie.id}`)
  }

  return (
    <header
      className="hero"
      style={{
        backgroundImage: `url("${imgBaseUrl}${currMovie?.backdrop_path}")`,
      }}
    >
      <div className="hero-txt">
        <h1 className="hero-title">{currMovie.title}</h1>
        <div className="hero-btns-wrap">
          <button onClick={playClicked} className="hero-btn play-btn">
            Play
          </button>
          <button className="hero-btn list-btn">My List</button>
        </div>
        <h2 className="hero-desc">{truncate(`${currMovie.overview}`, 150)}</h2>
        <p>{}</p>
      </div>

      <div className="hero-fade" />
    </header>
  )
}
