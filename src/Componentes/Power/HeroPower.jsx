import React from 'react';
import BuscadorNoAuth from './BuscadorNoAuth'
import TrabajosContainer from './TrabajosContainer'

function HeroPower() {
  return (
    <div className="flex flex-col bg-primarygradientdark items-center justify-center w-full h-[55 0px] pt-28 md:pt-36 md:pb-12 text-gray-700 gap-2 bg-cover "
    style={{
      backgroundImage: "url('https://www.digitalocean.com/_next/static/media/hero-background.a9bcc858.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold md:text-center  animate-fade-right text-white font-source text-start px-4">
        Vive la experiencia Power y postula <br /> con nosotros
      </h1>
      <p className="mb-4 md:text-center text-start md:w-1/2 animate-fade-right w-full  text-gray-200 font-inter text-lg px-4">
        Ayudamos a personas sin empleo a obtener trabajos formales con beneficios de ley mediante nuestra metodología de atracción.
      </p>
      <div className="md:flex  flex-wrap w-full  justify-center animate-fade-up">
        <BuscadorNoAuth />
      </div>
      <div className="w-full bg-white md:bg-transparent py-4 animate-fade-up delay-200">
        {/* <img
          className="mx-auto"
          src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Main/BGPOWER.svg?t=2024-11-11T23%3A31%3A31.247Z"
          alt=""
        /> */}
        
      </div>     
    </div>
  );
}

export default HeroPower;