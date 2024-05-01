


export function Card({Icon,Titulo,Texto,Titulo2}){
    return(
        <div className="  w-full place-items-center px-2 py-5 flex backdrop-blur-xl flex-col border-2  border-lime-300 rounded-xl gap-5  ">
            <span className=" text-6xl  text-white">{Icon}</span>
            <h3 className=" text-3xl text-center font-semibold text-transparent bg-gradient-to-r from-lime-300 to-emerald-400 bg-clip-text ">{ Titulo}<br/>{Titulo2}</h3>
            <p className=" text-white text-center text-lg font-medium">{Texto}</p>
        </div>
    )
}