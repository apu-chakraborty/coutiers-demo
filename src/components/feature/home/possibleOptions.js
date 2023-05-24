import styles from "./home.module.scss";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export function PossibleOptions() {
    return (
        <div className={styles.allOption}>
        <div className={styles.containerfluid}>
          <h2>ALL POSSIBLES OPTIONS</h2>
          <div className={styles.boxSec}>
  
            <div className={styles.boxCol}>
              <div className={styles.imgSec}>
                <img alt="" src={"../../../assets/images/img1.jpg"} />
              </div>
              <div className={styles.imgCap}>
                <h3>Sell your house</h3>
                <div className={styles.ulsec}>
                <ul>
                  <li>No broker</li>
                  <li>0$ commission</li>
                  <li>Lawn sign include</li>
                  <li>Unlimited pictures</li>
                  <li>Online listing until you sell</li>
                  <li>Dashboard includes</li>
                </ul>
                </div>
                <div className={styles.paraSec}>
                  <h4>Starting at <strong>299$</strong></h4>
                  <p>Hire a professional photographer from <strong>$99</strong></p>
                </div>
                <a href="#"><AddTwoToneIcon/> Learn more</a>
              </div>
            </div>
  
            <div className={styles.boxCol}>
              <div className={styles.imgSec}>
                <img alt="" src={"../../../assets/images/img2.jpg"} />
              </div>
              <div className={styles.imgCap}>
                <h3>Sell your house</h3>
                <div className={styles.ulsec}>
                <ul>
                  <li>With on broker who find the buyer</li>
                  <li>Half commission</li>
                  <li>Lawn sign include</li>
                  <li>Unlimited pictures</li>
                  <li>Online listing until you sell</li>
                  <li>Dashboard includes</li>
                </ul>
                </div>
                <div className={styles.paraSec}>
                  <h4>Starting at <strong>299$</strong></h4>
                  <p>Hire a professional photographer from <strong>$99</strong></p>
                </div>
                <a href="#"><AddTwoToneIcon/> Learn more</a>
              </div>
            </div>
  
            <div className={styles.boxCol}>
              <div className={styles.imgSec}>
                <img alt="" src={"../../../assets/images/img3.jpg"} />
              </div>
              <div className={styles.imgCap}>
                <h3>Sell your house</h3>
                <div className={styles.ulsec}>
                  <ul>
                    <li>On your commission terms with brokers</li>
                    <li>Set your terms</li>                
                  </ul>
                </div>
                <div className={styles.paraSec}>
                  <h4>Sell your terms</h4>
                  <p>Receive broker's offer for <strong>Free</strong></p>
                </div>
                <a href="#"><AddTwoToneIcon/> Learn more</a>
              </div>
            </div>
  
            <div className={styles.boxCol}>
              <div className={styles.imgSec}>
                <img alt="" src={"../../../assets/images/img4.jpg"} />
              </div>
              <div className={styles.imgCap}>
                <h3>Rating & Reviews</h3>
                <div className={styles.ulsec}>
                  <ul>
                    <li>View rating and reviews on Brokers andprofessionals</li>
                    <li>Rate Brokers and professionals and leave</li>                
                  </ul> 
                </div> 
                <div className={styles.paraSec}>          
                  <p className={styles.flexCent}><span className={styles.rating}><StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarHalfIcon/></span> ( 4.5 / 5 )</p>
                </div>  
                <a href="#"><AddTwoToneIcon/> Learn more</a>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
}