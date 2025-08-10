import { Button } from '../components/Button'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";


export const Home=()=>{
    const handleViewProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/_Resume.pdf";
        link.download = "My_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <div className="py-25 bg-[url('./public/bg3.png')] bg-cover bg-center justify-center items-center text-center flex flex-col  h-screen">
        <h1 className="text-7xl font-bold text-white">
            Hi,I'm {""}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-400 to-purple-500 font-bold text-7xl">Jaya Jha</span>
        </h1>
        <h2 className="text-blue-200 py-3 text-4xl">
            Aspiring Software Developer &nbsp;|&nbsp; AIML Enthusiast
        </h2>
        <p className="text-gray-400 max-w-2xl mb-12 text-lg" >
        Passionate about building intelligent systems and creating seamless digital experiences.
        Currently pursuing B.Tech at Netaji Subhas University Of Technology.
        </p>
        <div className="flex gap-4 ">
            <Button title={"View Projects"} onClick={handleViewProjects} />
            <Button title={"Download Resume"} onClick={handleDownloadResume}  />
        </div>
        <div className="flex gap-8 py-6 justify-around">
            <Link to="https://github.com/jaya-jha12/" className="">
                <FaGithub className="text-white text-3xl transition duration-300 hover:text-blue-300" />
            </Link>
            <Link to="https://www.linkedin.com/in/jaya-jha-17a347370" className="">
                <FaLinkedin className="text-white text-3xl transition duration-300 hover:text-blue-300" />
            </Link>
            <a href="mailto:jayajha122006@gmail.com" className="">
                <FaEnvelope className="text-white text-3xl transition duration-300 hover:text-blue-300" />
            </a>
        </div>
        <div className="flex justify-center mt-6">
            <FaChevronDown className="text-white text-2xl animate-bounce" />
        </div>


    </div>
}