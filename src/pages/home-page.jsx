import { requests } from '../api/Request'
import { Hero } from '../cmps/Hero'
import { Nav } from '../cmps/Nav'
import { Row } from '../cmps/Row'

export const HomePage = () => {
  return (
    <div className="home-page">
      {<Nav />}
      {<Hero />}
      <Row title="Top Movies" fetchUrl={requests.fetchTopMovies} isLargeRow />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
    </div>
  )
}
