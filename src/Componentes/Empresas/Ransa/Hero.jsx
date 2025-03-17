import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[400px] bg-gray-800 text-white flex flex-col items-center justify-center mt-20">
      {/* Fondo con imagen oscurecida */}
      <div className="absolute inset-0 bg-black opacity-5"></div>
      
      <img
        src="https://static.vecteezy.com/system/resources/previews/007/424/207/non_2x/worker-team-meeting-and-training-logistics-and-transportation-business-containers-import-concept-the-supervisor-is-meeting-with-a-team-of-engineers-about-what-to-do-today-free-photo.jpg" // Reemplaza con la URL de la imagen
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
      />
      
      {/* Contenido */}
      <div className="relative z-10 text-center">
        <h1 className="text-green-500 font-extrabold text-4xl md:text-5xl">
          TRABAJA EN DISTRIBUCIÓN
        </h1>
        <h2 className="bg-purple-700 text-white text-lg md:text-xl font-bold px-6 py-2 mt-4 inline-block rounded-md">
          AUXILIAR DE DISTRIBUCIÓN
        </h2>
        
        {/* Ubicaciones */}
        <div className="flex gap-4 mt-6">
          <div className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <span className="font-bold">HUACHIPA</span>
            <span className="bg-white text-black px-2 py-1 rounded-md">80</span>
          </div>
          <div className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <span className="font-bold">VILLA EL SALVADOR</span>
            <span className="bg-white text-black px-2 py-1 rounded-md">20</span>
          </div>
          <div className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 border border-gray-300">
            <span className="font-bold">COMAS</span>
            <span className="bg-orange-500 text-white px-2 py-1 rounded-md">0</span>
          </div>
        </div>
        
        {/* Botón de postulación */}
        <button className="bg-white text-black font-bold text-lg px-6 py-3 mt-6 rounded-md shadow-md hover:bg-gray-200">
          POSTULA AHORA!
        </button>
      </div>
    </div>
  );
}

export default Hero;
