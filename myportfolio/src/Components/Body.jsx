import HeroIntro from "./HeroIntro";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Body = () => {

    return(
        <div className="space-y-10">
          <HeroIntro/>
          <Skills/>
          <About/>
          <Projects/>
          <Contact/>
        </div>
    )
}

export default Body;