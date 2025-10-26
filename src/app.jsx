import NavBar from "./components/HeroModels/NavBar"
import LogoSection from "./components/LogoSection"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <ShowcaseSection/>
    {/*<LogoSection/>*/}
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
   {/* <Testimonials/>*/}
   <Contact/>
   <Footer/>
    </>
  )
}

export default App