import React from 'react';

function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-white">
      {/* Contenido de texto */}
      <div className="md:w-1/2 px-8 mb-8 md:mb-0">
        <h1 className="text-orange-600 text-4xl md:text-5xl font-bold leading-tight">
          ¿QUIÉNES<br />SOMOS?
        </h1>
        <h2 className="text-black text-2xl font-semibold mt-6">Historia</h2>
        <p className="text-gray-700 text-justify mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio 
          facilisis mauris sit amet massa. Id eu nisl nunc mi ipsum faucibus vitae aliquet. 
          Odio morbi quis commodo odio aenean.
        </p>
        <p className="text-gray-700 text-justify mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio 
          facilisis mauris sit amet massa. Id eu nisl nunc mi ipsum faucibus vitae aliquet. 
          Odio morbi quis commodo odio aenean.
        </p>
      </div>

      {/* Imágenes */}
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <img
          src="https://drogueriadicar.com.pe/wp-content/uploads/2019/10/DSC_1610-ok-SAT.jpg"
          alt="Imagen 1"
          className="w-full h-auto object-cover"
        />
        <img
          src="https://drogueriadicar.com.pe/wp-content/uploads/2019/10/DSC_1610-ok-SAT.jpg"
          alt="Imagen 2"
          className="w-full h-auto object-cover"
        />
        <img
          src="https://drogueriadicar.com.pe/wp-content/uploads/2019/10/DSC_1610-ok-SAT.jpg"
          alt="Imagen 3"
          className="w-full h-auto object-cover"
        />
        <img
          src="https://drogueriadicar.com.pe/wp-content/uploads/2019/10/DSC_1610-ok-SAT.jpg"
          alt="Imagen 4"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default About;
