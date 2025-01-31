import React from 'react';
import Buscador from './Buscador';

function Hero2() {
  return (
    <div className="relative pt-20 h-screen flex items-center flex-col bg-[#2552a4] px-2">
      <h1 className="font-source font-extrabold text-6xl text-white text-center mt-20 mb-10 z-20">
        Únete a #Dicar,
        <br /> juntos seguimos creciendo.
      </h1>
      <Buscador />

      {/* Imagen detrás del contenido */}
      <img
        className="absolute bottom-0 w-full object-cover z-10 h-[450px]"
        src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Dicar/Hero/Hero.png"
        alt="Decoración Detrás"
      />
    </div>
  );
}

export default Hero2;
