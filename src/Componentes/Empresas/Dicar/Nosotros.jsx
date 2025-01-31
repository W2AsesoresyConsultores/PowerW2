import React from "react";
import "../../../Nosotros.css";

const Nosotros = () => {
  return (
    <div id="nosotros" className="bg-white py-16 px-4 md:px-16">
      {/* Título general */}
      <div className="text-center mb-12">
        <h1 className="font-source font-bold text-5xl text-[#2f4daa] text-center">
          El éxito se construye con el mejor talento
        </h1>
      </div>

      {/* Contenedor del video manteniendo diseño */}
      <div className="relative w-full flex justify-center">
        <div className="player-wrapper rounded-lg overflow-hidden shadow-lg w-full max-w-3xl">
          <iframe
            src="https://drive.google.com/file/d/1nB3ak8uh0EhcuJR49sLPHUFinL1nyINj/preview"
            className="w-full aspect-video"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
