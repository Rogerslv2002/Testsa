
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import {  FaGlobe, FaLinux, FaMicrochip, FaSalesforce, FaServer, FaShopify, FaVuejs } from 'react-icons/fa6';
import { SiAstro, SiBootstrap, SiCrystal,  SiElixir, SiLaravel,   SiMailchimp,   SiNuxtdotjs, SiPhoenixframework,  SiRuby, SiRubyonrails, SiSvelte, SiTailwindcss, SiVisualstudiocode,  } from 'react-icons/si';
import { SwiperSlide,Swiper } from 'swiper/react';
import { Card } from '../Ui/Card';


export default function Serviços() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card
                Icon={<SiVisualstudiocode/>}
                Titulo="Software"  
                Titulo2='Development' 
                Texto="Desenvolvemos softwares e aplicativos sob medida e 
                customizados para a sua necessidade.Criamos e desenvolvemos seu MVP em até 45 dias.            "
                 />
        </SwiperSlide>
        <SwiperSlide>
        <Card
                  Icon={<FaGlobe/>}
                  Titulo="Digital"
                  Titulo2='Transformation'
                  Texto="Automatizamos os seus processos analógicos, e repetitivos, 
                  gerando ganho de produtividade e reduzindo custos operacionais."
                 />
        </SwiperSlide>
        <SwiperSlide>
        <Card
                 Icon={<FaMicrochip/>}
                 Titulo="Application "
                 Titulo2='Modernization'
                 Texto="Sistemas legados? Repensamos e recriamos seus sistemas com
                  tecnologias de ponta, na nuvem, escaláveis e totalmente seguros.
                 "
                />
        </SwiperSlide>
  
        <SwiperSlide>
        <Card
                  Icon={<FaShopify/>}
                  Titulo="Ecommerce"
                  Titulo2=' Consultancy'
                  Texto="Automatizamos os seus processos analógicos, e repetitivos, 
                  gerando ganho de produtividade e reduzindo custos operacionais."
                 />
        </SwiperSlide>
        <SwiperSlide>
        <Card
                  Icon={<FaSalesforce/>}
                  Titulo="Salesforce "
                  Titulo2='Consultancy'
                  Texto="Automatizamos os seus processos analógicos, e repetitivos, 
                  gerando ganho de produtividade e reduzindo custos operacionais."
                 />
        </SwiperSlide>
        <SwiperSlide>
        <Card
                  Icon={<FaLinux/>}
                  Titulo="Open Source "
                  Titulo2='Consultancy'
                  Texto="Automatizamos os seus processos analógicos, e repetitivos, 
                  gerando ganho de produtividade e reduzindo custos operacionais."
                 />
        </SwiperSlide>
   
      </Swiper>
    </>
  );
}