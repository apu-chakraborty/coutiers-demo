/* eslint-disable */
import styles from "./contracts.module.scss";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import InnerHeader from "@/components/common/innerHeader";
import ContractsRightbar from "./contractsRightbar";
import Documents from "./documents";
import VideoTutorial from "./videoTutorial";

function ContractsBody() {
  return (
    <div> 
     <InnerHeader image="../../../assets/images/help-banner-img.png" title="Contracts" />

   
    <div className={styles.commonBsec}>
      <div className={styles.containerfluid}> 
        <div className={styles.titleSec}> 
          <h3>Showing <span className={styles.greyText}>12</span> of results out of <span>34</span> total</h3>
          <div className={styles.searchSect}>
            <p><HelpOutlineOutlinedIcon/> Help</p>
            <p><DescriptionOutlinedIcon/> Special contract clauses</p>
            <div className={styles.searchCol}>
              <input placeholder="Search help topics by keyword" type="text"/>
            </div>
            <div className={styles.selectCol}>
              <select>
                <option selected value="1">Filter By</option>
              </select>
            </div>            
          </div>          
        </div>



        <div className={styles.docsecBody}>
          <div className={styles.docLeftsec}>
            <Documents />
            <VideoTutorial />
          </div>
         <ContractsRightbar />
        </div>
      </div>
    </div>

    
    </div>
     
  );
}

export default ContractsBody;