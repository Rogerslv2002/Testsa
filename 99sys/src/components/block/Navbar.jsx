



export default function Navbar(){

    return(
        <nav className=" place-items-center flex flex-row justify-between py-5 px-20 backdrop-blur-xl border-b-2 border-white">
            <h2 className=" text-white text-4xl">Logo</h2>
            <Menu/> 
            <button className=" bg-white p-2 rounded-lg text-black">
                Whatsapp
            </button>

        </nav>
    )
}

const Menu =()=>{
    return(
        <div className="flex flex-row gap-5 text-white font-medium text-xl">
            <p>Home</p>
            <p>Serviços</p>
             <p>Sobre</p>
             <p>Pergunta</p>
             <p>Contatos</p>
        </div>
    )
}