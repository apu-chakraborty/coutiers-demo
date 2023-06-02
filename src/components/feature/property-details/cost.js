import React from 'react'
import { Tooltip } from '@mui/material';
// import OwlCarousel from 'react-owl-carousel'; 
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from "./propertydetails.module.scss";

const Cost = () => {
  const needMortgageBrokerCrsl = {
    responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 2,
      },
      1261: {
          items: 2,

      }
    },
  };

  return (
    <>
      <div className={styles.tabContentContainer}>
        <div className={styles.costTabBodyPrt}>
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

          <div className={`${styles.annualMonthlyCost} ${styles.bottomShadow}`}>
            <h2 className={styles.hdnRightBorder}>Annual and monthly costs</h2>
            <div className={styles.annualMonthlyCostRow}>
              <div className={styles.annualMonthlyCostLeftTable}>
                <div className={styles.table}>
                  <div className={styles.thdrRow}>
                    <div className={styles.thdrCell}>Summary of expenditures</div>
                    <div className={styles.thdrCell}>Monthly</div>
                    <div className={styles.thdrCell}>Annual</div>
                  </div>
                  <div className={styles.tbodyRow}>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Summary of expenditures</div>
                      <div className={styles.tableCell}>Property taxes</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Monthly</div>
                      <div className={styles.tableCell}>$357.34</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Annual</div>
                      <div className={styles.tableCell}>$3057.00</div>
                    </div>
                  </div>
                  <div className={styles.tbodyRow}>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Summary of expenditures</div>
                      <div className={styles.tableCell}>School taxes</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Monthly</div>
                      <div className={styles.tableCell}>$458.56</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Annual</div>
                      <div className={styles.tableCell}>$4580.66</div>
                    </div>
                  </div>
                  <div className={styles.tbodyRow}>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Summary of expenditures</div>
                      <div className={styles.tableCell}>Electricity</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Monthly</div>
                      <div className={styles.tableCell}>$258.65</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Annual</div>
                      <div className={styles.tableCell}>$3124.58</div>
                    </div>
                  </div>
                  <div className={styles.tbodyRow}>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Summary of expenditures</div>
                      <div className={styles.tableCell}>Heating</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Monthly</div>
                      <div className={styles.tableCell}>$458.85</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Annual</div>
                      <div className={styles.tableCell}>$5698.74</div>
                    </div>
                  </div>
                  <div className={styles.tbodyRow}>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Summary of expenditures</div>
                      <div className={styles.tableCell}>Principal & interest</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Monthly</div>
                      <div className={styles.tableCell}>$458.85</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Annual</div>
                      <div className={styles.tableCell}>$5698.74</div>
                    </div>
                  </div>
                  <div className={styles.tbodyRow}>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Summary of expenditures</div>
                      <div className={styles.tableCell}>Mortgage insurance</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Monthly</div>
                      <div className={styles.tableCell}>$458.85</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Annual</div>
                      <div className={styles.tableCell}>$5698.74</div>
                    </div>
                  </div>
                  <div className={styles.tbodyRow}>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Summary of expenditures</div>
                      <div className={styles.tableCell}>Home insurance</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Monthly</div>
                      <div className={styles.tableCell}>$458.85</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Annual</div>
                      <div className={styles.tableCell}>$5698.74</div>
                    </div>
                  </div>
                  <div className={styles.tbodyRow}>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Summary of expenditures</div>
                      <div className={styles.tableCell}>HOA fees</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Monthly</div>
                      <div className={styles.tableCell}>$458.85</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Annual</div>
                      <div className={styles.tableCell}>$5698.74</div>
                    </div>
                  </div>
                  <div className={styles.tbodyRow}>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Summary of expenditures</div>
                      <div className={styles.tableCell}>Total known costs</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Monthly</div>
                      <div className={styles.tableCell}>$1533.40</div>
                    </div>
                    <div className={styles.tableSmall}>
                      <div className={styles.tableCell}>Annual</div>
                      <div className={styles.tableCell}>$16460.98</div>
                    </div>
                  </div>

                </div>
              </div>

              <div className={styles.annualMonthlyCostRightPrt}>
                <div className={styles.leftTextArea}>
                  <h3>Your name home deserves to be well protected!</h3>
                  <div className={styles.formArea}>
                    <input type="text" placeholder="Postal Code" />
                    <button className={styles.orengeBtnNoGlow} type="submit">Submit</button>
                  </div>
                  <div className={styles.courtiersLogo}>
                    <img src={"../../../assets/images/content-logo.png"} alt="" />
                  </div>
                </div>
                <div className={styles.rightImgArea}>
                  <img className={styles.houseImg} src={"../../../assets/images/annual-monthly-cost-right-img.png"} alt="" />
                  <p><a className={styles.orengeBorderBtn} href="#">Get a home insurance now ?</a></p>
                </div>
              </div>
            </div>
            <a className={styles.orengeArrowLink} href="#">
              More info on the costs involved in buying a property
              <img src={"../../../assets/images/orenge-right-arrow.png"} alt="" />
            </a>
          </div>


          <div className={`${styles.mortgageCalculatorPrt} ${styles.bottomShadow}`}>
            <h2 className={styles.hdnRightBorder}>Mortgage Calculator</h2>
            <div className={styles.mortgageCalculatorRow}>
              <div className={styles.mortgageCalculatorClm}>
                <form>
                  <div className={styles.courtiersDfltForm}>
                    <div className={styles.oneClmForm}>
                      <div className={styles.tooltipArea}>
                        <Tooltip 
                          title={
                            <>
                              <p>Purchase price</p>
                            </>
                          }>
                          <a href="#">
                            <img className={styles.infoIcon} src={"../../../assets/images/info-icon.png"} alt="" />
                          </a>
                        </Tooltip>
                      </div>
                      <label>Purchase price</label>
                      <input class="dfltFormField" type="text" name="" />
                    </div>
                    <div className={styles.oneClmForm}>
                      <input className={styles.range} type="range" name="" />
                    </div>
                    <div className={styles.oneClmForm}>
                      <div className={styles.tooltipArea}>
                        <Tooltip 
                          title={
                            <>
                              <p>Amortization (years)</p>
                            </>
                          }>
                          <a href="#">
                            <img className={styles.infoIcon} src={"../../../assets/images/info-icon.png"} alt="" />
                          </a>
                        </Tooltip>
                      </div>
                      <label>Amortization (years)</label>
                      <select>
                        <option value="Type of Account">Years</option>
                        <option value="oranges">25 Years</option>
                        <option value="tomatoes">30 Years</option>
                        <option value="bananas">35 Years</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>

              <div className={styles.mortgageCalculatorClm}>
                <form>
                  <div className={styles.courtiersDfltForm}>
                    <div className={styles.oneClmForm}>
                      <div className={styles.tooltipArea}>
                        <Tooltip 
                          title={
                            <>
                              <p>Down Payment</p>
                            </>
                          }>
                          <a href="#">
                            <img className={styles.infoIcon} src={"../../../assets/images/info-icon.png"} alt="" />
                          </a>
                        </Tooltip>
                      </div>
                      <label>Down Payment</label>
                      <input class="dfltFormField" type="text" name="" />
                    </div>
                    <div className={styles.oneClmForm}>
                      <input className={styles.range} type="range" name="" />
                    </div>
                    <div className={styles.oneClmForm}>
                      <div className={styles.tooltipArea}>
                        <Tooltip 
                          title={
                            <>
                              <p>Down Payment</p>
                            </>
                          }>
                          <a href="#">
                            <img className={styles.infoIcon} src={"../../../assets/images/info-icon.png"} alt="" />
                          </a>
                        </Tooltip>
                      </div>
                      <label>Down Payment</label>
                      <select>
                        <option value="Type of Account">Years</option>
                        <option value="oranges">25 Years</option>
                        <option value="tomatoes">30 Years</option>
                        <option value="bananas">35 Years</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>

              <div className={styles.mortgageCalculatorClm}>
                <form>
                  <div className={styles.courtiersDfltForm}>
                    <div className={styles.oneClmForm}>
                      <div className={styles.tooltipArea}>
                        <Tooltip 
                          title={
                            <>
                              <p>Interest ratio (%)</p>
                            </>
                          }>
                          <a href="#">
                            <img className={styles.infoIcon} src={"../../../assets/images/info-icon.png"} alt="" />
                          </a>
                        </Tooltip>
                      </div>
                      <label>Interest ratio (%)</label>
                      <input class="dfltFormField" type="text" name="" />
                    </div>
                    <div className={styles.oneClmForm}>
                      <input className={styles.range} type="range" name="" />
                    </div>
                    <div className={styles.oneClmForm}>
                      <div className={styles.tooltipArea}>
                        <Tooltip 
                          title={
                            <>
                              <p>Payment frequency</p>
                            </>
                          }>
                          <a href="#">
                            <img className={styles.infoIcon} src={"../../../assets/images/info-icon.png"} alt="" />
                          </a>
                        </Tooltip>
                      </div>
                      <label>Payment frequency</label>
                      <select>
                        <option value="Type of Account">Weekly</option>
                        <option value="oranges">Monthly</option>
                        <option value="tomatoes">Yearly</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className={styles.ammountPaymentResult}>
              <div className={styles.ammountPaymentRow}>
                <div className={styles.mortgageAmount}>
                  <h3>Mortgage amount</h3>
                  <h4>$858,000</h4>
                </div>
                <div className={styles.myPayments}>
                  <h3>My payments</h3>
                  <h4>$1,875 Weekly</h4>
                </div>
              </div>
              <p>Would you like a mortgage pre-authorization? Make an appoitment with a Courtiers advisor today!</p>
              <a className={styles.orengeGlowBtn} href="#">Book Appointment</a>
            </div>
          </div>

          <div className={styles.needMortgageBrokerPrt}>
            <h2 className={styles.hdnRightBorder}>Need a mortgage broker?</h2>
            <div className={styles.needMortgageBrokerSlideArea}>
              {/* <OwlCarousel className="owl-theme needMortgageBrokerCrsl" loop margin={25} autoplay ={false} autoplayTimeout={5000} slideSpeed={300} smartSpeed={2500} nav={true} dots={false} responsiveClass={true} {...needMortgageBrokerCrsl}>

                <div className={styles.item}>
                  <div className={styles.brokersProfileItem}>
                    <div className={styles.brokersProfileStatus}>
                      <span className={styles.online}>Online</span>
                    </div>
                    <div className={styles.brokersProfilePic}>
                      <img src={"../../../assets/images/mortgage-broker-crsl-pic1.jpg"} alt="" />
                    </div>
                    <div className={styles.brokersProfileTitle}>
                      <h3>Valerie Schlosser</h3>
                      <h4>Real Estate Supervisor</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. </p>
                    </div>
                    <p className={styles.language}>
                      Spoken Language(s): <span>French,</span> <span>FrenchEnglish</span>
                    </p>
                    <p className={styles.reviewRating}>
                      <span>234 </span>of Reviews 
                      <img src={"../../../assets/images/rating-star-icon.png"} alt="" />
                      <span>( 4.5 / 5 )</span>
                    </p>
                    <p className={styles.coverCity}>
                      Covered Cities<br/>
                      <span>Torronto,</span> 
                      <span>Alberta,</span> 
                      <span>British Columbia</span>
                    </p>
                    <div className={styles.contactIcons}>
                      <p>Contact By</p>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/call-icon3.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/mail-icon3.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/chat-icon.png"} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.lennardPrt}>
                      <h3>Lennard:</h3>
                      <p>Lennard Commercial Realty, Brokerage</p>
                    </div>
                    <div className={styles.socialIcons}>
                      <p>Share on social media</p>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-facebook-icon.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-twitter-icon.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-instagram-icon.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-tiktok-icon.png"} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.seeFullProfile}>
                      <a href="#">
                        <img src={"../../../assets/images/video-camera-icon2.png"} alt="" />
                        <span>See full profile</span>
                      </a>
                    </div>
                    <div className={styles.shareIconsPrt}>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/like-icon3.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/user-icon2.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/share-icon2.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/heart-icon.png"} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


                <div className={styles.item}>
                  <div className={styles.brokersProfileItem}>
                    <div className={styles.brokersProfileStatus}>
                      <span className={styles.online}>Online</span>
                    </div>
                    <div className={styles.brokersProfilePic}>
                      <img src={"../../../assets/images/broker-profile-pic2.jpg"} alt="" />
                    </div>
                    <div className={styles.brokersProfileTitle}>
                      <h3>Valerie Schlosser</h3>
                      <h4>Real Estate Supervisor</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. </p>
                    </div>
                    <p className={styles.language}>
                      Spoken Language(s): <span>French,</span> <span>FrenchEnglish</span>
                    </p>
                    <p className={styles.reviewRating}>
                      <span>234 </span>of Reviews 
                      <img src={"../../../assets/images/rating-star-icon.png"} alt="" />
                      <span>( 4.5 / 5 )</span>
                    </p>
                    <p className={styles.coverCity}>
                      Covered Cities<br/>
                      <span>Torronto,</span> 
                      <span>Alberta,</span> 
                      <span>British Columbia</span>
                    </p>
                    <div className={styles.contactIcons}>
                      <p>Contact By</p>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/call-icon3.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/mail-icon3.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/chat-icon.png"} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.lennardPrt}>
                      <h3>Lennard:</h3>
                      <p>Lennard Commercial Realty, Brokerage</p>
                    </div>
                    <div className={styles.socialIcons}>
                      <p>Share on social media</p>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-facebook-icon.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-twitter-icon.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-instagram-icon.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-tiktok-icon.png"} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.seeFullProfile}>
                      <a href="#">
                        <img src={"../../../assets/images/video-camera-icon2.png"} alt="" />
                        <span>See full profile</span>
                      </a>
                    </div>
                    <div className={styles.shareIconsPrt}>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/like-icon3.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/user-icon2.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/share-icon2.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/heart-icon.png"} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


                <div className={styles.item}>
                  <div className={styles.brokersProfileItem}>
                    <div className={styles.brokersProfileStatus}>
                      <span className={styles.online}>Online</span>
                    </div>
                    <div className={styles.brokersProfilePic}>
                      <img src={"../../../assets/images/broker-profile-pic.jpg"} alt="" />
                    </div>
                    <div className={styles.brokersProfileTitle}>
                      <h3>Valerie Schlosser</h3>
                      <h4>Real Estate Supervisor</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. </p>
                    </div>
                    <p className={styles.language}>
                      Spoken Language(s): <span>French,</span> <span>FrenchEnglish</span>
                    </p>
                    <p className={styles.reviewRating}>
                      <span>234 </span>of Reviews 
                      <img src={"../../../assets/images/rating-star-icon.png"} alt="" />
                      <span>( 4.5 / 5 )</span>
                    </p>
                    <p className={styles.coverCity}>
                      Covered Cities<br/>
                      <span>Torronto,</span> 
                      <span>Alberta,</span> 
                      <span>British Columbia</span>
                    </p>
                    <div className={styles.contactIcons}>
                      <p>Contact By</p>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/call-icon3.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/mail-icon3.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/chat-icon.png"} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.lennardPrt}>
                      <h3>Lennard:</h3>
                      <p>Lennard Commercial Realty, Brokerage</p>
                    </div>
                    <div className={styles.socialIcons}>
                      <p>Share on social media</p>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-facebook-icon.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-twitter-icon.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-instagram-icon.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/banner-tiktok-icon.png"} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.seeFullProfile}>
                      <a href="#">
                        <img src={"../../../assets/images/video-camera-icon2.png"} alt="" />
                        <span>See full profile</span>
                      </a>
                    </div>
                    <div className={styles.shareIconsPrt}>
                      <ul>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/like-icon3.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/user-icon2.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/share-icon2.png"} alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={"../../../assets/images/heart-icon.png"} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </OwlCarousel> */}

              <a className={styles.orengeGlowBtn} href="#">Get pre-qualified</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cost