import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import {  FaAws, FaLinode, FaVuejs } from 'react-icons/fa6';
import { SiAppwrite, SiAstro, SiBootstrap, SiCloudflare, SiCrystal,  SiElixir, SiFirebase, SiHostinger, SiLaravel,   SiNuxtdotjs, SiPhoenixframework,  SiRuby, SiRubyonrails, SiSvelte, SiTailwindcss, SiVercel,  } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import { SwiperSlide,Swiper } from 'swiper/react';
import { VscAzure } from 'react-icons/vsc';


export default function Parceiros() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          540: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card Icon={<FaAws/>} Texto='AWS' />
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<VscAzure/>} Texto='Azure' />
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiVercel/>} Texto='Vercel'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiCloudflare/>} Texto='Cloudflare'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiHostinger/>} Texto='Hostinger'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiAppwrite/>} Texto='Appwrite'/>
        </SwiperSlide>
        <SwiperSlide>
        <Card Icon={<SiFirebase/>} Texto='Firebase'/>
        </SwiperSlide> 
        <SwiperSlide>
            <Card Icon={<SiLaravel/>} Texto='Laravel'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiRuby/>} Texto='Ruby'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiRubyonrails/>} Texto='Rails'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiCrystal/>} Texto='Crystal'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiElixir/>} Texto='Elixir'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card Icon={<SiPhoenixframework/>} Texto='Phoenix'/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

const Card =(props)=>{
    return(
        <div className=' group  hover:bg-gradient-to-r from-lime-300 to-emerald-300   p-5 flex flex-col place-items-center gap-5 text-center border-2 border-lime-300 rounded-xl backdrop-blur-md'>
            <span className=' text-5xl text-lime-300 group-hover:text-black'>{props.Icon}</span>
            <p className=' text-2xl font-semibold text-white group-hover:text-black'>{props.Texto}</p>

        </div>
    )
}