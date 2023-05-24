/* eslint-disable */
import styles from "./help.module.scss";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function index() {
    return (
        <div>
            <div className={styles.commonBsec}>
                <div className={styles.containerfluid}>
                    <div className={styles.titleSec}>
                        <h3>Showing <span className={styles.greyText}>05</span> of results out of <span>2564</span> total</h3>
                        <div className={styles.searchSect}>
                            <div className={styles.searchCol}>
                                <input placeholder="Search help topics by keyword" type="text" />
                            </div>
                            <div className={styles.selectCol}>
                                <select>
                                    <option selected value="1">Filter By</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {[1, 2, 3, 4, 5]?.map((item, i) => (
                        <div className={styles.helpsecBox}>
                            <div className={styles.helpNumber}>
                                0{i+1}
                            </div>
                            <div className={styles.helpsecCon}>
                                <p className={styles.subText}>Lorium Ipsum</p>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                                <p>Donec eu quam leo. Aenean elit dui, sollicitudin id malesuada tempor,
                                    ultricies eu tellus. Praesent lacinia velit eu libero sollicitudin laoreet.
                                    Sed posuere nibh augue, ut facilisis diam convallis eu. Vivamus vel gravida
                                    mauris. Fusce rutrum elementum ex, vel gravida diam suscipit vitae...</p>
                                <dt>Published on: 15 Dec, 2022</dt>
                            </div>
                        </div>

                    ))}

                    <div className={styles.pagignationSec}>
                        <ul>
                            <li><a className={styles.roundArrow} href="#"><ArrowBackIosNewOutlinedIcon /></a></li>
                            <li><a className={styles.active} href="#"> 1 </a></li>
                            <li><a href="#"> 2 </a></li>
                            <li><a href="#"> 3 </a></li>
                            <li><a href="#"> ... </a></li>
                            <li><a href="#"> 140 </a></li>
                            <li><a className={styles.roundArrow} href="#"><ArrowForwardIosOutlinedIcon /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default index;