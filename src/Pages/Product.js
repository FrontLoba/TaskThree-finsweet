import CoreValue from "../Components/Product/Core-Values";
import Features from "../Components/Product/Features";
import Footer from "../Components/Product/Footer";
import Hero from "../Components/Product/Hero";
import NavBar from "../Components/Product/NavBar";
import NearFooter from "../Components/Product/NearFooter";
import Services from "../Components/Product/Services";




function Product () {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <Services/>
            <CoreValue/>
            <Features/>
            <NearFooter/>
            <Footer/>
        </div>
    );
}

export default Product;