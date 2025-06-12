import Header from "../_components/Header";
import SliderRevolution from "../_components/SliderRevolution";


import Footer from "../_components/Footer";
import Section1 from "../_components/HomePage/Section1";
import Section10 from "../_components/HomePage/Section10";
import Section11 from "../_components/HomePage/Section11";
import Section2 from "../_components/HomePage/Section2";
import Section3 from "../_components/HomePage/Section3";
import Section4 from "../_components/HomePage/Section4";
import Section5 from "../_components/HomePage/Section5";
import Section6 from "../_components/HomePage/Section6";
import Section7 from "../_components/HomePage/Section7";
import Section8 from "../_components/HomePage/Section8";
import Section9 from "../_components/HomePage/Section9";


export default function HomePage() {
    return (
        <div className="site-container">
            <Header />
            <SliderRevolution />

            <div className="theme-page">
                <div className="clearfix">
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Section7 />
                    <Section8 />
                    <Section9 />
                    <Section10 />
                    <Section11 />
                </div>
            </div>

            <Footer />

        </div>
    );
}
