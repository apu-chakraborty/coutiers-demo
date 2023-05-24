import { AppPromotion } from "@/components/common/appPromotion";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import InnerHeader from "@/components/common/innerHeader";
import PrivacyPolicyBody from "@/components/feature/privacyPolicy";

export default function index() {
    return (
        <>
            <Header />
            <InnerHeader image="../../../assets/images/help-banner-img.png" title="Privacy Policy" />
            <PrivacyPolicyBody />
            <AppPromotion />
            <Footer />
        </>
    )
}