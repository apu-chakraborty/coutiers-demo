/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import { PossibleOptions } from "./possibleOptions";
import HeroSection from "./heroSection";
import { AppPromotion } from "@/components/common/appPromotion";

function HomeBody() {
    return (
        <div>
            <HeroSection />
            <PossibleOptions />
            <AppPromotion />
            <div className={styles.leftCustomerServiceIcon}>
                <a className={styles.text} href="#">Customer service face</a>
            </div>
            <div className={styles.leftScheduleCallIcon}>
                <a className={styles.text} href="#"><img alt="" src={"../../../assets/images/call-icon.png"} /> Schedule Call</a>
            </div>
        </div>
    );
}

export default HomeBody;