import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';

function Hero() {
  const images = [
    'https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/cultura/Fondo.jpg',
    'https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/cultura/fondoDicar.jpg',
    'https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/sedes/sede3.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Cambia cada 3000 ms

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className='w-full h-[500px] pt-20 md:pt-0 md:h-[600px] relative flex flex-col justify-center items-center md:items-start gap-10 font-dmsans text-white text-center md:text-left md:px-16 px-4 overflow-hidden'>
      {/* Contenedor de imágenes */}
      <div className="absolute inset-0 w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}
      </div>

      {/* Fondo negro semitransparente */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenido principal */}
      <p className="relative z-10">Conoce nuestras vacantes, beneficios y más</p>
      <h1 className='md:text-5xl text-3xl relative z-10 font-semibold'>Únete a nuestro equipo,<br /> juntos seguimos creciendo.</h1>
      <div className='flex gap-8 w-full'>
        <Buscador />
      </div>

      {/* Puntos de navegación */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
