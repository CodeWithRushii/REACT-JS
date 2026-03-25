import About from "./About";
import Featured from "./FeaturedCourses";
import Hero from "./Hero";
import Navbar from "./navbar";
import Why from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
import Explore from "./ExploreCTA";
import Footer from "./Footer";

function app() {
  return <>
    <Navbar />
    <Hero />
    <About />
    <Featured />
    <Why></Why>
    <HowItWorks />
    <Explore />
    <Footer />
  </>
}

export default app;