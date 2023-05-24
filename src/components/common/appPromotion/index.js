import styles from "./promotion.module.scss";

export function AppPromotion() {
    return (
        <div className={styles.appSec}>
        <div className={styles.containerfluid}>
            <div className={styles.flexCont}>
                <div>
                    <h3>Download the App for free</h3>
                    <p>Search wherever you are and find your dream home even more easily!</p>
                </div>
                <div className={styles.appLogo}>
                    <img alt="" src={"../../../assets/images/app-logo1.png"} /> <img alt="" src={"../../../assets/images/app-logo2.png"} />
                </div>
            </div>
        </div>
    </div>
    ) 
}