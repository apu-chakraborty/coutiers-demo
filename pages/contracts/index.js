import { AppPromotion } from "@/components/common/appPromotion";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ContractsBody from "@/components/feature/contracts";

export default function index() {
    return(
        <>
        <Header />
        <ContractsBody />
        <AppPromotion />
        <Footer />
        </>
    )
}