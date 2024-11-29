import React from 'react'
import Buscador from './Buscador'

function Hero() {
  return (
    <div
      className='w-full h-[500px] pt-20 md:pt-0 md:h-[600px] relative flex flex-col justify-center items-center md:items-start gap-10 font-dmsans text-white text-center md:text-left md:px-16 px-4'
      style={{
        backgroundImage: `url('https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/cultura/fondoDicar.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Fondo negro semitransparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Contenido principal */}
      <p className="relative z-10">Conoce nuestras vacantes, beneficios y más</p>
      <h1 className='md:text-5xl text-3xl relative z-10 font-semibold'>Únete a nuestro equipo,<br /> juntos seguimos creciendo.</h1>
      <div className='flex gap-8 '>
        <Buscador />
        <a
        href="#"
        className='relative z-10 bg-white md:px-12 flex items-center px-8 text-md md:text-xl rounded-full text-[#2552a4] font-semibold'
      >
        Postula Aquí
      </a>
      
      </div>
      
    </div>
  )
}

export default Hero
