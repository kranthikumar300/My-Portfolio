import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion"

const Contact = () => {

    const linkIcon = <FontAwesomeIcon icon={faLinkedin} 
                       style={{color: "#286ce2",}}
                       fontSize={50} />
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} 
                       style={{color: "#63E6BE",}}
                       fontSize={50} />

    return(
        <div className= "pt-10 space-y-10">
           <h1 className="flext justify-center text-center text-3xl underline decoration-[#70d170] underline-offset-10">Contact</h1>
           <motion.p
            initial = {{opacity : 0, translateY : -50}}
            whileInView={{opacity : 1, translateY : 0}}
            transition={{duration : 0.4, ease : "easeInOut"}}
            viewport={{once : true}}
            className="text-lg mt-15 text-center flex flex-wrap justify-center px-4">Feel free to connect with me through Gmail or LinkedIn <br />
           for collaboration opportunities, project discussions, <br />
           or freelance inquiries. I'm always open to connecting and bringing creative ideas to life!
           </motion.p>
           <motion.div
            initial = {{opacity : 0, scale : 0}}
            whileInView={{opacity : 1, scale :1}}
            transition={{duration : 0.4, type : "spring", ease : "easeInOut"}}
            viewport={{once : true}}
            className =  "flex flex-wrap justify-center text-center gap-20">
            <a href='https://www.linkedin.com/in/bingi-kranthi/' className='cursor-pointer transition-all hover:scale-95'>{linkIcon}</a>
            <a href="mailto:kranthikumar9.official@gmail.com" className='cursor-pointer transition-all hover:scale-95'>{mailIcon}</a>
           </motion.div>
           
        </div>
    )
}

export default Contact