import AboveTheFold from "../components/AboveTheFold/AboveTheFold";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import ProductsByBrand from "../components/Products/ProductsByBrand";

export default function Home() {
    return (
        <div className="Home">
            <Header />
            <AboveTheFold />
            <FeaturedProducts />
            <ProductsByBrand />
            <Footer />
        </div>
    )
}