/* eslint-disable */
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from "./reviews.module.scss";

export default function Reviews() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing during server-side rendering
  }

  const options = {
    items: 1,
    loop:true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000,
    slideSpeed: 300,
    smartSpeed: 2500,
    nav: true,
    dots: false,
    responsiveClass: true
  }

  return (
    <div>
      <div className={styles.reviewSec}>
        <div className={styles.containerfluid}>
          <h2>Reviews <span>8</span></h2>

          <OwlCarousel className="owl-theme reviewCarousel" {...options}>
            <div className={styles.item}>
              <div className={styles.reviewBox}>
                <div className={styles.reviewContentRow}>
                  <div className={styles.reviewContentLeftImg}>
                    <img src={"../../../assets/images/review-content-left-img.jpg"} alt="" />
                    <div className={styles.soldOut}>
                      <span>sold out</span>
                    </div>
                  </div>
                  <div className={styles.reviewMiddleTextContent}>
                    <div className={styles.middleContentLeftImg}>
                      <img src={"../../../assets/images/middle-content-left-img.jpg"} alt="" />
                    </div>
                    <div className={styles.middleContentRightText}>
                      <h3>Paul Baumgardner <span>The user agreed to display his name</span></h3>
                      <p>
                        Reviews: <span>256</span> <img src={"../../../assets/images/rating-star-icon.png"} alt="" /> <span>( 4.5 / 5 )</span>
                      </p>
                      <p>Posted on: <span>12 Jan, 2023</span></p>
                      <p>City: <span>Ottawa</span></p>
                      <p>Property price range: <span>$1,500 - $2,500</span></p>
                      <p>Request Admin Analysis for <u>non-constructive reviews</u></p>
                    </div>
                    <div className={styles.reviewText}>
                      <h3>William Owens helped us to Buy a home on Januray, 2022</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. In et suscipit libero, non molestie risus.</p>
                    </div>
                    <div className={styles.reviewQuestionAnswer}>
                      <h3>Q. Etiam sollicitudin sodales tellus, a interdum nisi lacinia id.</h3>
                      <p>A. Aenean elit dui, sollicitudin id malesuada tempor, ultricies eu tellus. Praesent lacinia velit eu libero</p>
                    </div>
                    <div className={styles.reviewMiddleBottomPrt}>
                      <ul>
                        <li className={styles.readMore}>
                          <a href="#">+ Read more</a>
                        </li>
                        <li className={styles.share}>
                          <a href="#"><img src={"../../../assets/images/share-icon.png"} alt="" /> Share</a>
                        </li>
                        <li className={styles.socialIcon}>
                          <span>Promote on <br />social media</span>
                          <a href="#"><img src={"../../../assets/images/banner-facebook-icon.png"} alt="" /></a>
                          <a href="#"><img src={"../../../assets/images/banner-twitter-icon.png"} alt="" /></a>
                          <a href="#"><img src={"../../../assets/images/banner-instagram-icon.png"} alt="" /></a>
                          <a href="#"><img src={"../../../assets/images/banner-tiktok-icon.png"} alt="" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.reviewContentRightPieChart}>
                    <img src={"../../../assets/images/pie-chart-img.jpg"} alt="" />
                    <img className={styles.contentLogo} src={"../../../assets/images/content-logo.png"} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.reviewBox}>
                <div className={styles.reviewContentRow}>
                  <div className={styles.reviewContentLeftImg}>
                    <img src={"../../../assets/images/review-content-left-img.jpg"} alt="" />
                    <div className={styles.soldOut}>
                      <span>sold out</span>
                    </div>
                  </div>
                  <div className={styles.reviewMiddleTextContent}>
                    <div className={styles.middleContentLeftImg}>
                      <img src={"../../../assets/images/middle-content-left-img.jpg"} alt="" />
                    </div>
                    <div className={styles.middleContentRightText}>
                      <h3>Paul Baumgardner <span>The user agreed to display his name</span></h3>
                      <p>
                        Reviews: <span>256</span> <img src={"../../../assets/images/rating-star-icon.png"} alt="" /> <span>( 4.5 / 5 )</span>
                      </p>
                      <p>Posted on: <span>12 Jan, 2023</span></p>
                      <p>City: <span>Ottawa</span></p>
                      <p>Property price range: <span>$1,500 - $2,500</span></p>
                      <p>Request Admin Analysis for <u>non-constructive reviews</u></p>
                    </div>
                    <div className={styles.reviewText}>
                      <h3>William Owens helped us to Buy a home on Januray, 2022</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. In et suscipit libero, non molestie risus.</p>
                    </div>
                    <div className={styles.reviewQuestionAnswer}>
                      <h3>Q. Etiam sollicitudin sodales tellus, a interdum nisi lacinia id.</h3>
                      <p>A. Aenean elit dui, sollicitudin id malesuada tempor, ultricies eu tellus. Praesent lacinia velit eu libero</p>
                    </div>
                    <div className={styles.reviewMiddleBottomPrt}>
                      <ul>
                        <li className={styles.readMore}>
                          <a href="#">+ Read more</a>
                        </li>
                        <li className={styles.share}>
                          <a href="#"><img src={"../../../assets/images/share-icon.png"} alt="" /> Share</a>
                        </li>
                        <li className={styles.socialIcon}>
                          <span>Promote on <br />social media</span>
                          <a href="#"><img src={"../../../assets/images/banner-facebook-icon.png"} alt="" /></a>
                          <a href="#"><img src={"../../../assets/images/banner-twitter-icon.png"} alt="" /></a>
                          <a href="#"><img src={"../../../assets/images/banner-instagram-icon.png"} alt="" /></a>
                          <a href="#"><img src={"../../../assets/images/banner-tiktok-icon.png"} alt="" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.reviewContentRightPieChart}>
                    <img src={"../../../assets/images/pie-chart-img.jpg"} alt="" />
                    <img className={styles.contentLogo} src={"../../../assets/images/content-logo.png"} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>

          <div className={styles.textCenter}>
            <a className={styles.orengeBtnNoGlow} href="#">Write a Review</a>
          </div>
        </div>
      </div>
    </div>

  );
}