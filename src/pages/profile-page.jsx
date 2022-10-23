import { useNavigate } from 'react-router-dom'

export const ProfilePage = () => {
  const navigate = useNavigate()

  const navigateAccount = () => {
    navigate('/account')
  }

  return (
    <div className="profile-page">
      <div className="profile-wrapper">
        <h1>Who's Watching?</h1>
        <div className="profile-icons">
          <div className="profile-item">
            <img src="../1.png" alt="" />
            <p>Eldad</p>
          </div>
          <div className="profile-item">
            <img src="../2.png" alt="" />
            <p>Nadav</p>
          </div>
          <div className="profile-item">
            <img src="../3.png" alt="" />
            <p>Nadav</p>
          </div>
          <div className="profile-item">
            <img src="../4.png" alt="" />
            <p>Nadav</p>
          </div>
        </div>
        <div className="profile-manager">
          <span onClick={navigateAccount}>MANAGE PROFILES</span>
        </div>
      </div>
    </div>
  )
}
