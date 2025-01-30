import {motion} from "framer-motion"

const About = () => {

    return(
        <div className="min-h-screen overflow-hidden space-y-20 flex flex-wrap items-center justify-center">
            <div className="space-y-10">
                <h1 className="text-3xl flex justify-center underline decoration-[#70d170] underline-offset-10">Know Me</h1>
                <p 
                className="text-center">Hi, I'm Kranthi! <br />
                    I'm a passionate and enthusiastic full-stack web developer with a strong foundation in React, Tailwind CSS, and Vite. <br />
                    My journey in web development began with a fascination for building dynamic and responsive user experiences. <br />
                    Over time, I’ve mastered front-end technologies and expanded my skills to backend development with Python and Flask,<br />
                    allowing me to craft sleek, functional, and scalable web applications.
                </p>
            </div>
             <div className="flex justify-around gap-25 flex-wrap">
             <motion.div
              initial = {{opacity : 0, translateX : -50}}
              whileInView={{opacity : 1, translateX : 0}}
              transition={{duration : 0.3, ease : "easeInOut"}}
              viewport={{once : true}}
              className="space-y-10">
                <h1 className="text-3xl flex justify-center underline decoration-[#70d170] underline-offset-10">Education</h1>
                <p className="text-center">
                I hold a Bachelor's degree in <span className="font-bold">Computer Science and Engineering</span> <br />
                from Swarna Bharathi Institute of Science and Technology, Khammam, <br /> 
                and a <span className="font-bold"> Diploma in Civil Engineering</span> <br />
                from Khammam Institute of Science and Technology, Ponnekal.
                </p>
            </motion.div>
            <motion.div
             initial = {{opacity : 0, translateX : 50}}
             whileInView={{opacity : 1, translateX : 0}}
             transition={{duration : 0.3, ease : "easeInOut"}}
             viewport={{once : true}}
             className="space-y-10">
                <h1 className="text-3xl flex justify-center underline decoration-[#70d170] underline-offset-10">Cerifications</h1>
                <p className="text-center">
                I have earned certifications in <span className="font-bold">JavaScript, React.js, and Python</span>  <br /> 
                which have fueled my passion for building dynamic and <br />
                functional web applications.My expertise in both frontend and backend technologies <br /> 
                allows me to create responsive, user-friendly, and scalable digital solutions.
                </p>
            </motion.div>
             </div>
        </div>
    )
}

export default About