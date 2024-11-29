import React from 'react';

const CultureSection = () => {
  return (
    <section className="bg-[#ffffff] text-white py-16 flex flex-col items-center">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Imagen */}
        <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
          <img
            src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/cultura/cultura.jpg"
            alt="Cultura en el trabajo"
            className="rounded-lg shadow-lg object-cover w-full max-w-md" // Ajusta el tamaño aquí
            style={{ height: '400px' }} // Establecer una altura de 600px
          />
        </div>

        {/* Texto */}
        <div className="lg:w-1/2 text-center lg:pl-8">
          <h1 className="text-4xl font-bold mb-4">Nuestra cultura<br /> impulsa lo que <br />hacemos.</h1>
          <p className="mb-6">
            Nuestros valores conforman cada <br />acción y decisión que tomamos.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="bg-white text-orange-500 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Descubre más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;