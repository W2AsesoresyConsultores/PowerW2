import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-newprimarycolor my-10 w-[90%] md:w-full max-w-[900px] h-[auto] mx-auto p-4 rounded-2xl  flex flex-col md:flex-row items-center"
    style={{
      backgroundImage: "url('https://www.digitalocean.com/_next/static/media/hero-background.a9bcc858.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
    >
      <div className="flex-1 px-2 md:px-8">
        <h2 className="text-white text-3xl font-bold font-source">¿Quieres comenzar con Power?</h2>
        <p className="text-white text-md mt-2 font-inter font-light">Ingresa a nuestra plataforma y encuentra tu trabajo ideal</p>
        <button className="bg-white text-newprimarycolor font-bold px-6 py-2 rounded-full mt-4 font-source text-xl">
          Postula Ahora
        </button>
      </div>
      <div className="flex justify-center md:justify-start mt-4 md:mt-0 md:ml-6 -mb-4">
        <img 
          src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Main/Generic%20phone%20mock-up.svg" 
          alt="Descripción de la imagen" 
          className="w-64 h-auto" // Ajusta el tamaño
        />
      </div>
    </div>
  );
};

export default CallToAction;