import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Nav = () => {
  const navigate = useNavigate()
  const [navBg, setNavBg] = useState('trans-bg')

  const transNav = () => {
    window.scrollY > 100 ? setNavBg('black-bg') : setNavBg('trans-bg')
  }

  useEffect(() => {
    window.addEventListener('scroll', transNav)
    return () => window.removeEventListener('scroll', transNav)
  }, [])

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className={`nav ${navBg}`}>
      <div className="nav-cont">
        <img className="nav-logo" src="../logo.png" alt="" onClick={goHome} />
        <img className="nav-profile" src="../1.png" alt="" />
      </div>
    </div>
  )
}
