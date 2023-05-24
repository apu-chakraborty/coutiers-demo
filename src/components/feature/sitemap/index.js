/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./sitemap.module.scss";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import InnerHeader from "@/components/common/innerHeader";

function SitemapBody() {
  return (
    <div> 
      <InnerHeader image="../../../assets/images/help-banner-img.png" title="Sitemap" /> 

   
    <div className={styles.sitemapBsec}>
      <div className={styles.containerfluid}>
        <div className={styles.sitemapFlex}>

          <div className={styles.flexCol}>
            <h3>Buying</h3>
            <ul>
              <li><span></span> <a href="#">Lorem ipsum </a>
              <ul>
                <li><span></span> <a href="#">Purus</a></li>
              </ul>
              </li>
            </ul>
          </div>

          <div className={styles.flexCol}>
            <h3>Selling</h3>
            <ul>
              <li><span></span> <a href="#">Donec eu quam</a></li>
              <li><span></span> <a href="#">Curabitur ut tortor</a></li>
              <li><span></span> <a href="#">Elementum </a></li>
              <li><span></span> <a href="#">Convallis </a></li>              
            </ul>
          </div>

          <div className={styles.flexCol}>
            <h3>Brokers</h3>
            <ul>
              <li><span></span> <a href="#">Aenean ultrices</a>
              <ul>
                <li><span></span> <a href="#">Tristique faucibus</a></li>
                <li><span></span> <a href="#">Sed posuere</a></li>
              </ul>
              </li>
            </ul>
          </div>

          <div className={styles.flexCol}>
            <h3>Professonals</h3>
            <ul>
              <li><span></span> <a href="#">Morbi eu dui</a>
              <ul>
                <li><span></span> <a href="#">Arcu vehicula</a></li>                
              </ul>
              </li>
            </ul>
          </div>

          <div className={styles.flexCol}>
            <h3>How it Works</h3>
            <ul>
              <li><span></span> <a href="#">Imperdiet at lectus</a></li>
              <li><span></span> <a href="#">Porttitor</a></li>
              <li><span></span> <a href="#">Praesent </a></li>
              <li><span></span> <a href="#">Vestibulum </a></li>
            </ul>
          </div>

          <div className={styles.flexCol}>
            <h3>Mortgages</h3>
            <ul>
              <li><span></span> <a href="#">Lorem ipsum</a>
              <ul>
                <li><span></span> <a href="#">Lorem ipsum</a></li>                
              </ul>
              </li>              
            </ul>
          </div>

          <div className={styles.flexCol}>
            <h3>Advertise</h3>
            <ul>
              <li><span></span> <a href="#">Ultricies</a>
              <ul>
                <li><span></span> <a href="#">Sollicitudin</a></li>                
              </ul>
              </li>              
            </ul>
          </div>

          <div className={styles.flexCol}>
            <h3>Home Valuation</h3>
            <ul>
              <li><span></span> <a href="#">Porttitor </a></li> 
              <li><span></span> <a href="#">Eleifend </a></li> 
              <li><span></span> <a href="#">Mattis urna</a></li> 
              <li><span></span> <a href="#">Vestibulum</a></li>
            </ul>
          </div>

          <div className={styles.flexCol}>
            <h3>Notary</h3>
            <ul>
              <li><span></span> <a href="#">Quisque</a>
              <ul>
                <li><span></span> <a href="#">Suspendisse</a></li> 
                <li><span></span> <a href="#">Placerat volutpat</a></li>               
              </ul>
              </li>               
            </ul>
          </div>       


        </div>
      </div>
    </div>

    
    </div>
     
  );
}

export default SitemapBody;