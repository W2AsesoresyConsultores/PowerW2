import React, { useState, useEffect } from 'react';

function Hero() {
  const images = [
    'https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/cultura/fondoDicar.jpg',
    'https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/sedes/sede3.jpg',
    'https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/sedes/sede1.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('next');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransitionDirection('next');
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 2000); // Cambia cada 4000 ms

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleDotClick = (index) => {
    setTransitionDirection(index > currentImage ? 'next' : 'prev');
    setCurrentImage(index);
  };

  return (
    <div className='w-full h-[500px] pt-20 md:pt-0 md:h-[600px] relative flex flex-col justify-center items-center md:items-start gap-10 font-dmsans text-white text-center md:text-left md:px-16 px-4 overflow-hidden'>
      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${transitionDirection === 'next' ? 'translate-x-full' : 'translate-x-0'}`}
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${transitionDirection === 'next' ? 'translate-x-0' : '-translate-x-full'}`}
        style={{
          backgroundImage: `url(${images[(currentImage + 1) % images.length]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Fondo negro semitransparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Contenido principal */}
      <p className="relative z-10">Conoce nuestras vacantes, beneficios y más</p>
      <h1 className='md:text-5xl text-3xl relative z-10 font-semibold'>Únete a nuestro equipo,<br /> juntos seguimos creciendo.</h1>
      <a
        href="#"
        className='relative z-10 bg-white md:px-12 md:py-4 px-8 py-2 text-md md:text-xl rounded-full text-[#2552a4] font-semibold'
      >
        Postula Aquí
      </a>

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