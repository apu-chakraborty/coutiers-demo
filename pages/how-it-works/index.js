import { AppPromotion } from "@/components/common/appPromotion";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import HowItWorksBody from "@/components/feature/howitworks";

export default function howItWorks() {
    return(
        <>
        <Header />
        <HowItWorksBody />
        <AppPromotion />
        <Footer />
        </>
    )
}