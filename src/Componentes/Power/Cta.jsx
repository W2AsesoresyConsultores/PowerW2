import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-newprimarycolor w-full max-w-[900px] h-[auto] mx-auto my-4 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
      <div className="flex-1 px-8">
        <h2 className="text-white text-2xl font-bold">¿Quieres comenzar con POWER?</h2>
        <p className="text-white text-xl mt-2">Agenda una reunión con nuestros expertos</p>
        <button className="bg-white text-newprimarycolor font-semibold px-6 py-2 rounded-lg mt-4">
          POSTULA AHORA
        </button>
      </div>
      <div className="flex justify-center md:justify-start mt-4 md:mt-0 md:ml-6 -mb-4">
        <img 
          src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Main/Generic%20phone%20mock-up.svg" 
          alt="Descripción de la imagen" 
          className="w-48 h-auto" // Ajusta el tamaño
        />
      </div>
    </div>
  );
};

export default CallToAction;