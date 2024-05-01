import Marquee from 'react-fast-marquee'



export function Mar(){
    return(
        <>
         <Marquee>

            <div className=' flex flex-row gap-10 justify-between place-items-center'>
                <Texto Text={'Sistemas'}/>
                <Texto Text={'Sistemas'}/>
                <Texto Text={'Sistemas'}/>
                <Texto Text={'Sistemas'}/>
                <Texto Text={'Sistemas'}/>
                <Texto Text={'Sistemas'}/>
                <Texto Text={'Sistemas'}/>
                <Texto Text={''}/>

            </div>

         </Marquee>
        </>
    )
}

 const Texto =({Text})=>{
    return(
        <p className=' text-5xl  font-semibold text-black'>{Text}</p>
    )
 }