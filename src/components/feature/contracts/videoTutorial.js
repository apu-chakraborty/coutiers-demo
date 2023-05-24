import React from 'react'
import styles from "./contracts.module.scss";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';

export default function VideoTutorial() {
    return (
        <div>
            <div className={`${styles.docTitle} ${styles.margin30}`}>
                <h5>Video Tutorials</h5>
                <a href="#">Upload Videos</a>
            </div>

            <div className={styles.videoBoxSec}>
                <ul>
                    <li>
                        <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img.png"} /></div>
                        <h3>Valerie Schlosser</h3>
                        <div className={styles.rateSec}>
                            <ul>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarHalfOutlinedIcon /></li>
                            </ul>
                            <p>( 4.5 / 5 )</p>
                        </div>
                        <div className={styles.commentSec}>
                            <p><font>12</font> Years <span>Experience</span></p>
                            <p><font>234</font> <span>Views</span></p>
                            <p><font>23</font> <span>Comments</span></p>
                        </div>
                        <div className={styles.likeSec}>
                            <a href="#"><i class="fa fa-thumbs-o-up"></i> 15</a>
                            <a href="#"><i class="fa fa-thumbs-o-down"></i> 2</a>
                        </div>
                        <a href="#"> Download <SaveAltOutlinedIcon /></a>
                        <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon /></p></div>
                    </li>

                    <li>
                        <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img2.png"} /></div>
                        <h3>William Owens</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse nec sapien enim. </p>
                        <a href="#"> Download <SaveAltOutlinedIcon /></a>
                        <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon /></p></div>
                    </li>

                    <li>
                        <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img3.png"} /></div>
                        <h3>Daisy Arnold</h3>
                        <div className={styles.rateSec}>
                            <ul>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarHalfOutlinedIcon /></li>
                            </ul>
                            <p>( 4.5 / 5 )</p>
                        </div>
                        <div className={styles.commentSec}>
                            <p><font>12</font> Years <span>Experience</span></p>
                            <p><font>234</font> <span>Views</span></p>
                            <p><font>23</font> <span>Comments</span></p>
                        </div>
                        <div className={styles.likeSec}>
                            <a href="#"><i class="fa fa-thumbs-o-up"></i> 15</a>
                            <a href="#"><i class="fa fa-thumbs-o-down"></i> 2</a>
                        </div>
                        <a href="#"> Download <SaveAltOutlinedIcon /></a>
                        <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon /></p></div>
                    </li>

                    <li>
                        <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img4.png"} /></div>
                        <h3>Mitch Gibson</h3>
                        <div className={styles.rateSec}>
                            <ul>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarHalfOutlinedIcon /></li>
                            </ul>
                            <p>( 4.5 / 5 )</p>
                        </div>
                        <div className={styles.commentSec}>
                            <p><font>12</font> Years <span>Experience</span></p>
                            <p><font>234</font> <span>Views</span></p>
                            <p><font>23</font> <span>Comments</span></p>
                        </div>
                        <div className={styles.likeSec}>
                            <a href="#"><i class="fa fa-thumbs-o-up"></i> 15</a>
                            <a href="#"><i class="fa fa-thumbs-o-down"></i> 2</a>
                        </div>
                        <a href="#"> Download <SaveAltOutlinedIcon /></a>
                        <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon /></p></div>
                    </li>

                    <li>
                        <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img5.png"} /></div>
                        <h3>Dustin Lakin</h3>
                        <div className={styles.rateSec}>
                            <ul>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarHalfOutlinedIcon /></li>
                            </ul>
                            <p>( 4.5 / 5 )</p>
                        </div>
                        <div className={styles.commentSec}>
                            <p><font>12</font> Years <span>Experience</span></p>
                            <p><font>234</font> <span>Views</span></p>
                            <p><font>23</font> <span>Comments</span></p>
                        </div>
                        <div className={styles.likeSec}>
                            <a href="#"><i class="fa fa-thumbs-o-up"></i> 15</a>
                            <a href="#"><i class="fa fa-thumbs-o-down"></i> 2</a>
                        </div>
                        <a href="#"> Download <SaveAltOutlinedIcon /></a>
                        <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon /></p></div>
                    </li>

                    <li>
                        <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img6.png"} /></div>
                        <h3>Geoffrey Pement</h3>
                        <div className={styles.rateSec}>
                            <ul>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarHalfOutlinedIcon /></li>
                            </ul>
                            <p>( 4.5 / 5 )</p>
                        </div>
                        <div className={styles.commentSec}>
                            <p><font>12</font> Years <span>Experience</span></p>
                            <p><font>234</font> <span>Views</span></p>
                            <p><font>23</font> <span>Comments</span></p>
                        </div>
                        <div className={styles.likeSec}>
                            <a href="#"><i class="fa fa-thumbs-o-up"></i> 15</a>
                            <a href="#"><i class="fa fa-thumbs-o-down"></i> 2</a>
                        </div>
                        <a href="#"> Download <SaveAltOutlinedIcon /></a>
                        <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon /></p></div>
                    </li>

                    <li>
                        <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img7.png"} /></div>
                        <h3>David Williams</h3>
                        <div className={styles.rateSec}>
                            <ul>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarHalfOutlinedIcon /></li>
                            </ul>
                            <p>( 4.5 / 5 )</p>
                        </div>
                        <div className={styles.commentSec}>
                            <p><font>12</font> Years <span>Experience</span></p>
                            <p><font>234</font> <span>Views</span></p>
                            <p><font>23</font> <span>Comments</span></p>
                        </div>
                        <div className={styles.likeSec}>
                            <a href="#"><i class="fa fa-thumbs-o-up"></i> 15</a>
                            <a href="#"><i class="fa fa-thumbs-o-down"></i> 2</a>
                        </div>
                        <a href="#"> Download <SaveAltOutlinedIcon /></a>
                        <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon /></p></div>
                    </li>

                    <li>
                        <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img8.png"} /></div>
                        <h3>Joe Mortallaro</h3>
                        <div className={styles.rateSec}>
                            <ul>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarHalfOutlinedIcon /></li>
                            </ul>
                            <p>( 4.5 / 5 )</p>
                        </div>
                        <div className={styles.commentSec}>
                            <p><font>12</font> Years <span>Experience</span></p>
                            <p><font>234</font> <span>Views</span></p>
                            <p><font>23</font> <span>Comments</span></p>
                        </div>
                        <div className={styles.likeSec}>
                            <a href="#"><i class="fa fa-thumbs-o-up"></i> 15</a>
                            <a href="#"><i class="fa fa-thumbs-o-down"></i> 2</a>
                        </div>
                        <a href="#"> Download <SaveAltOutlinedIcon /></a>
                        <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon /></p></div>
                    </li>

                    <li>
                        <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img9.png"} /></div>
                        <h3>Damon Miller</h3>
                        <div className={styles.rateSec}>
                            <ul>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarHalfOutlinedIcon /></li>
                            </ul>
                            <p>( 4.5 / 5 )</p>
                        </div>
                        <div className={styles.commentSec}>
                            <p><font>12</font> Years <span>Experience</span></p>
                            <p><font>234</font> <span>Views</span></p>
                            <p><font>23</font> <span>Comments</span></p>
                        </div>
                        <div className={styles.likeSec}>
                            <a href="#"><i class="fa fa-thumbs-o-up"></i> 15</a>
                            <a href="#"><i class="fa fa-thumbs-o-down"></i> 2</a>
                        </div>
                        <a href="#"> Download <SaveAltOutlinedIcon /></a>
                        <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon /></p></div>
                    </li>

                    <li>
                        <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img10.png"} /></div>
                        <h3>Katarina Marjanovic</h3>
                        <div className={styles.rateSec}>
                            <ul>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarOutlinedIcon /></li>
                                <li><StarHalfOutlinedIcon /></li>
                            </ul>
                            <p>( 4.5 / 5 )</p>
                        </div>
                        <div className={styles.commentSec}>
                            <p><font>12</font> Years <span>Experience</span></p>
                            <p><font>234</font> <span>Views</span></p>
                            <p><font>23</font> <span>Comments</span></p>
                        </div>
                        <div className={styles.likeSec}>
                            <a href="#"><i class="fa fa-thumbs-o-up"></i> 15</a>
                            <a href="#"><i class="fa fa-thumbs-o-down"></i> 2</a>
                        </div>
                        <a href="#"> Download <SaveAltOutlinedIcon /></a>
                        <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon /></p></div>
                    </li>

                </ul>
            </div>
        </div>
    )
}
