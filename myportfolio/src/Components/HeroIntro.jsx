import {motion} from "framer-motion"

const HeroIntro = () =>  {

    return(
        <div className = "flex justify-center items-center h-screen text-center">
          <div>
          <motion.div 
             initial = {{opacity : 0, scale : 0}}
             animate ={{opacity : 1, scale : 1}}
             transition={{duration : 1, type : "spring", ease : "easeInOut"}}
             viewport={{once : true}}
             className="flex justify-center mb-5">
              <img
              src="https://github.com/kranthikumar300/profile-pic/blob/main/%E2%9C%A6_%20Nagi%20Seishiro.jpg?raw=true"
              alt="Example"
              className= "rounded-full w-2xs sm:w-xs"
              />
          </motion.div>

          <motion.h1
            initial = {{opacity : 0, translateY : -70}}
            animate = {{opacity : 1, translateY : 0}}
            transition={{duration : 0.4, ease : "easeInOut"}}
            className="text-3xl grid sm:text-4xl md:text-5xl py-2">Hey, <br /> I'm Kranthi <br /> Full Stack Developer
           </motion.h1>

            <motion.p
             initial = {{opacity : 0, translateX : -100}}
             animate = {{opacity : 1, translateX : 0}}
             transition={{duration : 0.6}}
             className="text-lg grid sm:text-xl md:text-xl py-4">"I build dynamic, responsive websites with React, Tailwind CSS, and JavaScript,<br />
              crafting seamless user experiences and scalable,<br />
              efficient web solutions."
            </motion.p>
          <div className="py-6 space-x-12">
            <a 
             className = "text-lg px-10 py-3 rounded-3xl transition-all shadow-lg shadow-gray-500 hover:shadow-none hover:scale-95"
             target="_blank"
             href="https://github.com/kranthikumar300">GitHub
            </a>
            <a 
             className = "text-lg border-2 px-10 py-3 rounded-3xl transition-all shadow-lg shadow-gray-500 hover:bg-[#70d170] hover:shadow-none hover:scale-95"
             target="_blank"
             href="https://www.upwork.com/freelancers/~0150099f2b2a22d228?mp_source=share">Hire me
            </a>
          </div>
          <div className="flex justify-center mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 cursor-pointer animate-bounce h-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
         </div>
        </div>
    )
}

export default HeroIntro