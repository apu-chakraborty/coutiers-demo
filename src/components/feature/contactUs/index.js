/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./contactUs.module.scss";
import InnerHeader from "@/components/common/innerHeader";

function ContactUsBody() {
  return (
    <div>
      <InnerHeader image="../../../assets/images/help-banner-img.png" title="Contact Us" />

      <div className={styles.contactBodySec}>
        <div className={styles.containerfluid}> 
          <div className={styles.contactBodyRow}>
            <div className={styles.contactPageLeftFormPrt}>
              <h2 className={styles.contactFormHdn}>Send Us An Email</h2>
              <form>
                <div className="courtiersDfltForm">
                  <div className="dfltFormRow">
                    <div className="twoClmForm">
                      <input className="dfltFormField" type="text" placeholder="First name" name="" />
                    </div>
                    <div className="twoClmForm">
                      <input className="dfltFormField" type="text" placeholder="Last name" name="" />
                    </div>
                  </div>
                  <div className="oneClmForm">
                    <input className="dfltFormField" type="email" placeholder="Email address" name="" />
                  </div>
                  <div className="oneClmForm">
                    <input className="dfltFormField" type="tel" placeholder="Phone Number" name="" />
                  </div>
                  <div className="oneClmForm">
                    <select>
                      <option value="Reason for Contact">Reason for Contact</option>
                      <option value="oranges">Outrageous Oranges</option>
                      <option value="tomatoes">Technically a Fruit Tomatoes</option>
                      <option value="bananas">Bodacious Bananas</option>
                    </select>
                  </div>
                  <div className="oneClmForm">
                    <textarea className="dfltFormField" placeholder="Message" name=""></textarea>
                  </div>
                  <div className="oneClmForm">
                    <button className="paymentBtn" type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.contactPageRightInfoPrt}>
              <div className={styles.contactInfoBg}>
                <div className={styles.contactInfoTextArea}>
                  <h3>Information</h3>
                  <p>1425 rue St-Denis, Montreal, Quebec H7P 2J4</p>
                  <p><img className={styles.callIcon} alt="" src={"../../../assets/images/call-icon2.png"} /> 1 866 387-7677</p>
                </div>
              </div>
              <div className={styles.scheduleCallRow}>
                <div className={styles.scheduleCallBtn}>
                  <a className={styles.orengeBtnNoGlow} href="#">
                    <img className={styles.scheduleCallIcon} src={"../../../assets/images/schedule-call-icon.png"} alt="" />Schedule a call
                  </a>
                </div>
                <div className={styles.scheduleCallImg}>
                  <img src={"../../../assets/images/schedule-call-img.jpg"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    
    </div>
    

    

     
  );
}

export default ContactUsBody;