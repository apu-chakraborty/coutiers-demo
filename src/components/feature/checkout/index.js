/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./checkout.module.scss";
import CreditCard from "./creditCard";
import PayPal from "./payPal";
import Etransfer from "./eTransfer";
import InnerHeader from "@/components/common/innerHeader";

function CheckoutBody() {
  const [type,setType]=useState("credit")
  return (
    <div> 
     <InnerHeader image="../../../assets/images/help-banner-img.png" title="Checkout" />

   
    <div className={styles.checkoutBsec}>
      <div className={styles.containerfluid}> 
        <div className={styles.ckeckFlex}>
          <div className={styles.checkLeftCol}>
            <h3>Payment Options</h3>
              <ul>
                <li><a className={styles.active} onClick={()=>setType("credit")}>Credit Card</a></li>
                <li><a onClick={()=>setType("etransfer")}>eTransfer</a></li>
                <li><a onClick={()=>setType("paypal")}>PayPal</a></li>
              </ul>
              {type==="credit"?<CreditCard/>:type==="etransfer"?
              <Etransfer/>:
              <PayPal/>}
          </div>
          <div className={styles.checkRightCol}>
            <div className={styles.confirmedSec}>                
                <div className={styles.orderSec}>
                  <h2>Order Summary</h2>        
                </div>
                <div className={styles.planSec}>
                  <div className={styles.flxplan}>
                    <div>
                      <h3>Plan B</h3>
                       <p>Brokers</p>
                      </div>
                    <a href="#">Change Plan ?</a>
                  </div>                  
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
                  <a className={styles.couponBtn} href="#">Add Coupon Code</a>
                  <div className={styles.flexRow}>
                    <h3>Total Amount Paid <span>"This could be the start of a great adventure"</span>
                      </h3> <h3>$63</h3>
                  </div>                  
                  <div className={styles.logoImg}><img alt="" src={"../../../images/logo.png"} /></div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>


    
    </div>
     
  );
}

export default CheckoutBody;
