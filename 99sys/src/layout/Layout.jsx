import Navbar from "../components/block/Navbar";



export default function Layout({children}){
    return(
        
        <>
            <div class=" fixed overflow-y-scroll bg-black bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px]">
                <header className=" fixed w-full z-20">
                <Navbar/>
                </header>
            {children}
            </div>

        </>
        
        
    )
}