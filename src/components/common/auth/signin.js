import Modal from 'react-modal'
import styles from "./auth.module.scss"
import PerfectScrollbar from 'react-perfect-scrollbar'
import { customStyles } from './customStyles'

import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { validationLoginSchema } from '@/schemas/authSchema';

export default function Signin({ isLoginModalOpen, loginCloseModal, registerOpenModal }) {
  return (
    <Modal
      className="loginRegisterPopup"
      isOpen={isLoginModalOpen}
      onRequestClose={loginCloseModal}
      style={customStyles}
      contentLabel="Sign In"
      ariaHideApp={false}
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
              <Formik initialValues={{ email: "", password: "" }}
                validationSchema={validationLoginSchema}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
                }}>
                {() => (
                  <Form>
                    <div className="courtiersDfltForm">
                      <div className="oneClmForm">
                        <CustomInput
                          name="email"
                          type="email"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="oneClmForm">
                        <CustomInput
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                        />

                      </div>
                      <div className="oneClmForm">
                        <button className="flWidthOrngSubmit" type="submit">
                          Login
                        </button>
                      </div>
                      <div className="oneClmForm">
                        <p className="forgotPass"><a href="#">Forgot password?</a></p>
                      </div>
                      <div className="oneClmForm">
                        <p className="needAccount">Need an account? 
                        <a href="#" onClick={() => {
                          registerOpenModal()
                          loginCloseModal()
                        }
                        }>Register today</a></p>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </Modal>
  )
}
