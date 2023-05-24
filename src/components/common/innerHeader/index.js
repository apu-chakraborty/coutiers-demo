import styles from "./innerHeader.module.scss"
export default function InnerHeader({image, title}) {
    return(
        <div className={styles.bannerTypeOne}>
        <div className={styles.innerBannerOne}>
          <img alt="" src={image} />
        </div>
        <div className={styles.breadCrumbTypeOne}>
          <div className={styles.innerBreadCrumbOne}>
          <p>Home   \   <a href="#">{title}</a></p>
            <h1>{title}</h1>
          </div>
        </div>      
      </div>  
    )
}