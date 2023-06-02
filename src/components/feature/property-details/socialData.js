import React from 'react';
import styles from "./propertydetails.module.scss";
import SocialDataTab from '@/components/common/social-data-tab';

const SocialData = () => {
  return (
    <div  className={styles.tabContentContainer}>
      <div className={styles.socialDataTabBodyPrt}>
        <div className={styles.mapArea}>
          <h2>Demographics by Statistics Canada</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. In et suscipit libero, non molestie risus. Praesent in nunc et ligula molestie gravida rhoncus eget augue.</p>
          <img className={styles.mapImg} src={"../../../assets/images/map-img.jpg"} alt="" />
        </div>

        <div className={styles.statisticArea}>
          <h2 className={styles.hdnRightBorder}>Statistics Canada: Area #4785698</h2>
          <ul>
            <li>
              <p>Population 2023</p>
              <h4>789</h4>
            </li>
            <li>
              <p>Average Age</p>
              <h4>53</h4>
            </li>
            <li>
              <p>Average Household Income</p>
              <h4>3.4</h4>
            </li>
            <li>
              <p>Renters</p>
              <h4>71.2%</h4>
            </li>
            <li>
              <p>Immigrants</p>
              <h4>29.5%</h4>
            </li>
            <li>
              <p>Condos</p>
              <h4>19.5%</h4>
            </li>
            <li>
              <p>Average Price</p>
              <h4>$231,717</h4>
            </li>
            <li>
              <p>College/University Education</p>
              <h4>48%</h4>
            </li>
            <li>
              <p>Low Income</p>
              <h4>28.7%</h4>
            </li>
            <li>
              <p>Not In Labour Force</p>
              <h4>29.5%</h4>
            </li>
            <li>
              <p>Single</p>
              <h4>19.5%</h4>
            </li>
            <li>
              <p>Households with Children</p>
              <h4>50.6%</h4>
            </li>
          </ul>
        </div>

        <SocialDataTab />

      </div>
    </div>
  )
}

export default SocialData