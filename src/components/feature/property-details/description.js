import React from 'react'
import styles from "./propertydetails.module.scss";

const Description = () => {
  return (
    <div className={styles.tabContentContainer}>
      <div className={styles.brokerDetailsDescriptionTab}>
        <div className={`${styles.houseInfo} ${styles.bottomShadow}`}>
          <ul>
            <li>
              <img src={"../../../assets/images/bed-icon1.png"} alt="" />
              <p>4 bedrooms</p>
            </li>
            <li>
              <img src={"../../../assets/images/bath-icon1.png"} alt="" />
              <p>2 bathrooms</p>
            </li>
            <li>
              <img src={"../../../assets/images/toile-icon1.png"} alt="" />
              <p>1 half bath</p>
            </li>
            <li>
              <img src={"../../../assets/images/house-icon1.png"} alt="" />
              <p>2 levels</p>
            </li>
            <li>
              <img src={"../../../assets/images/living-space-icon1.png"} alt="" />
              <p>2600 ft2 ( 241.55 m2)
              <span>Living space area (basement exlcu.)</span></p>
            </li>
            <li>
              <img src={"../../../assets/images/lot-dimention-icon1.png"} alt="" />
              <p>9874.81 ft2 ( 917.4m2)
              <span>Lot dimension</span></p>
            </li>
          </ul>
        </div>

        <div className={`${styles.sellersDescription} ${styles.bottomShadow}`}>
          <h2 className={styles.hdnRightBorder}>Sellers description</h2>
          <p>Automated translation <a className={styles.showBtn} href="#">Show original comments</a></p>
          <p>Modern and rustic cottage with a living area of 1853 ft2 (excluding the basement) including a 12,680 ft2 lot</p>

          <h3>Features and inclusions:</h3>
          <ul>
            <li>Attached garage/door opener/service sink</li>
            <li>Electrical output for future electric vehicle charging station</li>
            <li>Central heating (hot air)</li>
            <li>Heat pump</li>
            <li>Air exchanger/heat recovery unit</li>
            <li>Propane gas fireplace</li>
            <li>Hardwood and ceramic flooring</li>
            <li>Solid wood staircase with open steps</li>
            <li>Large laundry room upstairs</li>
          </ul>
        </div>

        <div className={`${styles.propertyFeaturesPrt} ${styles.bottomShadow}`}>
          <h2 className={styles.hdnRightBorder}>Property  features</h2>
          <div className={styles.propertyFeaturesTable}>
            <table>
              <tr>
                <td>Price Detail</td>
                <td>By Appointment</td>
              </tr>
              <tr>
                <td>Asking Price</td>
                <td>$1,300,000</td>
              </tr>
              <tr>
                <td>Building dimensions</td>
                <td>2000 ft2 (185.81 m2)</td>
              </tr>
              <tr>
                <td>Municipal Assessment</td>
                <td>$937,400</td>
              </tr>
              <tr>
                <td>Backyard Faces</td>
                <td>North</td>
              </tr>
              <tr>
                <td>Year of construction</td>
                <td>2017</td>
              </tr>
            </table>
          </div>
          <a className={styles.lostPropertyFeatureLink} href="#">
            Complete lost of property features <img src={"../../../assets/images/orenge-down-arrow-icon.png"} alt="" />
          </a>
        </div>


        <div className={styles.roomDimensionPrt}>
          <h2 className={styles.hdnRightBorder}>Room dimensions</h2>
          <div className={styles.roomDimensionTable}>
            <div className={styles.table}>
              <div className={styles.tableBody}>
                <div className={styles.theader}>
                  <div className={styles.tableHeader}>
                    Storey
                  </div>
                  <div className={styles.tableHeader}>
                    Room
                  </div>
                  <div className={styles.tableHeader}>
                    Dimensions
                  </div>
                  <div className={styles.tableHeader}>
                    Flooring
                  </div>
                </div>
              </div>
              <div className={styles.tableBody}>
                <div className={styles.tableRow}>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Storey
                    </div>
                    <div className={styles.tableCell}>
                      Main floor
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Room
                    </div>
                    <div className={styles.tableCell}>
                      Dining room
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Dimensions
                    </div>
                    <div className={styles.tableCell}>
                      13' 10' x 12' 3" (4,22 m x 3,73 m)
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Flooring
                    </div>
                    <div className={styles.tableCell}>
                      Hardwood
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Storey
                    </div>
                    <div className={styles.tableCell}>
                      Main floor
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Room
                    </div>
                    <div className={styles.tableCell}>
                      Entrance
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Dimensions
                    </div>
                    <div className={styles.tableCell}>
                      9' 6" x 6' 4" (2,9 m x 1,93 m)
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Flooring
                    </div>
                    <div className={styles.tableCell}>
                      Slate
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Storey
                    </div>
                    <div className={styles.tableCell}>
                      Main floor
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Room
                    </div>
                    <div className={styles.tableCell}>
                      Garage
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Dimensions
                    </div>
                    <div className={styles.tableCell}>
                      22' x 20' 8" (6,71 m x 6,3 m)
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Flooring
                    </div>
                    <div className={styles.tableCell}>
                      Ceramic
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Storey
                    </div>
                    <div className={styles.tableCell}>
                      Main floor
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Room
                    </div>
                    <div className={styles.tableCell}>
                      Half bath
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Dimensions
                    </div>
                    <div className={styles.tableCell}>
                      7' 3" x 5' 5" (2,21 m x 1,65 m)
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Flooring
                    </div>
                    <div className={styles.tableCell}>
                      Ceramic
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Storey
                    </div>
                    <div className={styles.tableCell}>
                      Main floor
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Room
                    </div>
                    <div className={styles.tableCell}>
                      Kitchen
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Dimensions
                    </div>
                    <div className={styles.tableCell}>
                      14' 11" x 12' 4" (4,55 m x 3,76 m)
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Flooring
                    </div>
                    <div className={styles.tableCell}>
                      Hardwood
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tableBody}>
                <div className={styles.tableRow}>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Storey
                    </div>
                    <div className={styles.tableCell}>
                      2nd floor
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Room
                    </div>
                    <div className={styles.tableCell}>
                      Dining room
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Dimensions
                    </div>
                    <div className={styles.tableCell}>
                      13' 10' x 12' 3" (4,22 m x 3,73 m)
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Flooring
                    </div>
                    <div className={styles.tableCell}>
                      Hardwood
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Storey
                    </div>
                    <div className={styles.tableCell}>
                      2nd floor
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Room
                    </div>
                    <div className={styles.tableCell}>
                      Entrance
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Dimensions
                    </div>
                    <div className={styles.tableCell}>
                      9' 6" x 6' 4" (2,9 m x 1,93 m)
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Flooring
                    </div>
                    <div className={styles.tableCell}>
                      Slate
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Storey
                    </div>
                    <div className={styles.tableCell}>
                      2nd floor
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Room
                    </div>
                    <div className={styles.tableCell}>
                      Garage
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Dimensions
                    </div>
                    <div className={styles.tableCell}>
                      22' x 20' 8" (6,71 m x 6,3 m)
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Flooring
                    </div>
                    <div className={styles.tableCell}>
                      Ceramic
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Storey
                    </div>
                    <div className={styles.tableCell}>
                      2nd floor
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Room
                    </div>
                    <div className={styles.tableCell}>
                      Half bath
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Dimensions
                    </div>
                    <div className={styles.tableCell}>
                      7' 3" x 5' 5" (2,21 m x 1,65 m)
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Flooring
                    </div>
                    <div className={styles.tableCell}>
                      Ceramic
                    </div>
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Storey
                    </div>
                    <div className={styles.tableCell}>
                      2nd floor
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Room
                    </div>
                    <div className={styles.tableCell}>
                      Kitchen
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Dimensions
                    </div>
                    <div className={styles.tableCell}>
                      14' 11" x 12' 4" (4,55 m x 3,76 m)
                    </div>
                  </div>
                  <div className={styles.tableSmall}>
                    <div className={styles.tableCell}>
                      Flooring
                    </div>
                    <div className={styles.tableCell}>
                      Hardwood
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description