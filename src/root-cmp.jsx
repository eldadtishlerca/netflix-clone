import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
import { HomePage } from './pages/home-page'
import { LoginPage } from './pages/login-page'
import { MoviePage } from './pages/movie-page'
import { login, logout, selectUser } from './features/userSlice'
import { ProfilePage } from './pages/profile-page'
import { AccountPage } from './pages/account-page'

export const RootCmp = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <div>
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:movieId" element={<MoviePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </main>
        )}
      </Router>
    </div>
  )
}
