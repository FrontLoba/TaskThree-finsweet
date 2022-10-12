import FAQ from "../Components/Pricing/FAQ";
import PlatformPlan from "../Components/Pricing/PlatformPlan";
import PriceHero from "../Components/Pricing/PriceHero";
import Footer from "../Components/Product/Footer";
import NavBar from "../Components/Product/NavBar";
import NearFooter from "../Components/Product/NearFooter";



function Pricing () {
    return (
        <div>
            <NavBar/>
            <PriceHero/>
            <PlatformPlan/>
            <FAQ />
            <NearFooter/>
            <Footer/>
        </div>
    );
}

export default Pricing;