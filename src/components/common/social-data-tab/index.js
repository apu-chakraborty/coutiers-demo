import React, { useEffect, useState } from "react";
import HouseholdIncome from "./householdIncome";
import Age from "./age";
import Education from "./education";
import Ethinicity from "./ethinicity";
import Language from "./language";
import Construction from "./construction";
import Occupation from "./occupation";
import Housing from "./housing";
import CommuteMethod from "./commuteMethod";
import styles from "./socialdatatab.module.scss";

const SocialDataTab = () => {
  const [type,setType]=useState("householdIncome")
  return (
    <div  className={styles.socialDataTab}>
      <div className={styles.bottomTabArea}>
        <ul className={styles.socialSubTabMenu}>
          <li><a className={styles.active} onClick={()=>setType("householdIncome")}>Household Income</a></li>
          <li><a onClick={()=>setType("age")}>Age</a></li>
          <li><a onClick={()=>setType("education")}>Education</a></li>
          <li><a onClick={()=>setType("ethinicity")}>Ethinicity (Top 10)</a></li>
          <li><a onClick={()=>setType("language")}>Language (Top 10)</a></li>
          <li><a onClick={()=>setType("construction")}>Construction</a></li>
          <li><a onClick={()=>setType("occupation")}>Occupation</a></li>
          <li><a onClick={()=>setType("housing")}>Housing</a></li>
          <li><a onClick={()=>setType("commuteMethod")}>Commute Method</a></li>
        </ul>
        <div className={styles.socialSubTabContentPrt}>
          {type==="householdIncome"? <HouseholdIncome/>:type==="age"? <Age/>:type==="education"? <Education/>:type==="ethinicity"? <Ethinicity/>:type==="language"? <Language/>:type==="construction"? <Construction/>:type==="occupation"? <Occupation/>:type==="housing"? <Housing/>:type==="commuteMethod"? <CommuteMethod/>:null}
        </div>
      </div>
    </div>
  )
}

export default SocialDataTab

