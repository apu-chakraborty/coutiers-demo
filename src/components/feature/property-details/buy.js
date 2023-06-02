import React from 'react'
import styles from "./propertydetails.module.scss";

const Buy = () => {
  return (
    <div className={styles.tabContentContainer}>
      <div className={styles.buyTabBodyPrt}>
        <h2 className={styles.hdnRightBorder}>The steps involved in buying a property</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. In et suscipit libero, non molestie risus. Praesent in nunc et ligula molestie gravida rhoncus eget augue. </p>
        <div className={styles.buyTabContentList}>
          <ul>
            <li>
              <div className={styles.buyStepNumber}>
                <strong>1</strong>
                <span>Step</span>
              </div>
              <div className={styles.buyStepContent}>
                <h3>Financing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. In et suscipit libero, non molestie risus. Praesent in nunc et ligula molestie gravida rhoncus eget augue. Cras turpis libero, venenatis non nulla at, maximus vehicula est. Etiam sollicitudin sodales tellus, a interdum nisi lacinia id. Proin egestas volutpat dui nec auctor.</p>
              </div>
            </li>
            
            <li>
              <div className={styles.buyStepNumber}>
                <strong>2</strong>
                <span>Step</span>
              </div>
              <div className={styles.buyStepContent}>
                <h3>Offer to purchase</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. In et suscipit libero, non molestie risus. Praesent in nunc et ligula molestie gravida rhoncus eget augue. Cras turpis libero, venenatis non nulla at, maximus vehicula est. Etiam sollicitudin sodales tellus, a interdum nisi lacinia id. Proin egestas volutpat dui nec auctor.</p>
                <div className={styles.downloadBtn}>
                  <a className={styles.orengeGlowBtn} href="#">Document to download</a>
                </div>
              </div>
            </li>

            <li>
              <div className={styles.buyStepNumber}>
                <strong>3</strong>
                <span>Step</span>
              </div>
              <div className={styles.buyStepContent}>
                <h3>Conditions of purchase</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. In et suscipit libero, non molestie risus. Praesent in nunc et ligula molestie gravida rhoncus eget augue. Cras turpis libero, venenatis non nulla at, maximus vehicula est. Etiam sollicitudin sodales tellus, a interdum nisi lacinia id. Proin egestas volutpat dui nec auctor.</p>
              </div>
            </li>

            <li>
              <div className={styles.buyStepNumber}>
                <strong>4</strong>
                <span>Step</span>
              </div>
              <div className={styles.buyStepContent}>
                <h3>Property transfer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. In et suscipit libero, non molestie risus. Praesent in nunc et ligula molestie gravida rhoncus eget augue. Cras turpis libero, venenatis non nulla at, maximus vehicula est. Etiam sollicitudin sodales tellus, a interdum nisi lacinia id. Proin egestas volutpat dui nec auctor.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.allBuyingLink}>
          More details on these steps. See
          <a className={styles.orengeArrowLink} href="#">
            All about buying <img src="../../../assets/images/orenge-right-arrow.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Buy