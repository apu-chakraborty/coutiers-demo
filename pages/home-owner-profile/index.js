import { AppPromotion } from "@/components/common/appPromotion";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import HomeOwnerProfileBody from "@/components/feature/home-owner-profile";

export default function index() {
    return(
        <>
        <Header />
        <HomeOwnerProfileBody />
        <AppPromotion />
        <Footer />
        </>
    )
}