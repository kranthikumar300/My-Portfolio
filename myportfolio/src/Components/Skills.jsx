import {motion} from "framer-motion"

const Skills = () => {

    return(
       <div className="mt-10">
         <h1 className="flex justify-center text-3xl my-10 underline decoration-[#70d170] underline-offset-10">What I Can Do</h1>

        <div className="flex flex-wrap justify-center gap-10 mt-25 text-center">
         <motion.div 
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-2 border-[#70d170] w-[350px] h-[170px] cursor-pointer rounded-lg shadow-lg shadow-gray-500 p-4">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#70d170" className="size-20 py-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
           </svg>
            </div>
            <h2 className="font-bold">FrontEnd Development</h2>
            <p>JavaScript, React.js, Redux</p>
         </motion.div>
         
         <motion.div
         initial={{ opacity: 0, translateX: 100 }}
         whileInView={{ opacity: 1, translateX: 0 }}
         transition={{ duration: 0.3, ease: "easeOut" }}
         viewport={{ once: true }}
          className="border-2 border-[#70d170] w-[350px] h-[170px] cursor-pointer rounded-lg shadow-lg shadow-gray-500 p-4">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#70d170" className="size-20 py-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            </div>
            <h2 className="font-bold">BackEnd Development</h2>
            <p>Node.js, Express.js, MongoDB</p>
         </motion.div>

        </div>
        <div className="flex flex-wrap flex-col items-center py-20 space-y-20">
         <div className="flex flex-wrap justify-center gap-15">
               <img src="https://simpleicons.org/icons/htmx.svg" alt="HTML" className="h-14 w-14" />
               <img src="https://simpleicons.org/icons/tailwindcss.svg" alt="TailwindCSS" className="h-16 w-16" />
               <img src="https://simpleicons.org/icons/javascript.svg" alt="javaScript" className="h-16 w-16" />
               <img src="https://simpleicons.org/icons/react.svg" alt="react.js" className="h-16 w-16" />
               <img src="https://simpleicons.org/icons/redux.svg" alt="redux" className="h-16 w-16" />
         </div>
         <div className="flex gap-15">
               <img src="https://simpleicons.org/icons/nodedotjs.svg" alt="node.js" className="h-16 w-16" />
               <img src="https://simpleicons.org/icons/express.svg" alt="express.js" className="h-16 w-16" />
               <img src="https://simpleicons.org/icons/mongodb.svg" alt="MongoDB" className="h-16 w-16" />
         </div>
        </div>
        
       </div>
    )
}

export default Skills