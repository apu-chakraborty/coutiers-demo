/* eslint-disable */
import React, { useEffect, useState } from "react";
import Description from "./description";
import Cost from "./cost";
import Map from "./map";
import Buy from "./buy";
import SocialData from "./socialData";
// import OwlCarousel from 'react-owl-carousel'; 
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from "./propertydetails.module.scss";
import { AppPromotion } from "@/components/common/appPromotion";

function PropertyDetailsBody() {
  const propertyDtlsBannerCrsl = {
    responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 1,
      },
      1261: {
          items: 3,

      }
    },
  };

  const activeBrokersCrsl = {
    responsive: {
      0: {
          items: 1,
      },
      576: {
          items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1366: {
          items: 4,
      },
      1920: {
        items: 5,
      },
    },
  };
  const [type,setType]=useState("socialData")
  return (
    <div>
      <div className={styles.propertyDtlsHdr}>
        <div className={styles.containerfluid}>
          <div className={styles.propertyDtlsHdrRow}>
            <div className={styles.propertyDtlsHdrLeftPrt}>
              <h2>House of sale</h2>
              <p>806-100 Champagne Avenue, Ottawa, ON</p>
            </div>
            <div className={styles.propertyDtlsHdrRightPrt}>
              <ul>
                <li className={styles.hdrPropertyDtlsQualityPrice}>
                  <h2>
                    <span className={styles.good}>Good</span>
                    <img className={styles.greenUpArrowIcon} src={"../../../assets/images/green-up-arrow.png"} alt="" />
                    <strong className={styles.price}>$550,000</strong>
                  </h2>
                  <p>
                    <div className={styles.mutationTax}>
                      Mutation Tax: <span>$900</span>
                    </div>
                    <div className={styles.rentPerYear}>
                      <img src={"../../../assets/images/rent-icon3.png"} alt="" /> <span>$4500 / Year</span>
                    </div>  
                  </p>
                </li>
                <li className={styles.brokerProfilePrt}>
                  <div className={styles.brokerProfilePic}>
                    <img src={"../../../assets/images/broker-profile-pic2.jpg"} alt="" />
                  </div>
                  <div className={styles.brokerProfileText}>
                    <h2>Valerie Schlosser</h2>
                    <h3>Mortgage Broker</h3>
                    <a className={styles.orengeArrowLink} href="#">See full profile
                    <img src={"../../../assets/images/orenge-right-arrow.png"} alt="" /></a>
                  </div>
                </li>
                <li className={styles.emeraldRightPrt}>
                  <div className={styles.emeraldImg}>
                    <img src={"../../../assets/images/emerald-pic.jpg"} alt="" />
                  </div>
                  <div className={styles.emeraldSocialIcons}>
                    <a href="#"><img src={"../../../assets/images/call-icon3.png"} alt="" /></a>
                    <a href="#"><img src={"../../../assets/images/mail-icon3.png"} alt="" /></a>
                    <a href="#"><img src={"../../../assets/images/chat-icon.png"} alt="" /></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.propertyDtlsBannerSec}>
        <div className={styles.containerfluid}>
          <div className={styles.propertyDtlsBannerBox}>
            <div className={styles.propertyDtlsBannerSlide}>
            {/* <OwlCarousel className="owl-theme propertyDtlsBannerCrsl" loop margin={0} autoplay ={false} autoplayTimeout={5000} slideSpeed={300} smartSpeed={2500} nav={true} dots={false} center={true} responsiveClass={true} {...propertyDtlsBannerCrsl}>

            <div className={styles.item}>
              <div className={styles.propertyDtlsBannerImg}>
                <img src={"../../../assets/images/property-details-banner-item1.jpg"} alt="" />
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.propertyDtlsBannerImg}>
                <img src={"../../../assets/images/active-list-item-img1.jpg"} alt="" />
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.propertyDtlsBannerImg}>
                <img src={"../../../assets/images/active-list-item-img2.jpg"} alt="" />
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.propertyDtlsBannerImg}>
                <img src={"../../../assets/images/active-list-item-img3.jpg"} alt="" />
              </div>
            </div>

            </OwlCarousel> */}
            </div>
            <div className={styles.propertyDtlsBannerBtmInfo}>
              <div className={styles.propertyDtlsBannerBtmLeftPrt}>
                <ul>
                  <li>
                    <div className={styles.bnrGlryArrow}>
                      <a href="#"><img src={"../../../assets/images/crsl-left-arrow.png"} alt="" /></a>
                      <a href="#"><img src={"../../../assets/images/crsl-right-arrow.png"} alt="" /></a>
                      <p><span>1</span> / 17</p>
                    </div>
                  </li>
                  <li>
                    <img src={"../../../assets/images/camera-icon.png"} alt="" />
                    <span>12</span>
                  </li>
                  <li>
                    <img src={"../../../assets/images/video-camera-icon.png"} alt="" />
                    <span>12</span>
                  </li>
                  <li>
                    <img src={"../../../assets/images/like-icon.png"} alt="" />
                    <span>87</span> Votes
                  </li>
                  <li>
                    <img src={"../../../assets/images/chat-icon2.png"} alt="" />
                    <span>13</span>
                  </li>
                  <li>
                    <a className={styles.orengeArrowLink} href="#">See comments Or Q&A <img src={"../../../assets/images/orenge-right-arrow.png"} alt="" /></a>
                  </li>
                </ul>
              </div>

              <div className={styles.propertyDtlsBannerBtmRightPrt}>
                <ul>
                  <li>
                    <img className={styles.propertyDtlsBannerBtmRightProfilePic} src={"../../../assets/images/property-dtls-banner-btm-right-profile-pic.jpg"} alt="" />
                    Brokers: <span>Shane Wright, Mitch Gibson</span>
                  </li>
                  <li>
                    <img src={"../../../assets/images/image-large-icon.png"} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.activeBrokersCrslSec}>
        <div className={styles.containerfluid}>
          <div className={styles.activeBrokersCrslHdn}>
            <h2>Most active brokers</h2>
            <p className={styles.seeAllBrokerLink}>
              <a className={styles.orengeArrowLink} href="#">See all the broker’s profiles here 
                <img src="../../../assets/images/orenge-right-arrow.png" alt="" />
              </a>
            </p>
          </div>
          {/* <OwlCarousel className="owl-theme activeBrokersCrsl" loop margin={12} autoplay ={false} autoplayTimeout={5000} slideSpeed={300} smartSpeed={2500} nav={true} dots={false} responsiveClass={true} {...activeBrokersCrsl}>
            <div className={styles.item}>
              <div className={styles.activeBrokersCrslBox}>
                <div className={styles.activeBrokersCrslImg}>
                  <img src={"../../../assets/images/active-broker-img1.jpg"} alt="" />
                </div>
                <div className={styles.activeBrokersCrslText}>
                  <h3>Geoffrey Pement</h3>
                  <h4>Remax, Toronto</h4>
                  <p className={styles.activeBrokerReview}>
                    <img src={"../../../assets/images/rating-star-icon.png"} alt="" />
                    <span>( 4.5 / 5 ) ( 121 )</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.activeBrokersCrslBox}>
                <div className={styles.activeBrokersCrslImg}>
                  <img src={"../../../assets/images/active-broker-img2.jpg"} alt="" />
                </div>
                <div className={styles.activeBrokersCrslText}>
                  <h3>Geoffrey Pement</h3>
                  <h4>Remax, Toronto</h4>
                  <p className={styles.activeBrokerReview}>
                    <img src={"../../../assets/images/rating-star-icon.png"} alt="" />
                    <span>( 4.5 / 5 ) ( 121 )</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.activeBrokersCrslBox}>
                <div className={styles.activeBrokersCrslImg}>
                  <img src={"../../../assets/images/active-broker-img3.jpg"} alt="" />
                </div>
                <div className={styles.activeBrokersCrslText}>
                  <h3>Geoffrey Pement</h3>
                  <h4>Remax, Toronto</h4>
                  <p className={styles.activeBrokerReview}>
                    <img src={"../../../assets/images/rating-star-icon.png"} alt="" />
                    <span>( 4.5 / 5 ) ( 121 )</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.activeBrokersCrslBox}>
                <div className={styles.activeBrokersCrslImg}>
                  <img src={"../../../assets/images/active-broker-img4.jpg"} alt="" />
                </div>
                <div className={styles.activeBrokersCrslText}>
                  <h3>Geoffrey Pement</h3>
                  <h4>Remax, Toronto</h4>
                  <p className={styles.activeBrokerReview}>
                    <img src={"../../../assets/images/rating-star-icon.png"} alt="" />
                    <span>( 4.5 / 5 ) ( 121 )</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.activeBrokersCrslBox}>
                <div className={styles.activeBrokersCrslImg}>
                  <img src={"../../../assets/images/active-broker-img5.jpg"} alt="" />
                </div>
                <div className={styles.activeBrokersCrslText}>
                  <h3>Geoffrey Pement</h3>
                  <h4>Remax, Toronto</h4>
                  <p className={styles.activeBrokerReview}>
                    <img src={"../../../assets/images/rating-star-icon.png"} alt="" />
                    <span>( 4.5 / 5 ) ( 121 )</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.activeBrokersCrslBox}>
                <div className={styles.activeBrokersCrslImg}>
                  <img src={"../../../assets/images/active-broker-img2.jpg"} alt="" />
                </div>
                <div className={styles.activeBrokersCrslText}>
                  <h3>Geoffrey Pement</h3>
                  <h4>Remax, Toronto</h4>
                  <p className={styles.activeBrokerReview}>
                    <img src={"../../../assets/images/rating-star-icon.png"} alt="" />
                    <span>( 4.5 / 5 ) ( 121 )</span>
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel> */}
        </div>
      </div>



      <div className={styles.prprtyDtlBodySec}>
        <div className={styles.containerfluid}>
          <div className={styles.prprtyDtlBodyRow}>
            <div className={styles.prprtyDtlTabLeftPrt}>
              <ul className={styles.tabMenu}>
                <li><a className={styles.active} onClick={()=>setType("description")}>Description</a></li>
                <li><a onClick={()=>setType("cost")}>Costs</a></li>
                <li><a onClick={()=>setType("map")}>Map</a></li>
                <li><a onClick={()=>setType("buy")}>Buy</a></li>
                <li><a onClick={()=>setType("socialData")}>Social demographic data</a></li>
              </ul>
              {type==="description"? <Description/>:type==="cost"? <Cost/>:type==="map"? <Map/>:type==="buy"? <Buy/>:type==="socialData"? <SocialData/>:null}
            </div>
            <div className={styles.prprtyDtlBodyRightPrt}>
              <div className={styles.rightFloatingIcons}>
                <ul>
                  <li>
                    <a href="#">
                      <img src={"../../../assets/images/heart-icon2.png"} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={"../../../assets/images/mail-icon4.png"} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={"../../../assets/images/print-icon.png"} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={"../../../assets/images/share-icon3.png"} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={"../../../assets/images/question-icon.png"} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.propertyDtlsRightTopInfo}>
                <ul>
                  <li>
                    <span className={styles.icon}>
                      <img src={"../../../assets/images/call-icon3.png"} alt="" />
                    </span>
                    214-xxx-xxxx <span className={styles.showBtn}>Show</span>
                  </li>
                  <li>
                    <span className={styles.icon}>
                      <img src={"../../../assets/images/like-icon2.png"} alt="" />
                    </span>
                    Vote
                  </li>
                  <li>
                    <span className={styles.icon}>
                      <img src={"../../../assets/images/chat-icon.png"} alt="" />
                    </span>
                    Ask question / comment
                  </li>
                  <li>
                    <span className={styles.icon}>
                      <img src={"../../../assets/images/user-icon.png"} alt="" />
                    </span>
                    Request a tour
                  </li>
                  <li>
                    <span className={styles.icon}>
                      <img src={"../../../assets/images/usd-icon.png"} alt="" />
                    </span>
                    $ Get pre-qualified
                  </li>
                </ul>
              </div>

              <div className={styles.largeBrokersProfileSec}>
                <h2>Broker’s profiles</h2>
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

              <div className={styles.offerFromBrokerSec}>
                <img className={styles.getOfferBg} src={"../../../assets/images/get-offer-bg.jpg"} alt="" />
                <div className={styles.getOfferContent}>
                  <h2>Get Offers <span>from brokers to</span> Sell Your House</h2>
                  <a href="#">
                    <img src={"../../../assets/images/white-right-arrow.png"} alt="" />
                  </a>
                </div>
              </div>

              <div className={styles.smallBrokersProfileSec}>
                <ul>
                  <li className={styles.brokersProfileItem}>
                    <div className={styles.brokersProfileStatus}>
                      <span className={styles.online}>Online</span>
                    </div>
                    <div className={styles.brokersProfilePic}>
                      <img src={"../../../assets/images/active-list-item-profile-pic2.jpg"} alt="" />
                    </div>
                    <div className={styles.brokersProfileTitle}>
                      <h3>Mitch Gibson</h3>
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
                  </li>

                  <li className={styles.brokersProfileItem}>
                    <div className={styles.brokersProfileStatus}>
                      <span className={styles.online}>Online</span>
                    </div>
                    <div className={styles.brokersProfilePic}>
                      <img src={"../../../assets/images/broker-profile-pic2.jpg"} alt="" />
                    </div>
                    <div className={styles.brokersProfileTitle}>
                      <h3>Mitch Gibson</h3>
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      


      <AppPromotion />
    </div>
     
  );
}

export default PropertyDetailsBody;