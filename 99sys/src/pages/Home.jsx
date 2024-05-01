import { Mar } from "../components/Marque/Mar";
import { Card } from "../components/Ui/Card";
import { FaLaravel, FaNodeJs } from 'react-icons/fa6'
import { Soluções } from "../components/Ui/Soluçoẽs";
import Serviços from "../components/Slide/Serviços";
import Parceiros from "../components/Slide/Parceiros";



export default function Home(){
    return(
        <>
        <section className=" flex flex-col gap-5 px-20 pt-40 pb-16 place-items-center">
            <p className=" bg-white p-1.5  text-black text-xl rounded-xl font-semibold bg-gradient-to-r from-lime-300 to-emerald-400">Software Development & Tech Consulting</p>
            <h2 className=" text-center text-white text-6xl font-semibold">
                Soluções Digitais Para Desafios Reais.<br/>
                Traga Sua <span className=" bg-clip-text text-transparent bg-gradient-to-r  from-lime-300 to-emerald-400"> Empresa Para O Futuro. </span>
             </h2>
             <p className=" text-white text-xl font-medium px-20 text-center">A 99system é especializada no desenvolvimento de softwares abrangentes, desde plataformas e sistemas até automação e aplicativos personalizados.</p>
              <button className=" text-xl font-medium p-2 rounded-xl bg-white text-black">
                Vamos converçar
              </button>


        </section>
        <section className=" w-full py-5 bg-gradient-to-r from-lime-300 to-emerald-400">
          <Mar/>
        </section>
        <section className=" w-full   py-10 px-20 flex flex-col gap-8">
            <h2 className="  text-white text-center  text-5xl font-semibold ">Diferenciais 99system</h2>
            <p className=" text-center text-white px-20  text-2xl font-medium">Estamos prontos para ser o parceiro estratégico que impulsionará o seu negócio por meio de soluções tecnológicas inovadoras e de alta qualidade.</p>
             <div className=" flex flex-row justify-between gap-6">
                <Card
                 Icon={<FaNodeJs/>}
                 Titulo={'Tecnologias Modernas'}
                 Texto='Especializados nas mais avançadas tecnologias de desenvolvimento de software.                 '
                />
                <Card
                 Icon={<FaNodeJs/>}
                 Titulo={'Desenvolvimento Ágil'}
                 Texto={'Utilizamos metodologias ágeis para garantir a entrega de projetos dentro dos prazos.                 '}
                />
                <Card
                Icon={<FaNodeJs/>}
                Titulo='Know-how  '
                Texto='Contamos com uma equipe altamente experiente, com mais de uma década de atuação no mercado.'
               />

             </div>
        </section>
        <section className=" w-full px-20 py-10 flex flex-col gap-6">
            <h2 className=" text-center text-white text-5xl font-semibold">Nossos Serviços</h2>
            <p className="  text-center text-xl text-white font-medium">Saiba como podemos ajudar a sua empresa a ir mais longe.</p>
             <div className=" w-full flex flex-row gap-5" >
             <Serviços/>

             </div>

        </section>
        <section className=" w-full px-20 py-10 flex flex-col gap-10">
            <h2 className=" text-center text-white text-5xl font-semibold ">Tipos de Soluções que Desenvolvemos</h2>
            <div className=" w-full flex flex-row gap-5">
                <Soluções
                Icon={<FaLaravel/>}
                Titulo={'Sistemas web'}

                 
                />
                <Soluções
                Icon={<FaLaravel/>}
                Titulo={'Sistemas web'}
                />
                <Soluções
                Icon={<FaLaravel/>}
                Titulo={'Sistemas web'}
                />
                <Soluções
                Icon={<FaLaravel/>}
                Titulo={'Sistemas web'}
                />
                 <Soluções
                Icon={<FaLaravel/>}
                Titulo={'Sistemas web'}
                />


            </div>
            <div className=" w-full flex flex-row gap-5">
                <Soluções
                Icon={<FaLaravel/>}
                Titulo={'Sistemas web'}

                 
                />
                <Soluções
                Icon={<FaLaravel/>}
                Titulo={'Sistemas web'}
                />
                <Soluções
                Icon={<FaLaravel/>}
                Titulo={'Sistemas web'}
                />
                <Soluções
                Icon={<FaLaravel/>}
                Titulo={'Sistemas web'}
                />
                 <Soluções
                Icon={<FaLaravel/>}
                Titulo={'Sistemas web'}
                />


            </div>

        </section>
        <section className=" w-full py-5 bg-gradient-to-r from-lime-300 to-emerald-400">
          <Mar/>
        </section>
        <section className=" w-full px-20 py-10">
          <div className=" w-2/5"></div>
          <div className=" w-3/5">
            <h2 className=" text-4xl text-white font-semibold text-center"> Quem Somos</h2>
            <p>
              
            </p>
          </div>

        </section>
        <section className=" w-full px-20 py-10 flex flex-col gap-6">
            <h2 className=" text-center text-white  text-5xl font-semibold">Por que escolher a 99system?</h2>
            <p className=" text-center text-white text-xl font-medium px-20">Somos uma equipe especializada e engajada em criar soluções personalizadas, podemos ajudar nos seus desafios.</p>
             <span className=" flex flex-row gap-5">
                <Card
                  Icon={<FaLaravel/>}
                  Titulo={'Softwares totalmente customizados'}
                />
                   <Card
                  Icon={<FaLaravel/>}
                  Titulo={'Softwares totalmente customizados'}
                />
                   <Card
                  Icon={<FaLaravel/>}
                  Titulo={'Softwares totalmente customizados'}
                />
             </span>
        </section>

    
        <section className=" w-full px-20 py-10 flex flex-col gap-6">
          <h2 className="  text-center text-white text-5xl font-semibold">Nossos Parceiros</h2>
          <span className=" w-full">
            <Parceiros/>

          </span>

        </section>
          <section className=" w-full px-20 py-10 flex flex-col gap-6">
          <h2 className="  text-center text-white text-5xl font-semibold">Contato</h2>
          <div>

          </div>

        </section>
        
         
        </>
    )
}