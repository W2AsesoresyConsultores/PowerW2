import React from "react";
import ContainerDicar from "./ContainerDicar";

const App = () => {
  return (
    <div className="bg-gray-100 font-dmsans">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        {/* Fondo con imagen */}
        <div className="absolute inset-0">
          <img
            src="https://drogueriadicar.com.pe/wp-content/uploads/2019/11/DSC_1604-ok-SAT-copy-1.jpg"
            alt="Trabajo en equipo en DICAR"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Contenido */}
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 py-24 flex flex-col items-start">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Únete a Nuestro Equipo en DICAR
          </h1>
          <p className="mt-4 text-lg lg:text-xl max-w-lg">
            En DICAR, creemos en el poder del trabajo en equipo y en un entorno donde cada colaborador puede crecer y aportar.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium"
            >
              Conoce nuestras vacantes
            </a>
            <a
              href="tel:1234567890"
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold">Ambiente Inclusivo</h3>
            <p className="mt-2 text-sm">
              Fomentamos un entorno donde todos los colaboradores son valorados.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Oportunidades de Crecimiento</h3>
            <p className="mt-2 text-sm">
              Apoyamos tu desarrollo profesional y personal en cada etapa.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Propósito Compartido</h3>
            <p className="mt-2 text-sm">
              Trabajamos juntos para impactar de manera positiva en la comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
  <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
      {/* Imagen grande */}
      <div className="lg:col-span-2">
        <img
          src="https://drogueriadicar.com.pe/wp-content/uploads/2019/10/DSC_1810-ok-SAT-2.jpg"
          alt="Trabajador en taller"
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Texto */}
      <div className="lg:col-span-3">
        <h2 className="text-sm text-blue-600 font-semibold uppercase">
          Quiénes Somos
        </h2>
        <h3 className="mt-2 text-3xl font-bold text-gray-800 leading-tight">
          Distribución Farmacéutica DICAR
        </h3>
        <p className="mt-4 text-gray-600">
          En DICAR nos especializamos en brindar soluciones logísticas para el
          sector farmacéutico. Con años de experiencia, trabajamos para
          garantizar la disponibilidad de medicamentos y productos de salud.
        </p>
      </div>
    </div>

    {/* Imágenes pequeñas */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div className="lg:col-span-1">
        <img
          src="https://drogueriadicar.com.pe/wp-content/uploads/2019/10/IMG_6896.jpg"
          alt="Taller mecánico"
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="lg:col-span-1">
        <img
          src="https://drogueriadicar.com.pe/wp-content/uploads/2021/03/img20181126_16282974-1024x666.jpg"
          alt="Elevador de autos"
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Lo Que Nos Hace Únicos</h2>
          <p className="mt-4 text-gray-600">
            Estas son algunas razones por las que nuestro equipo ama trabajar aquí.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://drogueriadicar.com.pe/wp-content/uploads/2019/11/DSC_1604-ok-SAT-copy-1.jpg"
                alt="Trabajo en equipo"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Trabajo en Equipo</h3>
                <p className="mt-2 text-gray-600">
                  Juntos logramos más. Nuestro equipo está unido por una visión compartida.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://drogueriadicar.com.pe/wp-content/uploads/2019/10/DSC_1610-ok-SAT.jpg"
                alt="Crecimiento profesional"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Crecimiento Profesional</h3>
                <p className="mt-2 text-gray-600">
                  Ofrecemos programas de formación y desarrollo continuo.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://drogueriadicar.com.pe/wp-content/uploads/2019/10/DSC_1651-ok-SAT-1.jpg"
                alt="Impacto en la comunidad"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Impacto Social</h3>
                <p className="mt-2 text-gray-600">
                  Hacemos una diferencia en la vida de las personas a través de nuestro trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold">Forma Parte de DICAR</h2>
            <p className="mt-4">
              Estamos buscando personas apasionadas y talentosas para que se unan a nuestra familia.
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <strong>Ubicación:</strong> Lima, Perú
              </li>
              <li>
                <strong>Teléfono:</strong> 123 456 7890
              </li>
              <li>
                <strong>Email:</strong> talento@dicar.com
              </li>
            </ul>
          </div>
          <div>
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-800 font-medium">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full mt-2 p-3 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full mt-2 p-3 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 font-medium">
                  Mensaje
                </label>
                <textarea
                  placeholder="Tu mensaje"
                  className="w-full mt-2 p-3 border rounded-md"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

    {/* Sección de ofertas */}
    <ContainerDicar />

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        <p>© 2023 DICAR. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
