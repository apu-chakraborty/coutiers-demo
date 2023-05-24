import React from 'react'
import styles from "./howItWorks.module.scss";

const GeneralUsers = () => {
  return (
    <>
    <div className={styles.tabContentContainer}>
      <div className={styles.generalUserStepSec}>
        <ul>
          <li>
            <div className={styles.stepIcon}>
              <img src="../../../assets/images/general-user-register-icon.png" alt="" />
            </div>
            <h3>Register and place an add</h3>
            <p>Starting at 199$</p>
          </li>
          <li>
            <div className={styles.stepIcon}>
              <img src="../../../assets/images/general-user-freelancer-photographer-icon.png" alt="" />
            </div>
            <h3>Hire a freelancer photographer for your house photoshoot</h3>
            <p>Starting at 99$</p>
          </li>
          <li>
            <div className={styles.stepIcon}>
              <img src="../../../assets/images/general-user-book-icon.png" alt="" />
            </div>
            <h3>Book showings directly <br/>Boost your ad</h3>
            <p>Review broker’s bids Get instant comments/feedback Gain fidelity points</p>
          </li>
        </ul>
      </div>
      <div className={styles.generalUserBodyBannerSec}>
        <div className={styles.generalUserBodyBannerImg}>
          <img src="../../../assets/images/general-user-body-banner.jpg" alt="" />
        </div>
        <p>Nulla et nisl massa. Aenean ultrices, magna vitae fermentum semper, risus ipsum vehicula justo, sollicitudin congue purus lacus eu ante. Fusce ligula odio, volutpat eget justo eget, fermentum malesuada nisi. Fusce venenatis nisi eros, non sodales risus bibendum at. Phasellus sit amet velit et diam facilisis ullamcorper. Nullam sed dui vitae risus mollis bibendum vitae sed risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec ante justo, viverra ac cursus nec, mattis nec elit. Mauris vitae magna id lectus convallis blandit.</p>
      </div>
    </div>

    <div className={styles.generalUserThreeClmSec}>
      <div className={styles.tabContentContainer}>
        <div className={styles.generalUserThreeClmRow}>
          <div className={styles.generalUserThreeClmItem}>
            <div className={styles.generalUserThreeClmIcon}>
              <img src="../../../assets/images/general-user-three-clm-icon1.png" alt="" />
            </div>
            <h3>Nulla et nisl massa</h3>
            <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor, ultricies eu tellus. Praesent lacinia velit eu libero sollicitudin laoreet.</p>
          </div>
          <div className={styles.generalUserThreeClmItem}>
            <div className={styles.generalUserThreeClmIcon}>
              <img src="../../../assets/images/general-user-three-clm-icon2.png" alt="" />
            </div>
            <h3>Suspendisse ultricies</h3>
            <p>Suspendisse ultricies finibus dignissim. Fusce lectus mauris, convallis sed eros at, rutrum porttitor enim.</p>
          </div>
          <div className={styles.generalUserThreeClmItem}>
            <div className={styles.generalUserThreeClmIcon}>
              <img src="../../../assets/images/general-user-three-clm-icon3.png" alt="" />
            </div>
            <h3>Quisque eget augue</h3>
            <p>Praesent semper ac enim sit amet condimentum. Ut tempus lectus vitae libero maximus, sit amet ultricies magna consequat.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default GeneralUsers
