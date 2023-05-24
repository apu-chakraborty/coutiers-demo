import React from 'react'
import styles from "./checkout.module.scss";

const CreditCard = () => {
  return (
    <div className={styles.contentSec}>
      <div className={styles.flxRow}>
        <label>Card Number</label>
        <input className={styles.formControl} type="text" placeholder=''/>
        <div className={styles.cardImg}><img alt="" src={"../../../assets/images/card-img.png"} /></div>
      </div>
      <div className={`${styles.flxRow} ${styles.flxRow1}`}>
        <div className={styles.flxCol1}>
          <label>Expiry Month and Year</label>
          <input className={styles.formControl} type="text" placeholder='MM / YY'/>
        </div>
        <div className={styles.flxCol1}>
          <label>CVC</label>
          <input className={styles.formControl} type="text" placeholder=''/>
          <div className={styles.cardImg}><img alt="" src={"../../../assets/images/card-img2.png"} /></div>
        </div>
      </div>
      <div className={styles.flxRow}>
        <label>Card Holder Name</label>
        <input className={styles.formControl} type="text" placeholder=''/>        
      </div>
      <div className={styles.flxRow}>
        <label>Company name <span>(optional)</span></label>
        <input className={styles.formControl} type="text" placeholder=''/>        
      </div>
      <div className={`${styles.flxRow} ${styles.flxRow2}`}>
        <input type="checkbox"/> 
        <label className={styles.termText}> Please accept <a href='#'>Terms of Use</a> and <a href='#'>Refund Policy</a></label>               
      </div>
      <input className={styles.paymentBtn} value="Make Payment" type="button"/>
    </div>
  )
}

export default CreditCard
