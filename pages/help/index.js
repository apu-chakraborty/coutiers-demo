import { AppPromotion } from "@/components/common/appPromotion";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import InnerHeader from "@/components/common/innerHeader";
import Help from "@/components/feature/help";

export default function help() {
    return(
        <>
        <Header />
        <InnerHeader image="../../../assets/images/help-banner-img.png" title="Help" />
        <Help />
        <AppPromotion />
        <Footer />
        </>
    )
}