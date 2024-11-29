import React from "react";

const Nosotros = () => {
  return (
    <div className="nosotros-container bg-gray-50 text-gray-800 py-12 px-6 md:px-16">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2552a4]">¿Quiénes Somos?</h2>
        <p className="mt-4 text-lg text-gray-600">
          Somos una empresa comprometida con la excelencia, ofreciendo soluciones innovadoras para ayudarte a alcanzar tus objetivos.
        </p>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ml-24 items-center">
        {/* Imagen */}
        <div className="image-container">
          <img
            src="https://www.dicarlogistic.pe/wp-content/uploads/2023/05/img-nosotros.jpg"
            alt="Nosotros"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Texto */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#2552a4]">
            Nuestra Misión
          </h3>
          <p className="text-gray-600 mb-6">
            Ayudamos a empresas y personas a cumplir sus sueños a través de soluciones integrales, innovación constante y un enfoque centrado en el cliente.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-[#2552a4]">
            Nuestros Valores
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Compromiso con la calidad</li>
            <li>Innovación y creatividad</li>
            <li>Responsabilidad social</li>
            <li>Trabajo en equipo</li>
          </ul>
        </div>
      </div>

      {/* Equipo */}
      <div className="team-section mt-16 text-center">
        <h3 className="text-3xl font-bold text-[#2552a4]">Conoce a nuestro equipo</h3>
        <p className="mt-4 text-gray-600">
          Un grupo de profesionales apasionados por lo que hacen.
        </p>

        {/* Cards del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {["Juan Pérez", "Ana López", "Carlos García", "María Fernández"].map(
            (nombre, idx) => (
              <div
                key={idx}
                className="team-card bg-white shadow-lg rounded-lg p-4 text-center"
              >
                <img
                  src={`https://via.placeholder.com/150`}
                  alt={nombre}
                  className="rounded-full mx-auto mb-4 w-24 h-24"
                />
                <h4 className="text-lg font-semibold text-gray-800">{nombre}</h4>
                <p className="text-sm text-gray-500">Cargo en la empresa</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
