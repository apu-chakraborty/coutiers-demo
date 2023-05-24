import { AppPromotion } from "@/components/common/appPromotion";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import SitemapBody from "@/components/feature/sitemap";

export default function index() {
    return(
        <>
        <Header />
        <SitemapBody />
        <AppPromotion />
        <Footer />
        </>
    )
}