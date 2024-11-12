import React from 'react';

function HeroPower() {
  return (
    <div className='flex flex-col bg-newprimarycolor items-center justify-center w-full h-auto font-dmsans pt-28 md:pt-36 pb-12  text-gray-700 gap-6 bg-cover'
    // style={{ backgroundImage: `url(${gradiantPower})` }}
    >
        <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-center px-2 animate-fade-right text-white'>
          Vive la experiencia <span className='text-yellowprimary'>Power</span> y postula <br /> con nosotros
        </h1>
        <p className='mb-4 text-center px-2 animate-fade-right w-full md:w-1/2 text-gray-200'>
        Ayudamos a personas sin empleo a obtener trabajos formales con <br /> beneficios de ley mediante nuestra metodología de atracción.
        </p>
        <div className='flex md:gap-4 flex-wrap px-4 justify-center'>
          <a href='#ofertas' className='mb-4 text-base font-semibold flex justify-center items-center bg-white  text-primarycolor px-4 py-2 rounded-full h-12 animate-fade-right'>
          Explorar Ofertas
        </a>
        <a href='#ofertas' className='mb-4 text-base font-semibold flex justify-center items-center  text-colorgreen underline px-4 py-2 rounded-full h-12 animate-fade-right'>
          ¿Cómo funciona?
        </a>
        </div>
        {/* <div className='w-[70%] h-96 bg-primarygradient rounded-lg'>
          <img className='w-96 self-end' src={imgSaasPower} alt="" />
        </div> */}
       
            <div className='w-full px-4'>
              <img className='mx-auto' src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Main/BGPOWER.svg?t=2024-11-11T23%3A31%3A31.247Z" alt="" />
            </div>
              
    </div>
  );
}

export default HeroPower;