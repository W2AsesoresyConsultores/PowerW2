import React, { useState, useEffect } from "react";

function Beneficios() {
  const [activeImage, setActiveImage] = useState(0); // Imagen activa
  const [fade, setFade] = useState(false); // Estado para manejar el efecto de transición

  const images = [
    "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Dicar/Beneficios/Beneficio1.jpg",
    "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Dicar/Beneficios/Beneficio2.jpg",
    "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Dicar/Beneficios/Beneficio3.png",
    "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Dicar/Beneficios/Beneficio4.png",
    "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Dicar/Beneficios/Beneficio5.jpg",
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
    <div id="beneficios" className="w-full h-auto py-10 flex flex-wrap">
      {/* Texto y botones */}
      <div className="w-full md:w-1/2 h-full md:pt-8 px-4 md:md:pl-24 pr-10">
        <h2 className="font-source font-bold text-5xl text-[#2f4daa] text-center md:text-start">Lo que nos mueve en Dicar</h2>
        <p className="font-inter my-8 text-xl text-gray-800">
        Somos una empresa reconocida y certificada, con respaldo en nuestra excelencia operativa. En 2014 obtuvimos nuestro primer certificado de Buenas Prácticas de Almacenamiento (BPA) y, en 2019, la DIGEMID 
        nos otorgó la certificación de Buenas Prácticas de Distribución y Transporte (BPDT).
        </p>
        <div className="font-inter flex w-full flex-wrap gap-2">
          {[
            "Crecimiento Profesional",
            "Estabilidad Laboral",
            "Vamos al infinito y más allá",
            "Beneficios Corporativos",
            "Nos mueve la excelencia",
          ].map((text, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`px-4 py-2  hover:bg-[#2f4daa] hover:text-white transition-all duration-500 rounded-full text-lg ${
                activeImage === index ? "bg-[#2f4daa] text-white" : "text-[#2f4daa] bg-[#d9e3fc]"
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      {/* Imagen con transición */}
      <div className="w-full md:w-1/2 h-full py-10 md:px-24 flex justify-center items-center">
        <img
          className={`w-[90%] h-[400px] transition-opacity rounded-3xl duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
          src={images[activeImage]}
          alt={`Imagen ${activeImage}`}
        />
      </div>
    </div>
  );
}

export default Beneficios;
