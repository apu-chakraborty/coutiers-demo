import Modal from 'react-modal'
import styles from "./auth.module.scss"
import PerfectScrollbar from 'react-perfect-scrollbar'
import { customStyles } from './customStyles'
export default function Signin({isLoginModalOpen, loginCloseModal}) {
    return (
        <Modal
        className="loginRegisterPopup"
        isOpen={isLoginModalOpen}
        onRequestClose={loginCloseModal}
        style={customStyles}
        contentLabel="Sign In"
      >
        <div className={`${styles.loginRegisterPopupRow} ${styles.loginSameHeightPopupRow}`}>
          <div className={styles.loginPopupLeftPrt}>
            <img src={"../../../assets/images/login-image.jpg"} />
          </div>
          <div className={styles.loginRegisterPopupRightFormPrt}>
            <div className={styles.loginRegisterPopupHdnPrt}>
              <a className={styles.loginRegisterPopupCloseIcon} onClick={loginCloseModal}>
                <img src={"../../../assets/images/close-icon.png"} />
              </a>
              <h2>Login</h2>
            </div>
            <div className={styles.loginRegisterForm}>
              <PerfectScrollbar
                className="loginRegisterPopupHeight"
              >
                <form>
                  <div className="courtiersDfltForm">
                    <div className="oneClmForm">
                      <input className="dfltFormField" type="email" placeholder="Email address" name="" />
                    </div>
                    <div className="oneClmForm">
                      <input className="dfltFormField" type="password" placeholder="Password" name="" />
                    </div>
                    <div className="oneClmForm">
                      <button className="flWidthOrngSubmit" type="submit">Submit</button>
                    </div>
                    <div className="oneClmForm">
                      <p className="forgotPass"><a href="#">Forgot password?</a></p>
                    </div>
                    <div className="oneClmForm">
                      <p className="needAccount">Need an account? <a href="#">Register today</a></p>
                    </div>
                  </div>
                </form>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </Modal>
    )
}
