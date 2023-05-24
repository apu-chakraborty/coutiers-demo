import React from 'react'
import styles from "./contracts.module.scss";
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';

export default function Documents() {
  return (
    <div>
        <div className={styles.docTitle}>
              <h5>Documents</h5>
              <a href="#">Upload Documents</a>
            </div>
            <ul>
              <li>
                <img className={styles.pdfIcon} alt="" src={"../../../assets/images/pdf-icon.png"} />
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse nec sapien enim. </p>
                <a href="#"> Download <SaveAltOutlinedIcon/></a>
                <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon/></p></div>
              </li>

              <li>
                <img className={styles.pdfIcon} alt="" src={"../../../assets/images/doc-icon.png"} />
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse nec sapien enim. </p>
                <a href="#"> Download <SaveAltOutlinedIcon/></a>
                <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon/></p></div>
              </li>

              <li>
                <img className={styles.pdfIcon} alt="" src={"../../../assets/images/pdf-icon.png"} />
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse nec sapien enim. </p>
                <a href="#"> Download <SaveAltOutlinedIcon/></a>
                <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon/></p></div>
              </li>

              <li>
                <img className={styles.pdfIcon} alt="" src={"../../../assets/images/doc-icon.png"} />
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse nec sapien enim. </p>
                <a href="#"> Download <SaveAltOutlinedIcon/></a>
                <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon/></p></div>
              </li>

              <li>
                <img className={styles.pdfIcon} alt="" src={"../../../assets/images/pdf-icon.png"} />
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse nec sapien enim. </p>
                <a href="#"> Download <SaveAltOutlinedIcon/></a>
                <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon/></p></div>
              </li>

              <li>
                <img className={styles.pdfIcon} alt="" src={"../../../assets/images/doc-icon.png"} />
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse nec sapien enim. </p>
                <a href="#"> Download <SaveAltOutlinedIcon/></a>
                <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon/></p></div>
              </li>

              <li>
                <img className={styles.pdfIcon} alt="" src={"../../../assets/images/pdf-icon.png"} />
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse nec sapien enim. </p>
                <a href="#"> Download <SaveAltOutlinedIcon/></a>
                <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon/></p></div>
              </li>

              <li>
                <img className={styles.pdfIcon} alt="" src={"../../../assets/images/doc-icon.png"} />
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse nec sapien enim. </p>
                <a href="#"> Download <SaveAltOutlinedIcon/></a>
                <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon/></p></div>
              </li>

              <li>
                <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img.png"} /></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse nec sapien enim. </p>
                <a href="#"> Download <SaveAltOutlinedIcon/></a>
                <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon/></p></div>
              </li>

              <li>
                <div className={styles.userIcon}><img alt="" src={"../../../assets/images/user-img.png"} /></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse nec sapien enim. </p>
                <a href="#"> Download <SaveAltOutlinedIcon/></a>
                <div><p className={styles.videoText}>See tutorial video <SlowMotionVideoOutlinedIcon/></p></div>
              </li>

            </ul>
    </div>
  )
}
