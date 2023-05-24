/* eslint-disable */
import styles from "./footer.module.scss";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer() {
  
  return (
    <div className={styles.footer}>
      <div className={styles.containerfluid}>
        <div className={styles.footerFlex}>
          <div className={styles.footerCol1}>
            <img src={"../../../assets/images/footer-logo.png"} />
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className={styles.footerCol2}>
            <h3>Contact</h3>
            <p><span>Address</span> 1425 rue St-Denis, Montreal, Quebec H7P 2J4</p>
            <p className={styles.callText}><PhoneInTalkIcon/> 1 866 387-7677</p>
            <p className={styles.callText}><MailOutlineIcon/> Email</p>
          </div>
          <div className={styles.footerCol4}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Buy</a></li>
              <li><a href="#">Sell</a></li>
              <li><a href="#">Broker</a></li>
              <li><a href="#">Professional</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Documents and tutorials</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.footerCol3}>
          <h3>Ratings and Reviews</h3>
            <ul>
              <li><a href="#">Real estate broker</a></li>
              <li><a href="#">Hire a Photographer</a></li>
              <li><a href="#">Mortgage broker</a></li>
              <li><a href="#">Home inspector</a></li>
              <li><a href="#">Notaries</a></li>
              <li><a href="#">Home appraisers</a></li>
              <li><a href="#">Other professionals</a></li>             
            </ul>
          </div>
          <div className={styles.footerCol4}>
          <h3>About</h3>
            <ul>
              <li><a href="#">Mortgage</a></li>
              <li><a href="#">Referral program</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press room</a></li>
              <li><a href="#">Cookie policy</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Web site term of use</a></li>             
            </ul>
          </div>
          <div className={styles.footerCol5}>
             <h3>Actions</h3>
             <a className={styles.orangeBtn} href="#"><span>Create my profile</span></a> 
             <a className={styles.greenBtn} href="#"><span>Create my alert <img src={"../../../assets/images/f-icon.png"} /></span></a>
             <a className={styles.greenBtn} href="#"><span>Register</span></a> 
             <a className={styles.orangeBtn} href="#"><span>Login</span></a>
          </div>
        </div>

        <div className={styles.footerBotSec}>We are not a real estate agency and do not represent the seller or the buyer</div>

      </div>

      <div className={styles.footerCopySec}>Copyright © 2022. Courtiers et proprios. All Rights Reserved. <img src={"../../../assets/images/copy-icon.png"} /></div>
      
      <div className={styles.topScroll}><a href="#"><img src={"../../../assets/images/arrow-icon.png"} /></a></div>
    </div>
    
  );
}

