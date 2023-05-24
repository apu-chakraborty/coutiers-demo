import { AppPromotion } from "@/components/common/appPromotion";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ContactUsBody from "@/components/feature/contactUs";

export default function index() {
    return(
        <>
        <Header />
        <ContactUsBody />
        <AppPromotion />
        <Footer />
        </>
    )
}