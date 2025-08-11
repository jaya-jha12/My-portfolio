


export const About=()=>{
    return <div className="bg-[url('/bg4.png')] bg-cover bg-center flex flex-col items-center h-full w-full">
                <div className="flex  justify-center mb-10">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-400 to-purple-500 text-5xl pt-16 pb-3 font-bold border-b-4 border-purple-500  ">
                    About Me
                    </h2>
                </div>

                <div className="flex flex-row items-center h-full">
                    <div className="flex-1 px-20 ">     
                        <img src="/photo.png" alt="Jaya" className=" w-120 h-120 aspect-square object-cover rounded-full border-4 border-purple-800 shadow-[0_0_30px_10px_rgba(192,132,252,0.5)]"></img>
                    </div>
                    <div className="">
                        <div className="flex-1 max-w-lg text-2xl text-violet-100">
                            <p> Hello! I'm currently pursuing my B.Tech in Computer Science with a specialization in Artificial Intelligence (CSAI) at Netaji Subhas University of Technology (NSUT). My academic journey has been consistently equipping me with a solid grounding in data structures, system design, and modern web technologies.</p><br/>
                            <p>As an aspiring Full Stack Developer and AIML enthusiast, I thrive on creating meaningful digital experiences that combine intelligent systems with robust engineering. My interests lie in the intersection of machine learning, web development, and user experience.</p>  
                        </div>
                    </div>
                    
                </div>
        
            </div>
}