import { AppPromotion } from "@/components/common/appPromotion";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import OrderconfirmationBody from "@/components/feature/order-confirmation";

export default function index() {
    return(
        <>
        <Header />
        <OrderconfirmationBody />
        <AppPromotion />
        <Footer />
        </>
    )
}