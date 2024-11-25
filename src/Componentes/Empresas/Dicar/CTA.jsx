import React from 'react'

function CTA() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-4/5 sm:w-1/2 z-10">
        <p className="my-3 text-sm tracking-widest text-indigo-500 uppercase">Salud y bienestar en cada paso</p>
        <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100">
          Tu Droguería de Confianza
        </h1>
        <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl dark:text-gray-400">
          Ofrecemos productos de calidad y atención personalizada para cuidar de tu salud. 
          ¡Visítanos y descubre lo que podemos hacer por ti!
        </p>
        
      </div>
      <div className="w-full h-full bg-cover bg-left" style={{ backgroundImage: `url('https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/CTA/dicar.jpg')` }}></div>
    </div>
  )
}

export default CTA