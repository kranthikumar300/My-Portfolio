import HeroIntro from "./HeroIntro";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Body = () => {

    return(
        <div className="space-y-10 overflow-x-hidden">
          <HeroIntro/>
          <Skills/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
    )
}

export default Body;