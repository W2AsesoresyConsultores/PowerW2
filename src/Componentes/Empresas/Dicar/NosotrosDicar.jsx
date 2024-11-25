import React from "react";

const NosotrosDicar = () => {
  return (
    <section className="pt-28 flex flex-wrap font-dmsans md:px-12">
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6">
   
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start gap-6 px-4 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-primarytext">
            ¿Quiénes somos?
          </h1>
          <p className="text-gray-700 text-lg">
            Desde 2008, en Droguería Dicar nos dedicamos a distribuir productos
            farmacéuticos, dispositivos médicos y productos sanitarios a lo
            largo del Perú. Con una experiencia sólida en el sector, nos
            esforzamos por ofrecer un servicio profesional, personalizado y
            eficiente. Nuestro equipo cuida cada detalle, desde el pedido hasta
            la entrega, garantizando una experiencia de compra confiable y
            satisfactoria.
          </p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center md:justify-end px-4 mb-8">
          <img
            className="w-full max-w-sm rounded-lg shadow-lg"
            src={
              "https://drogueriadicar.com.pe/wp-content/uploads/2019/10/DSC_1629-ok-SAT-1536x1021.jpg"
            }
            alt="Droguería Dicar"
          />
        </div>
      </div>
    </section>
  );
};

export default NosotrosDicar;