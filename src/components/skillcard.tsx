import React from 'react';

interface SkillCardProps {
  image: string;
  name: string;
}

export const Skillcard:React.FC<SkillCardProps>=({image,name})=>{
    return <div className="w-50 h-65 rounded-xl p-4 flex flex-col items-center justify-center 
                    bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 ease-in-out
                 hover:scale-105 hover:shadow-[0_0_25px_white]">
                <div className="w-full h-24 rounded-md overflow-hidden">
                    <img src={image} alt={name} className="w-full h-full object-contain" />
                </div>
                <div>
                    <p className="mt-3 text-lg font-semibold text-white">{name}</p>
                </div>
    </div>
}