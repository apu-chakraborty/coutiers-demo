"use client"
"/* eslint-disable */"
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});
const Reviews = dynamic(() => import('@/components/common/reviews'), {
    ssr: false,
});
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from "./homeOwnerProfile.module.scss";

function HomeOwnerProfileBody() {
    const propertyCrsl = {
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1261: {
                items: 3,

            }
        },
    };
    return (
        <div>
            <div className={styles.fullWidthBanner}>
                <img className={styles.bannerImg} src={"../../../assets/images/home-owner-profile-banner-img.jpg"} alt="" />
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

            <div className={styles.ownerProfileSec}>
                <div className={styles.containerfluid}>
                    <div className={styles.ownerProfileRow}>
                        <div className={styles.ownerProfileLeftPrt}>
                            <div className={styles.ownerProfilePic}>
                                <img src={"../../../assets/images/owner-profile-pic.jpg"} alt="" />
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

                        <div className={styles.ownerProfileRightPrt}>
                            <div className={styles.profileRightNameRow}>
                                <h1>Marissa Higgins<span>Home Owner</span></h1>
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
                            <p className={styles.ownerReview}>
                                Reviews: <span>256</span> <img src={"../../../assets/images/rating-star-icon.png"} alt="" /> <span>( 4.5 / 5 )</span>
                            </p>
                            <div className={styles.ownerLang}>
                                <h3>Spoken Language(s): </h3>
                                <ul>
                                    <li>English: <span>Fluent</span></li>
                                    <li>French: <span>Native</span></li>
                                </ul>
                            </div>
                            <div className={styles.ownerServCity}>
                                <h3>Served Cities: </h3>
                                <ul>
                                    <li>Ottawa,</li>
                                    <li>Toronto</li>
                                </ul>
                            </div>
                            <div className={styles.ownerRightBottomRow}>
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
                                <div className={styles.ownerShareIcon}>
                                    <h3>Share Marrisa’s Profile On Social Media</h3>
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
                    </div>
                </div>
            </div>

            <div className={styles.homeOwnerAbout}>
                <div className={styles.containerfluid}>
                    <h2>About Marissa</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien enim. In et suscipit libero, non molestie risus. Praesent in nunc et ligula molestie gravida rhoncus eget augue. Cras turpis libero, venenatis non nulla at, maximus vehicula est. Etiam sollicitudin sodales tellus, a interdum nisi lacinia id. Proin egestas volutpat dui nec auctor. Suspendisse non nibh imperdiet risus bibendum consequat sed vel leo. Phasellus sed tellus at mi facilisis efficitur. Nullam ac cursus urna. Aliquam vel nulla velit. Nulla et nisl massa. Aenean ultrices, magna vitae fermentum semper, risus ipsum vehicula justo, sollicitudin congue purus lacus eu ante. Fusce ligula odio, volutpat eget justo eget, fermentum malesuada nisi.</p>
                    <div className={styles.aboutQuotePrt}>
                        <p>Cras turpis libero, venenatis non nulla at, maximus vehicula est. Etiam sollicitudin sodales tellus, a interdum nisi</p>
                    </div>
                </div>
            </div>

            <div className={styles.ownerPropertyCrslSec}>
                <div className={styles.containerfluid}>
                    <h2 className={styles.propertyCrslHdn}>Marissa's Properties</h2>
                    <OwlCarousel className="owl-theme ownerPropertyCarousel" items={3} loop margin={10} autoplay={false} autoplayTimeout={5000} slideSpeed={300} smartSpeed={2500} nav={true} dots={false} responsiveClass={true} {...propertyCrsl}>
                        <div className={styles.item}>
                            <div className={styles.ownerPrprtyItem}>
                                <img className={styles.prprtyItemImg} src={"../../../assets/images/owner-property-item-img1.jpg"} alt="" />
                                <ul className={styles.timeRow}>
                                    <li className={styles.forSale}>For Sale</li>
                                    <li className={styles.timeAgo}>25 min ago</li>
                                </ul>
                                <div className={styles.prprtyItemFourIcon}>
                                    <ul>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/camera-icon.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/video-camera-icon.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/heart-icon2.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/mail-icon4.png"} alt="" />
                                        </a></li>
                                    </ul>
                                </div>
                                <div className={styles.prprtyItemContentRow}>
                                    <div className={styles.prprtyItemContentLeftPrt}>
                                        <ul className={styles.mainPriceRow}>
                                            <li className={styles.mainPrice}>
                                                <h3><span>Family Home</span>$550,000</h3>
                                            </li>
                                            <li className={styles.prprtyQuality}>
                                                <img src={"../../../assets/images/green-down-arrow.png"} alt="" />
                                                <span className={styles.good}>Good</span>
                                            </li>
                                            <li className={styles.likeMsg}>
                                                <img src={"../../../assets/images/like-icon.png"} alt="" />
                                                <span>87</span>
                                            </li>
                                            <li className={styles.likeMsg}>
                                                <img src={"../../../assets/images/chat-icon2.png"} alt="" />
                                                <span>13</span>
                                            </li>
                                        </ul>
                                        <p className={styles.locationPrt}>
                                            <span>Ottawa</span>
                                            806-100 Champagne Avenue
                                        </p>
                                        <div className={styles.areaPriceList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/sqft-icon.png"} alt="" />
                                                    <span>2001</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/home-icon1.png"} alt="" />
                                                    <span>$1200</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/home-icon2.png"} alt="" />
                                                    <span>$900</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={styles.rentPriceList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/rent-icon1.png"} alt="" />
                                                    <span>$4500 / Year</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/rent-icon2.png"} alt="" />
                                                    <span>$450</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={styles.aminitiesList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon1.png"} alt="" />
                                                    <span>2+2</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon2.png"} alt="" />
                                                    <span>1+1</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon3.png"} alt="" />
                                                    <span>1254pi<sup>2</sup></span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon4.png"} alt="" />
                                                    <span>7500pi<sup>2</sup></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.prprtyItemContentRightPrt}>
                                        <ul>
                                            <li className={styles.lake}>
                                                <span>Lake Front</span>
                                            </li>
                                            <li className={styles.pool}>
                                                <span>Pool</span>
                                            </li>
                                            <li className={styles.garage}>
                                                <span>Garage</span>
                                            </li>
                                            <li className={styles.prprtyGlry}>
                                                <img src={"../../../assets/images/camera-icon.png"} alt="" />
                                                <span>12</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.ownerPrprtyItem}>
                                <img className={styles.prprtyItemImg} src={"../../../assets/images/owner-property-item-img1.jpg"} alt="" />
                                <ul className={styles.timeRow}>
                                    <li className={styles.forSale}>For Sale</li>
                                    <li className={styles.timeAgo}>25 min ago</li>
                                </ul>
                                <div className={styles.prprtyItemFourIcon}>
                                    <ul>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/camera-icon.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/video-camera-icon.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/heart-icon2.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/mail-icon4.png"} alt="" />
                                        </a></li>
                                    </ul>
                                </div>
                                <div className={styles.prprtyItemContentRow}>
                                    <div className={styles.prprtyItemContentLeftPrt}>
                                        <ul className={styles.mainPriceRow}>
                                            <li className={styles.mainPrice}>
                                                <h3><span>Family Home</span>$550,000</h3>
                                            </li>
                                            <li className={styles.prprtyQuality}>
                                                <img src={"../../../assets/images/green-down-arrow.png"} alt="" />
                                                <span className={styles.good}>Good</span>
                                            </li>
                                            <li className={styles.likeMsg}>
                                                <img src={"../../../assets/images/like-icon.png"} alt="" />
                                                <span>87</span>
                                            </li>
                                            <li className={styles.likeMsg}>
                                                <img src={"../../../assets/images/chat-icon2.png"} alt="" />
                                                <span>13</span>
                                            </li>
                                        </ul>
                                        <p className={styles.locationPrt}>
                                            <span>Ottawa</span>
                                            806-100 Champagne Avenue
                                        </p>
                                        <div className={styles.areaPriceList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/sqft-icon.png"} alt="" />
                                                    <span>2001</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/home-icon1.png"} alt="" />
                                                    <span>$1200</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/home-icon2.png"} alt="" />
                                                    <span>$900</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={styles.rentPriceList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/rent-icon1.png"} alt="" />
                                                    <span>$4500 / Year</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/rent-icon2.png"} alt="" />
                                                    <span>$450</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={styles.aminitiesList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon1.png"} alt="" />
                                                    <span>2+2</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon2.png"} alt="" />
                                                    <span>1+1</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon3.png"} alt="" />
                                                    <span>1254pi<sup>2</sup></span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon4.png"} alt="" />
                                                    <span>7500pi<sup>2</sup></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.prprtyItemContentRightPrt}>
                                        <ul>
                                            <li className={styles.lake}>
                                                <span>Lake Front</span>
                                            </li>
                                            <li className={styles.pool}>
                                                <span>Pool</span>
                                            </li>
                                            <li className={styles.garage}>
                                                <span>Garage</span>
                                            </li>
                                            <li className={styles.prprtyGlry}>
                                                <img src={"../../../assets/images/camera-icon.png"} alt="" />
                                                <span>12</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.ownerPrprtyItem}>
                                <img className={styles.prprtyItemImg} src={"../../../assets/images/owner-property-item-img1.jpg"} alt="" />
                                <ul className={styles.timeRow}>
                                    <li className={styles.forSale}>For Sale</li>
                                    <li className={styles.timeAgo}>25 min ago</li>
                                </ul>
                                <div className={styles.prprtyItemFourIcon}>
                                    <ul>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/camera-icon.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/video-camera-icon.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/heart-icon2.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/mail-icon4.png"} alt="" />
                                        </a></li>
                                    </ul>
                                </div>
                                <div className={styles.prprtyItemContentRow}>
                                    <div className={styles.prprtyItemContentLeftPrt}>
                                        <ul className={styles.mainPriceRow}>
                                            <li className={styles.mainPrice}>
                                                <h3><span>Family Home</span>$550,000</h3>
                                            </li>
                                            <li className={styles.prprtyQuality}>
                                                <img src={"../../../assets/images/green-down-arrow.png"} alt="" />
                                                <span className={styles.good}>Good</span>
                                            </li>
                                            <li className={styles.likeMsg}>
                                                <img src={"../../../assets/images/like-icon.png"} alt="" />
                                                <span>87</span>
                                            </li>
                                            <li className={styles.likeMsg}>
                                                <img src={"../../../assets/images/chat-icon2.png"} alt="" />
                                                <span>13</span>
                                            </li>
                                        </ul>
                                        <p className={styles.locationPrt}>
                                            <span>Ottawa</span>
                                            806-100 Champagne Avenue
                                        </p>
                                        <div className={styles.areaPriceList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/sqft-icon.png"} alt="" />
                                                    <span>2001</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/home-icon1.png"} alt="" />
                                                    <span>$1200</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/home-icon2.png"} alt="" />
                                                    <span>$900</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={styles.rentPriceList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/rent-icon1.png"} alt="" />
                                                    <span>$4500 / Year</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/rent-icon2.png"} alt="" />
                                                    <span>$450</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={styles.aminitiesList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon1.png"} alt="" />
                                                    <span>2+2</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon2.png"} alt="" />
                                                    <span>1+1</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon3.png"} alt="" />
                                                    <span>1254pi<sup>2</sup></span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon4.png"} alt="" />
                                                    <span>7500pi<sup>2</sup></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.prprtyItemContentRightPrt}>
                                        <ul>
                                            <li className={styles.lake}>
                                                <span>Lake Front</span>
                                            </li>
                                            <li className={styles.pool}>
                                                <span>Pool</span>
                                            </li>
                                            <li className={styles.garage}>
                                                <span>Garage</span>
                                            </li>
                                            <li className={styles.prprtyGlry}>
                                                <img src={"../../../assets/images/camera-icon.png"} alt="" />
                                                <span>12</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.ownerPrprtyItem}>
                                <img className={styles.prprtyItemImg} src={"../../../assets/images/owner-property-item-img1.jpg"} alt="" />
                                <ul className={styles.timeRow}>
                                    <li className={styles.forSale}>For Sale</li>
                                    <li className={styles.timeAgo}>25 min ago</li>
                                </ul>
                                <div className={styles.prprtyItemFourIcon}>
                                    <ul>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/camera-icon.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/video-camera-icon.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/heart-icon2.png"} alt="" />
                                        </a></li>
                                        <li><a href="#">
                                            <img src={"../../../assets/images/mail-icon4.png"} alt="" />
                                        </a></li>
                                    </ul>
                                </div>
                                <div className={styles.prprtyItemContentRow}>
                                    <div className={styles.prprtyItemContentLeftPrt}>
                                        <ul className={styles.mainPriceRow}>
                                            <li className={styles.mainPrice}>
                                                <h3><span>Family Home</span>$550,000</h3>
                                            </li>
                                            <li className={styles.prprtyQuality}>
                                                <img src={"../../../assets/images/green-down-arrow.png"} alt="" />
                                                <span className={styles.good}>Good</span>
                                            </li>
                                            <li className={styles.likeMsg}>
                                                <img src={"../../../assets/images/like-icon.png"} alt="" />
                                                <span>87</span>
                                            </li>
                                            <li className={styles.likeMsg}>
                                                <img src={"../../../assets/images/chat-icon2.png"} alt="" />
                                                <span>13</span>
                                            </li>
                                        </ul>
                                        <p className={styles.locationPrt}>
                                            <span>Ottawa</span>
                                            806-100 Champagne Avenue
                                        </p>
                                        <div className={styles.areaPriceList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/sqft-icon.png"} alt="" />
                                                    <span>2001</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/home-icon1.png"} alt="" />
                                                    <span>$1200</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/home-icon2.png"} alt="" />
                                                    <span>$900</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={styles.rentPriceList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/rent-icon1.png"} alt="" />
                                                    <span>$4500 / Year</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/rent-icon2.png"} alt="" />
                                                    <span>$450</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={styles.aminitiesList}>
                                            <ul>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon1.png"} alt="" />
                                                    <span>2+2</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon2.png"} alt="" />
                                                    <span>1+1</span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon3.png"} alt="" />
                                                    <span>1254pi<sup>2</sup></span>
                                                </li>
                                                <li>
                                                    <img src={"../../../assets/images/aminities-icon4.png"} alt="" />
                                                    <span>7500pi<sup>2</sup></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.prprtyItemContentRightPrt}>
                                        <ul>
                                            <li className={styles.lake}>
                                                <span>Lake Front</span>
                                            </li>
                                            <li className={styles.pool}>
                                                <span>Pool</span>
                                            </li>
                                            <li className={styles.garage}>
                                                <span>Garage</span>
                                            </li>
                                            <li className={styles.prprtyGlry}>
                                                <img src={"../../../assets/images/camera-icon.png"} alt="" />
                                                <span>12</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>
            </div>


            <Reviews />


        </div>





    );
}

export default HomeOwnerProfileBody;