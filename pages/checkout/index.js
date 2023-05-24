import { AppPromotion } from "@/components/common/appPromotion";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import CheckoutBody from "@/components/feature/checkout";

export default function help() {
    return(
        <>
        <Header />
        <CheckoutBody />
        <AppPromotion />
        <Footer />
        </>
    )
}