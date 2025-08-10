import { Link } from "react-router-dom";
import {FaGithub, FaLinkedin,FaEnvelope} from "react-icons/fa"

export const Contact=()=>{
    return (
        <footer id="contact" className="bg-black text-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-400 mb-8">
                    I'm currently looking for new opportunities. Feel free to reach out!
                </p>
                <div className="flex justify-center items-center space-x-6 text-lg">
                    <a href="mailto:jayajha122006@gmail.com" className="flex hover:text-blue-300">
                        <FaEnvelope className="text-white text-3xl transition duration-300 hover:text-blue-300 pr-2" />jayajha122006@gmail.com
                    </a>
                    <span className="text-gray-500">|</span>
                    <p>+91 8178322487</p>
                    <span className="text-gray-500">|</span>
                    <Link to="https://github.com/jaya-jha12/" className="flex hover:text-blue-300 ">
                        <FaGithub className="text-white text-3xl transition duration-300 hover:text-blue-300 pr-2" />
                        Github
                    </Link>
                    <span className="text-gray-500">|</span>
                    <Link to="https://www.linkedin.com/in/jaya-jha-17a347370" className="flex hover:text-blue-300">
                        <FaLinkedin className="text-white text-3xl transition duration-300 hover:text-blue-300 pr-2" />
                        Linkedin
                    </Link>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-6">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Jaya Jha. All Rights Reserved.
                    </p>
                </div>
                    
                    
                
            </div>
        </footer>
    );

}