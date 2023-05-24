import React from 'react'
import styles from "./contracts.module.scss";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

export default function ContractsRightbar() {
  return (
    <div className={styles.docRightsec}>
    <div className={styles.offerSec}>
      <img alt="" src={"../../../assets/images/contact-right-img.jpg"} />
      <div className={styles.overlayBg}>
        <div className={styles.overlayCont}>
          <h2>Get Offers <span>from brokers to</span> <span><strong>Sell Your House</strong></span></h2>
          <div className={styles.nextArrow}><NavigateNextOutlinedIcon/></div>
        </div>
      </div>
    </div>
    <div className={styles.offerSec2}>
      <img alt="" src={"../../../assets/images/contact-right-img2.png"} />              
    </div>
    <div className={styles.offerSec2}>
      <img alt="" src={"../../../assets/images/contact-right-img3.png"} />              
    </div>
    <div className={styles.offerSec2}>
      <img alt="" src={"../../../assets/images/contact-right-img4.png"} />              
    </div>

  </div>
  )
}
