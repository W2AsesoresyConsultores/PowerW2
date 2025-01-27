import React from 'react';
import BuscadorNoAuth from './BuscadorNoAuth'
import TrabajosContainer from './TrabajosContainer'

function HeroPower() {
  return (
    <div className="flex flex-col bg-primarygradientdark items-center justify-center w-full h-[650px] pt-28 md:pt-36 md:pb-12 bg-newprimarycolor text-gray-700 gap-2 bg-cover "
    style={{
      backgroundImage: "url('https://www.digitalocean.com/api/static-content/v1/images?src=%2F_next%2Fstatic%2Fmedia%2Fhero-background.686539c6.svg&width=1920')",
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
      <div className="md:flex flex-col hidden">
  <h3 className="text-white font-semibold text-lg text-center font-inter mb-4">Ofertas populares:</h3>
  <div className="flex flex-wrap gap-2 font-inter">
    <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full font-inter text-sm hover:bg-newprimarycolor transition-colors duration-300 hover:text-white cursor-pointer  ">Almacenero</span>
    <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full font-inter text-sm hover:bg-newprimarycolor transition-colors duration-300 hover:text-white cursor-pointer  ">Conductor</span>
    <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full font-inter text-sm hover:bg-newprimarycolor transition-colors duration-300 hover:text-white cursor-pointer  ">Asesor de ventas</span>
    <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full font-inter text-sm hover:bg-newprimarycolor transition-colors duration-300 hover:text-white cursor-pointer  ">Operario</span>
    <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full font-inter text-sm hover:bg-newprimarycolor transition-colors duration-300 hover:text-white cursor-pointer  ">Atención al cliente</span>
  </div>
</div>

    </div>
  );
}

export default HeroPower;