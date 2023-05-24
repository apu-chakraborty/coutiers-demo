/* eslint-disable */
// import "./header.css";
import 'font-awesome/css/font-awesome.min.css';
import Modal from 'react-modal';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useState } from "react";
import styles from "./header.module.scss";
import Signup from '../auth/signup';
import Signin from '../auth/signin';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  function loginOpenModal() {
    setIsLoginModalOpen(true);
  }
  function loginCloseModal() {
    setIsLoginModalOpen(false);
  }

  function registerOpenModal() {
    setIsRegisterModalOpen(true);
  }
  function registerCloseModal() {
    setIsRegisterModalOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  return (
    <div className={styles.header}>
      <Signin
        loginCloseModal={loginCloseModal}
        isLoginModalOpen={isLoginModalOpen}
      ></Signin>
      <Signup
        registerCloseModal={registerCloseModal}
        isRegisterModalOpen={isRegisterModalOpen}

      ></Signup>
      <div className={styles.containerfluid}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeftCol}>

            <div className={styles.hdrLeftTopSocialMedia}>
              <ul>
                <li className={styles.socialIcon}><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li className={styles.socialIcon}><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li className={styles.socialIcon}><a href="#"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
            <nav>
              <div className="topnav" id="myTopnav">
                <ul>
                  <li><a href="#">Buy</a></li>
                  <li><a href="#">Sell</a></li>
                  <li><a href="#">Brokers</a></li>
                  <li><a href="#">Professionals</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#"><i className="heartIcon"></i></a></li>
                  <li><a href="#"><i className="mail2Icon"></i> Create my alert</a></li>
                </ul>
                <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                  <i className="fa fa-bars"></i>
                </a>
              </div>
            </nav>


          </div>
          <div className={styles.headerMidCol}><a title="COURTIERS PROPRIOS" href="#">
            <img src={"../../../assets/images/logo.png"} /></a></div>
          <div className={styles.headerRightCol}>
            <div className={styles.topRow}>
              <ul>
                <li className={styles.hdrProfileClaimBtn}><a href="#">Claim my profile</a></li>
                <li><a onClick={loginOpenModal}><i class="fa fa-user-o"></i> Login</a></li>
                <li className={styles.navDivider}></li>
                <li><a onClick={registerOpenModal}>Register</a></li>
              </ul>
            </div>
            <div className={styles.bottomRow}>
              <ul>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">
                  <select>
                    <option value="EN">EN</option>
                  </select>
                </a></li>
                <li>
                  <div className={styles.containerSearch} >
                    <input placeholder='Search...' className={styles.jsSearch} type="text" />
                  </div>
                  {/* <a className={styles.searchCol} href="#"><i className="fa fa-search"></i></a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
