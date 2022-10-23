import React from 'react'
import { useSelector } from 'react-redux'
import { Nav } from '../cmps/Nav'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

export const AccountPage = () => {
  const user = useSelector(selectUser)
  return (
    <div className="account-page">
      <Nav />
      <div className="account-content">
        <h1>Edit Account</h1>
        <div className="account-details">
          <div className="account-img-wrapper">
            <img src="../1.png" alt="" />
          </div>
          <div className="account-txt">
            <h4>{user.email}</h4>
            <h2>Plans (Current Plan: Platinum)</h2>
            <p className="account-plan-date">Renewal date: 23/10/20223</p>
            <div className="account-plans">
              <div className="plan-item">
                <p>
                  Netflix Standard
                  <br />
                  <span>1 Screen - 1080p</span>
                </p>
                <div>Subscribe</div>
              </div>
              <div className="plan-item">
                <p>
                  Netflix Gold
                  <br />
                  <span>2 Screens - 1440p</span>
                </p>
                <div>Subscribe</div>
              </div>
              <div className="plan-item">
                <p>
                  Netflix Platinum
                  <br />
                  <span>4 Screens - 4K</span>
                </p>
                <div>Current Package</div>
              </div>
            </div>
            <div className="account-btn-signout" onClick={() => auth.signOut()}>
              Sign Out
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
