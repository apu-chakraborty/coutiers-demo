/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./howItWorks.module.scss";
import GeneralUsers from "./generalUsers";
import HomeOwners from "./homeOwners";
import Brokers from "./brokers";
import Professionals from "./professionals";
import InnerHeader from "@/components/common/innerHeader";

function HowItWorksBody() {
  const [type,setType]=useState("generalUsers")
  return (
    <div> 
      <InnerHeader image="../../../assets/images/help-banner-img.png" title="How It Works"  />

   
    <div className={styles.howItWrkBsec}>
      <div className={styles.howItWrkTabPrt}>
        <div className={styles.containerfluid}>
          <div className={styles.hdn}>
            <h2>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing elit.</h2>
            <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor, ultricies eu tellus. Praesent lacinia velit eu libero sollicitudin laoreet. Sed posuere nibh augue, ut facilisis diam convallis eu. Vivamus vel gravida mauris. Fusce rutrum elementum ex, vel gravida diam suscipit vitae. Proin convallis lacus velit, et sagittis enim tincidunt blandit. Mauris sit amet velit id orci tristique faucibus eget nec est. Nulla lectus enim, hendrerit eget erat in, finibus fringilla velit. Mauris a vulputate diam. Morbi eu dui at arcu vehicula blandit. Curabitur ut tortor a nulla elementum tristique. Donec congue enim non odio vehicula semper. Donec id odio erat.</p>
          </div>
            <ul className={styles.tabMenu}>
              <li><a className={styles.active} onClick={()=>setType("generalUsers")}>General Users</a></li>
              <li><a onClick={()=>setType("homeOwners")}>Home Owners</a></li>
              <li><a onClick={()=>setType("brokers")}>Brokers</a></li>
              <li><a onClick={()=>setType("professionals")}>Professionals</a></li>
            </ul>
          </div>
          {type==="generalUsers"?<GeneralUsers/>:type==="homeOwners"? <HomeOwners/>:
          type==="brokers"?<Brokers/>:type==="professionals"? <Professionals/>:null}
      </div>
    </div>

    
    </div>
     
  );
}

export default HowItWorksBody;
