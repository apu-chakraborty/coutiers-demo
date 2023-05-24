/* eslint-disable */
import styles from "./home.module.scss";

function HeroSection() {
    return (
            <div className={styles.bannerSec}>
                <img alt="" src={"../../../assets/images/banner-img.jpg"} />
                <div className={styles.bannerCaption}>
                    <div className={styles.container}>
                        <div className={styles.bannerCaptionFlex}>
                            <h1>Search and Find <span>Your Dream Home</span></h1>
                            <ul>
                                <li className={styles.active}><a href="#">Buy</a></li>
                                <li><a href="#">Rent</a></li>
                                <li><a href="#">Brokers</a></li>
                                <li><a href="#">Professionals</a></li>
                                <li><a href="#"><img alt="" src={"../../../assets/images/mail-icon.png"} /></a></li>
                            </ul>

                            <div className={styles.tabContent}>
                                <div className={styles.addressSec}>
                                    <input className={styles.formContraol} placeholder="Search by city, neighborhood, address, centris..." type="text" />
                                </div>
                                <div className={styles.filterSec}>
                                    <div className={styles.selectSec}>
                                        <select className={styles.selectDrop}>
                                            <option value="1" selected>Type</option>
                                        </select>
                                    </div>
                                    <div className={styles.selectSec}>
                                        <select className={styles.selectDrop}>
                                            <option value="1" selected>Min $</option>
                                            <option value="1">100</option>
                                            <option value="1">200</option>
                                        </select>
                                    </div>

                                    <div className={styles.selectSec}>
                                        <select className={styles.selectDrop}>
                                            <option value="1" selected>Max $</option>
                                            <option value="1">500</option>
                                            <option value="1">1000</option>
                                        </select>
                                    </div>

                                    <div className={styles.filtSec}>
                                        <a href="#">Filter</a>
                                    </div>

                                </div>
                                <div className={styles.searchBtn}>
                                    <button><i className="fa fa-search"></i> Search</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
           
    );
}

export default HeroSection;