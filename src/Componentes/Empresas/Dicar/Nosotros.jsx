import React from "react";

const Nosotros = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-16">
      {/* Título general */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">¿Quiénes Somos?</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        {/* Imagen con el testimonio */}
        <div className="relative w-full md:w-1/2">
          <img
            src="https://www.guiadesaludccl.com/uploads/dicar-logistic/dicar-logistic-1.jpg" // Reemplaza con la URL de tu imagen
            alt="Dicar Logistic"
            className="rounded-lg shadow-md"
          />
          <div className="absolute bottom-4 left-4 bg-blue-100 p-4 rounded-lg shadow-lg flex items-center space-x-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rDH6HD7QYqpU1tQD2dfZCySl-GDrN9QkAA&s" // Reemplaza con la URL del avatar
              alt="Avatar"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-sm font-bold text-gray-800">
                Jesus Lujan, <span className="text-red-500">Founder</span>
              </p>
              <p className="text-sm text-gray-600">
                "En Dicar, creemos en construir relaciones sólidas basadas en la
                confianza y la excelencia."
              </p>
            </div>
          </div>
        </div>

        {/* Contenido del texto */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h3 className="text-[#133168] text-sm uppercase font-semibold mb-2">
            Bienvenidos a Dicar
          </h3>
          <h2 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Comprometidos con la Innovación
          </h2>
          <p className="text-gray-600 mb-6">
            En <span className="font-bold">Dicar</span>, somos una empresa comprometida con la
            innovación y la excelencia. Nos especializamos en ofrecer soluciones
            logísticas personalizadas que cumplen con los más altos estándares
            de calidad en la industria.
          </p>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está formado por profesionales apasionados que
            trabajan para garantizar un servicio excepcional. Creemos en la
            confianza, la transparencia y el trabajo en equipo como pilares para
            construir relaciones duraderas con nuestros clientes.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800">
              Conócenos más
            </button>
            <button className="flex items-center space-x-2 text-gray-800 font-semibold hover:underline">
              <span>Ver video</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-4.586-3.25A1 1 0 009 8.683v6.634a1 1 0 001.166.765l4.586-3.25a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;