interface buttonprop{
    title:string,
    onClick:()=>void
}

export const Button=({title,onClick}:buttonprop)=>{
    return <button onClick={onClick} className="bg-purple-600 text-white py-2 px-4 rounded-md transition duration-300 transform hover:scale-110 border border-purple-200 hover:shadow-[0_0_12px_3px_rgba(168,85,247,0.8)] text-font-bold">
    {title}
    </button>
}