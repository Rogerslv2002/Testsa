



export function Soluções({Icon,Titulo}){
    return(
        <div className=" w-full backdrop-blur-xl place-items-center border-2 border-lime-300  p-2 rounded-lg flex flex-col gap-5">
            <span className=" text-6xl text-white">{Icon}</span>
            <p className=" text-2xl text-white font-medium" >{Titulo}</p>
        </div>
    )
}