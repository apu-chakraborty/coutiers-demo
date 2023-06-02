/* eslint-disable */
import React, { useEffect, useState } from "react";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});
const Reviews = dynamic(() => import('@/components/common/reviews'), {
    ssr: false,
});
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import styles from "./brokersprofile.module.scss";
import { AppPromotion } from "@/components/common/appPromotion";
import dynamic from "next/dynamic";

function BrokersProfileBody() {
  const tutorialVideoCrsl = {
    responsive: {
      0: {
          items: 1,
      },
      768: {
        items: 2,
      },
      992: {
          items: 3,
      },
      1261: {
          items: 4
      }
    },
  };
  return (
    <div>
    <div className={styles.fullWidthBanner}>
      <img className={styles.bannerImg} src={"../../../assets/images/broker-profile-banner-img.jpg"} alt="" />
      <div className={styles.bannerSocialIcon}>
        <div className={styles.containerfluid}>
          <ul>
            <li>
              <a href="#"><img src={"../../../assets/images/banner-facebook-icon.png"} alt="" /></a>
            </li>
            <li>
              <a href="#"><img src={"../../../assets/images/banner-twitter-icon.png"} alt="" /></a>
            </li>
            <li>
              <a href="#"><img src={"../../../assets/images/banner-instagram-icon.png"} alt="" /></a>
            </li>
            <li>
              <a href="#"><img src={"../../../assets/images/banner-tiktok-icon.png"} alt="" /></a>
            </li>
            <li>
              <a href="#"><img src={"../../../assets/images/banner-more-icon.png"} alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className={styles.brokerProfileSec}>
      <div className={styles.containerfluid}>
        <div className={styles.brokerProfileRow}>
          <div className={styles.brokerProfileLeftPrt}>
            <div className={styles.brokerProfilePic}>
              <img src={"../../../assets/images/broker-profile-pic.jpg"} alt="" />
            </div>
            <div className={styles.profileLeftPrtBtn}>
              <ul>
                <li><a className={styles.orengeBtnNoGlow} href="#">Write a Review</a></li>
                <li><a className={styles.profileBorderBtn} href="#">Work With me</a></li>
              </ul>
            </div>
            <div className={styles.profileLeftPrtIcon}>
              <ul>
                <li><a href="#">
                  <img src={"../../../assets/images/call-icon3.png"} alt="" />
                </a></li>
                <li><a href="#">
                  <img src={"../../../assets/images/mail-icon3.png"} alt="" />
                </a></li>
                <li><a href="#">
                  <img src={"../../../assets/images/chat-icon.png"} alt="" />
                </a></li>
              </ul>
            </div>
          </div>

          <div className={styles.brokerProfileMiddlePrt}>
            <div className={styles.profileRightNameRow}>
              <h1>Valerie Schlosser<span>Real Estate Supervisor</span></h1>
              <div className={styles.profileStatus}>
                <ul>
                  <li className={styles.online}>Online</li>
                </ul>
              </div>
              <div className={styles.questionAskBtn}>
                <a href="#">
                  <img src={"../../../assets/images/ask-question-btn.png"} alt="" />
                  <span>Ask a question</span>
                </a>
              </div>
            </div>
            <p className={styles.membership}>
              <img src={"../../../assets/images/membership-badge-bg.png"} alt="" />
              <span>Member Since 2023</span>
            </p>
            <p className={styles.brokerReview}>
              Reviews: <span>256</span> <img src={"../../../assets/images/rating-star-icon.png"} alt="" /> <span>( 4.5 / 5 )</span>
            </p>
            <div className={styles.brokerLang}>
              <h3>Spoken Language(s): </h3>
              <ul>
                <li>English: <span>Fluent</span></li>
                <li>French: <span>Native</span></li>
              </ul>
            </div>
            <div className={styles.brokerServCity}>
              <h3>Served Cities: </h3>
              <ul>
                <li>Ottawa,</li>
                <li>Toronto</li>
              </ul>
            </div>
            <div className={styles.brokerRightBottomRow}>
              <ul className={styles.saveListPrt}>
                <li>
                  <img src={"../../../assets/images/heart-icon.png"} alt="" /> <span>Save</span>
                </li>
                <li>
                  <img src={"../../../assets/images/refer-icon.png"} alt="" /> <span>Refer A Friend</span>
                </li>
                <li>
                  <img src={"../../../assets/images/report-account-icon.png"} alt="" /> <span>Report Account</span>
                </li>
              </ul>
              <div className={styles.brokerShareIcon}>
                <h3>Share Valerie’s <br/>Profile On Social Media</h3>
                <ul>
                  <li>
                    <a href="#"><img src={"../../../assets/images/banner-facebook-icon.png"} alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src={"../../../assets/images/banner-twitter-icon.png"} alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src={"../../../assets/images/banner-instagram-icon.png"} alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src={"../../../assets/images/banner-tiktok-icon.png"} alt="" /></a>
                  </li>
                  <li>
                    <a href="#"><img src={"../../../assets/images/banner-more-icon.png"} alt="" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.brokerProfileRightPrt}>
            <div className={styles.maxwellImg}>
              <img src={"../../../assets/images/max-well-img.png"} alt="" />
            </div>
            <div className={styles.maxwellText}>
              <h2>MaxWell Realty Canada</h2>
              <p>4107 99 St NW, Edmonton, AB , T6E 3N4 , <br/>1-415-555-8741</p>
              <h3><img src={"../../../assets/images/call-icon4.png"} alt="" />Office Phone: +1 415 5558741</h3>
              <h3><img src={"../../../assets/images/globe-icon.png"} alt="" />Website: www.maxwell.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.brokerAbout}>
      <div className={styles.containerfluid}>
        <div className={styles.brokerAboutHalfContainer}>
          <h2>About Valerie</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. In et suscipit libero, non molestie risus. Praesent in nunc et ligula molestie gravida rhoncus eget augue. Cras turpis libero, venenatis non nulla at, maximus vehicula est. Etiam sollicitudin sodales tellus, a interdum nisi lacinia id. Proin egestas volutpat dui nec auctor. Suspendisse non nibh imperdiet risus bibendum consequat sed vel leo. Phasellus sed tellus at mi facilisis efficitur. Nullam ac cursus urna. Aliquam vel nulla velit. Nulla et nisl massa. Aenean ultrices, magna vitae fermentum semper, risus ipsum vehicula justo, sollicitudin congue purus lacus eu ante. Fusce ligula odio, volutpat eget justo eget, fermentum malesuada nisi.</p>
          <div className={styles.aboutQuotePrt}>
            <p>Cras turpis libero, venenatis non nulla at, maximus vehicula est. Etiam sollicitudin sodales tellus, a interdum nisi</p>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.brokerVideoServiceSec}>
      <div className={styles.containerfluid}>
        <div className={styles.brokerVideoServiceHalfContainer}>
          <h2>Valerie's services</h2>
          <div className={styles.videoImgsec}>
            <img alt="" src={"../../../assets/images/broker-video-service.jpg"} />
            <div className={styles.overlay}>
              <img alt="" src={"../../../assets/images/play-icon.png"} />
            </div>
          </div>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor, ultricies eu tellus. Praesent lacinia velit eu libero sollicitudin laoreet.</p>
        </div>
      </div>
    </div>

    <div className={styles.brokerProfessionalInfo}>
      <div className={styles.containerfluid}>
        <h2>Valerie's Professional Information</h2>
        <div className={styles.brokerProfessionalInfoRow}>
          <div className={styles.brokerProfessionalInfoLeftClm}>
            <div className={styles.brokerProfessionalInfoTable}>
            {/* <table>
  <tr>
    <th>Title</th>
    <th>Details</th>
  </tr>
  <tr>
    <td>OACIQ License</td>
    <td>58745</td>
  </tr>
  <tr>
    <td>In Brokerage Since</td>
    <td>15 Feb, 2005</td>
  </tr>
  <tr>
    <td>Broker Type</td>
    <td>Residential</td>
  </tr>
  <tr>
    <td>Recommend Broker</td>
    <td>76%</td>
  </tr>
  <tr>
    <td>Accept Flat Brokerage Fee:</td>
    <td><img src="../../../assets/images/green-tick.png" alt="" /> Yes</td>
  </tr>
  <tr>
    <td>Specialties</td>
    <td>Single family, Condo, Townhouse, Multi-Family, Commercial, Industrial</td>
  </tr>
  <tr>
    <td>Accept Listing for 1% Commission</td>
    <td><img src="../../../assets/images/orenge-cross.png" alt="" /> No</td>
  </tr>
  <tr>
    <td>Accept to be "Rent" for Contract Filling</td>
    <td><img src="../../../assets/images/orenge-cross.png" alt="" /> No</td>
  </tr>
  <tr>
    <td>Price Range Specialty</td>
    <td>$1,800</td>
  </tr>
  <tr>
    <td>Skills</td>
    <td>
      <div class="brokerSkill">
        <ul>
          <li>Proactive</li>
          <li>Excellent Knowledge of the Market</li>
          <li>Technical</li>
          <li>Honesty</li>
          <li>Organized and Available</li>
          <li>Legal and Professional Knowledge</li>
          <li>Socially Skilled</li>
          <li>Success and Focused Attention</li>
          <li>Clarity and Transparency</li>
          <li>A Good Listener</li>
          <li>Support and Reassurance</li>
          <li>Loyalty</li>
        </ul>
      </div>
    </td>
  </tr>
</table> */}

            </div>
          </div>
          <div className={styles.brokerProfessionalInfoRightClm}>
            <img alt="" src={"../../../assets/images/pie-chart-img.jpg"} />
          </div>
        </div>
      </div>
    </div>

    
    <div className={styles.servicesSec}>
      <div className={styles.containerfluid}>
        <h2>Valerie's Services</h2>
        <div className={styles.serviceListPrt}>
          <ul>
            <li>
              <h3>Nulla et nisl massa</h3>
              <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor, ultricies eu tellus. Praesent lacinia velit eu libero sollicitudin.</p>
              <a className={styles.learnMore}>+ Learn more</a>
            </li>

            <li>
              <h3>Maximus vehicula est</h3>
              <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor, ultricies eu tellus. Praesent lacinia velit eu libero sollicitudin.</p>
              <a className={styles.learnMore}>+ Learn more</a>
            </li>

            <li>
              <h3>Nullam ac cursus urna</h3>
              <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor, ultricies eu tellus. Praesent lacinia velit eu libero sollicitudin.</p>
              <a className={styles.learnMore}>+ Learn more</a>
            </li>

            <li>
              <h3>Nulla et nisl massa</h3>
              <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor, ultricies eu tellus. Praesent lacinia velit eu libero sollicitudin.</p>
              <a className={styles.learnMore}>+ Learn more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div className={styles.tutorialVideoSec}>
      <div className={styles.containerfluid}>
        <h2>Valerie's tutorial videos</h2>
        {/* <OwlCarousel className="owl-theme tutorialVideoCarousel" items={4} loop margin={10} autoplay ={true} autoplayTimeout={5000} slideSpeed={300} smartSpeed={2500} nav={true} dots={false} responsiveClass={true} {...tutorialVideoCrsl}>
          <div className={styles.item}>
            <div className={styles.tutorialVideoItem}>
              <div className={styles.videoImgsec}>
                <img alt="" src={"../../../assets/images/tutorial-video1.jpg"} />
                <div className={styles.overlay}>
                  <img alt="" src={"../../../assets/images/play-icon.png"} />
                </div>
              </div>
              <h3>Nulla et nisl massa</h3>
              <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor</p>
            </div>
          </div>
          
          <div className={styles.item}>
            <div className={styles.tutorialVideoItem}>
              <div className={styles.videoImgsec}>
                <img alt="" src={"../../../assets/images/tutorial-video2.jpg"} />
                <div className={styles.overlay}>
                  <img alt="" src={"../../../assets/images/play-icon.png"} />
                </div>
              </div>
              <h3>Nulla et nisl massa</h3>
              <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.tutorialVideoItem}>
              <div className={styles.videoImgsec}>
                <img alt="" src={"../../../assets/images/tutorial-video3.jpg"} />
                <div className={styles.overlay}>
                  <img alt="" src={"../../../assets/images/play-icon.png"} />
                </div>
              </div>
              <h3>Nulla et nisl massa</h3>
              <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.tutorialVideoItem}>
              <div className={styles.videoImgsec}>
                <img alt="" src={"../../../assets/images/tutorial-video4.jpg"} />
                <div className={styles.overlay}>
                  <img alt="" src={"../../../assets/images/play-icon.png"} />
                </div>
              </div>
              <h3>Nulla et nisl massa</h3>
              <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.tutorialVideoItem}>
              <div className={styles.videoImgsec}>
                <img alt="" src={"../../../assets/images/tutorial-video3.jpg"} />
                <div className={styles.overlay}>
                  <img alt="" src={"../../../assets/images/play-icon.png"} />
                </div>
              </div>
              <h3>Nulla et nisl massa</h3>
              <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.tutorialVideoItem}>
              <div className={styles.videoImgsec}>
                <img alt="" src={"../../../assets/images/tutorial-video2.jpg"} />
                <div className={styles.overlay}>
                  <img alt="" src={"../../../assets/images/play-icon.png"} />
                </div>
              </div>
              <h3>Nulla et nisl massa</h3>
              <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor</p>
            </div>
          </div>
        </OwlCarousel> */}
      </div>
    </div>


    <Reviews />


    <div className={styles.activeListSec}>
      <div className={styles.containerfluid}>
        <h2>Featured broker’s active listings</h2>
        {/* <OwlCarousel className="owl-theme activeListCarousel" items={4} loop margin={15} autoplay ={true} autoplayTimeout={5000} slideSpeed={300} smartSpeed={2500} nav={true} dots={false} responsiveClass={true} {...tutorialVideoCrsl}>
          <div className={styles.item}>
            <div className={styles.activeListItem}>
              <div className={styles.activeListItemImg}>
                <img src={"../../../assets/images/active-list-item-img1.jpg"} alt="" />
                <div className={styles.activeListRibon}>Evaluation Appreciation</div>
              </div>
              <div className={styles.activeListItemText}>
                <img className={styles.activeListItemProfilePic} src={"../../../assets/images/active-list-item-profile-pic1.jpg"} alt="" />
                <h3>Valerie Schlosser</h3>
                <p>Real Estate Supervisor</p>
                <a className={styles.activeListItemMoreBtn} href="#">Claim Now</a>
              </div>
            </div>
          </div>
          
          <div className={styles.item}>
            <div className={styles.activeListItem}>
              <div className={styles.activeListItemImg}>
                <img src={"../../../assets/images/active-list-item-img2.jpg"} alt="" />
                <div className={styles.activeListRibon}>Evaluation Appreciation</div>
              </div>
              <div className={styles.activeListItemText}>
                <img className={styles.activeListItemProfilePic} src={"../../../assets/images/active-list-item-profile-pic2.jpg"} alt="" />
                <h3>Valerie Schlosser</h3>
                <p>Real Estate Supervisor</p>
                <a className={styles.activeListItemMoreBtn} href="#">Claim Now</a>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.activeListItem}>
              <div className={styles.activeListItemImg}>
                <img src={"../../../assets/images/active-list-item-img3.jpg"} alt="" />
                <div className={styles.activeListRibon}>Evaluation Appreciation</div>
              </div>
              <div className={styles.activeListItemText}>
                <img className={styles.activeListItemProfilePic} src={"../../../assets/images/active-list-item-profile-pic3.jpg"} alt="" />
                <h3>Valerie Schlosser</h3>
                <p>Real Estate Supervisor</p>
                <a className={styles.activeListItemMoreBtn} href="#">Claim Now</a>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.activeListItem}>
              <div className={styles.activeListItemImg}>
                <img src={"../../../assets/images/active-list-item-img4.jpg"} alt="" />
                <div className={styles.activeListRibon}>Evaluation Appreciation</div>
              </div>
              <div className={styles.activeListItemText}>
                <img className={styles.activeListItemProfilePic} src={"../../../assets/images/active-list-item-profile-pic4.jpg"} alt="" />
                <h3>Valerie Schlosser</h3>
                <p>Real Estate Supervisor</p>
                <a className={styles.activeListItemMoreBtn} href="#">Claim Now</a>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.activeListItem}>
              <div className={styles.activeListItemImg}>
                <img src={"../../../assets/images/active-list-item-img2.jpg"} alt="" />
                <div className={styles.activeListRibon}>Evaluation Appreciation</div>
              </div>
              <div className={styles.activeListItemText}>
                <img className={styles.activeListItemProfilePic} src={"../../../assets/images/active-list-item-profile-pic2.jpg"} alt="" />
                <h3>Valerie Schlosser</h3>
                <p>Real Estate Supervisor</p>
                <a className={styles.activeListItemMoreBtn} href="#">Claim Now</a>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.activeListItem}>
              <div className={styles.activeListItemImg}>
                <img src={"../../../assets/images/active-list-item-img3.jpg"} alt="" />
                <div className={styles.activeListRibon}>Evaluation Appreciation</div>
              </div>
              <div className={styles.activeListItemText}>
                <img className={styles.activeListItemProfilePic} src={"../../../assets/images/active-list-item-profile-pic3.jpg"} alt="" />
                <h3>Valerie Schlosser</h3>
                <p>Real Estate Supervisor</p>
                <a className={styles.activeListItemMoreBtn} href="#">Claim Now</a>
              </div>
            </div>
          </div>
        </OwlCarousel> */}
      </div>
    </div>
    

    <AppPromotion />

    
    </div>
    

    

     
  );
}

export default BrokersProfileBody;