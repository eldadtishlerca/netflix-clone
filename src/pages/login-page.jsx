import { useRef } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

export const LoginPage = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const userRegister = (e) => {
    e.preventDefault()

    const auth = getAuth()
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((err) => {
        alert(err.massage)
      })
  }

  const userLogin = (e) => {
    e.preventDefault()

    const auth = getAuth()
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((err) => {
        alert(err.massage)
      })
  }

  return (
    <div
      className="login-page"
      style={{ backgroundImage: 'url(../loginpage.png)' }}
    >
      <div className="login-wrapper">
        <h1>Sign In</h1>
        <form>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter email address"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter password"
          />
          <button onClick={userLogin}>Sign In</button>
        </form>
        <p className="login-signup">
          New to Netflix? <span onClick={userRegister}>Sign up now</span>
        </p>
      </div>
    </div>
  )
}
