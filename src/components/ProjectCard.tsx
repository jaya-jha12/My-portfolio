import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps{
    image:string,
    title:string,
    tags:Array<string>,
    link:string,
}

export const ProjectCard:React.FC<ProjectProps>=({image,tags,title,link})=>{
    return <div className="w-80 h-100 rounded-xl p-4 flex flex-col items-center justify-center 
                    bg-purple/50 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 ease-in-out
                 hover:scale-105 hover:shadow-[0_0_25px_white]">
                    {/* image */}
                <div className="h-75 w-50 overflow-hidden">
                    <img src={image} className="object-fill w-full h-full"></img>
                </div>
                <div className="py-1 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag)=>(
                        <span
                            key={tag}
                            className="px-3 py-1 bg-purple/10 backdrop-blur-md  border border-blue-950 text- text-xs rounded-lg">
                        {tag}
                        </span>
                    ))}
                </div>
                <button className="flex-1 bg-black hover:bg-gray-900 text-white text-sm py-4 rounded-lg border border-gray-700 flex items-center justify-center gap-2 px-2 hover:scale-105"
                onClick={()=>window.location.href=link}>
                    <FaGithub /> 
                     View code
                </button>
                    

    </div>
}