/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./orderConfirmation.module.scss";

function OrderconfirmationBody() {
  return (
    <div>   

    <div className={styles.confirmedSec}>
      <img alt="" src={"../../../assets/images/confirmed-icon.png"} />
      <h2>Confirmed</h2>
      <h3>Thanks for your your order</h3>
      <h4>Order Number: 005876</h4>
      <p>You will receive an email confirmation shortly</p>
      <p className={styles.printText}><img alt="" src={"../../../assets/images/print-icon.png"} /> Print</p>
      <div className={styles.orderSec}>
        <h2>Order Summary</h2>        
      </div>
      <div className={styles.planSec}>
        <h3>Plan B</h3>
        <p>Brokers</p>
        <div className={styles.flexRow}>
          <p>Monthly Payment</p> <p>$15</p>
        </div>
        <div className={styles.flexRow}>
          <p>Add-ons cities</p> <p>$5</p>
        </div>
        <div className={styles.flexRow}>
          <p>Add-Ons and Account Upgrades</p> <p>$5</p>
        </div>
        <div className={styles.flexRow}>
          <p>Taxes</p> <p>$8</p>
        </div>
        <div className={styles.flexRow}>
          <p>Fees</p> <p>$10</p>
        </div>
        <div className={styles.flexRow}>
          <p>GST</p> <p>$10</p>
        </div>
        <div className={styles.flexRow}>
          <p>QST</p> <p>$10</p>
        </div>
        <div className={styles.flexRow}>
          <h3>Total Amount Paid <span>"This could be the start of a great adventure"</span>
            </h3> <h3>$63</h3>
        </div>
        <div className={styles.logoImg}><img alt="" src={"../../../assets/images/logo.png"} /></div>
      </div>
    </div>

    
    </div>
     
  );
}

export default OrderconfirmationBody;