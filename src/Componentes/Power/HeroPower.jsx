import React from 'react';
import BuscadorNoAuth from './BuscadorNoAuth'

function HeroPower() {
  return (
    <div className="flex flex-col bg-newprimarycolor items-center justify-center w-full h-auto pt-28 md:pt-36 md:pb-12 text-gray-700 gap-2 bg-cover ">
      <h1 className="text-5xl md:text-6xl font-extrabold md:text-center  animate-fade-right text-white font-source text-start px-4">
        Vive la experiencia <span className="text-yellowprimary">Power</span> y postula <br /> con nosotros
      </h1>
      <p className="mb-4 md:text-center text-start md:w-1/2 animate-fade-right w-full  text-gray-200 font-inter text-lg px-4">
        Ayudamos a personas sin empleo a obtener trabajos formales con beneficios de ley mediante nuestra metodología de atracción.
      </p>
      <div className="md:flex hidden flex-wrap w-full  justify-center animate-fade-up">
        {/* <a
          href="#ofertas"
          className="mb-4 text-base font-semibold flex justify-center items-center bg-white text-primarycolor px-4 py-2 rounded-full h-12 transition-colors duration-300 hover:bg-gray-200"
        >
          Explorar Ofertas
        </a>
        <a
          href="#ofertas"
          className="mb-4 text-base font-semibold flex justify-center items-center text-colorgreen underline px-4 py-2 rounded-full h-12 transition-colors duration-300 hover:text-colorgreen-dark"
        >
          ¿Cómo funciona?
        </a> */}
        <BuscadorNoAuth />
      </div>
      <div className="w-full px-4 animate-fade-up delay-200">
        <img
          className="mx-auto"
          src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Main/BGPOWER.svg?t=2024-11-11T23%3A31%3A31.247Z"
          alt=""
        />
      </div>
      <div className='w-full my-4 h-auto md:hidden flex flex-wrap'>
      <BuscadorNoAuth />  
      </div>
      
    </div>
  );
}

export default HeroPower;