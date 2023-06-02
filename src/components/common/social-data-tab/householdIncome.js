import React from 'react'
import styles from "./socialdatatab.module.scss";

const HouseholdIncome = () => {
  return (
    <div  className={styles.socialSubTabContentContainer}>
      <div className={styles.pieChartImgArea}>
        <img src={"../../../images/pie-chart-img.jpg"} alt="" />
      </div>
    </div>
  )
}

export default HouseholdIncome