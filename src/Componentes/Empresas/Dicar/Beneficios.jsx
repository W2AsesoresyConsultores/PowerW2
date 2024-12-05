import React, { useState, useEffect } from "react";

function Beneficios() {
  const [activeImage, setActiveImage] = useState(0); // Imagen activa
  const [fade, setFade] = useState(false); // Estado para manejar el efecto de transición

  const images = [
    "https://www.buk.pe/hubfs/2024/nosotros/Somos%20cercanos%20y%20lo%20pasamos%20bien.jpg",
    "https://www.buk.pe/hubfs/2024/nosotros/El%20cliente%20es%20nuestro%20centro.jpg",
    "https://www.buk.pe/hubfs/Nos%20mueve%20la%20excelencia.jpg",
    "https://www.buk.pe/hubfs/2024/nosotros/Lo%20que%20nos%20mueve/Los-pensamos-lo-hacemos.webp",
    "https://www.buk.pe/hubfs/2024/nosotros/Vamos%20al%20infinito%20y%20m%C3%A1s%20all%C3%A1.webp",
  ];

  // Cambiar la imagen automáticamente cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((activeImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeImage, images.length]);

  // Manejo del cambio de imagen con transición
  const handleImageChange = (index) => {
    setFade(true); // Inicia la transición
    setTimeout(() => {
      setActiveImage(index); // Cambia la imagen
      setFade(false); // Finaliza la transición
    }, 300); // Duración de la transición (en milisegundos)
  };

  return (
    <div className="w-full h-auto py-10 flex">
      {/* Texto y botones */}
      <div className="w-full md:w-1/2 h-full pt-28 pl-24 pr-10">
        <h2 className="font-source font-bold text-5xl text-[#2f4daa]">Lo que nos mueve en Dicar</h2>
        <p className="font-inter my-4 text-xl">
        En Dicar, aseguramos que los medicamentos lleguen de forma segura y puntual, fortaleciendo la confianza en la logística farmacéutica con soluciones innovadoras que impactan el bienestar de las personas.
        </p>
        <div className="font-inter flex w-full flex-wrap gap-2">
          {[
            "El cliente es nuestro centro",
            "Lo pensamos lo hacemos",
            "Vamos al infinito y más allá",
            "Somos cercanos y lo pasamos bien",
            "Nos mueve la excelencia",
          ].map((text, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`px-4 py-2 bg-[#d9e3fc] hover:bg-[#2f4daa] hover:text-white transition-all duration-500 rounded-full text-lg ${
                activeImage === index ? "bg-[#2f4daa] text-white" : "text-[#2f4daa]"
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      {/* Imagen con transición */}
      <div className="w-full md:w-1/2 h-full py-10 px-24 flex justify-center items-center">
        <img
          className={`w-[90%] transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
          src={images[activeImage]}
          alt={`Imagen ${activeImage}`}
        />
      </div>
    </div>
  );
}

export default Beneficios;
