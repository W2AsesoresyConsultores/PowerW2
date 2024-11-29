import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Estado para rastrear el enlace activo

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Marca el enlace como activo al hacer clic
    setIsOpen(false); // Cierra el menú en dispositivos móviles
  };

  return (
    <header className="fixed top-0 w-full flex items-center justify-between md:justify-around px-8 py-4 bg-white shadow-md z-50">
      {/* Espacio para el logotipo */}
      <a href="#" className="text-lg font-bold">
        <img
          src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/footer/logo-header.png"
          alt="Logo"
          className="h-10"
        />
      </a>

      {/* Menú de navegación */}
      <nav className="hidden md:flex gap-12 text-gray-700 font-semibold">
        {["¿Quiénes somos?", "Ofertas", "Beneficios", "Nosotros", "Sedes"].map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={() => handleLinkClick(item)}
            className="relative transition text-gray-700 hover:text-blue-600"
          >
            {item}

            {/* Línea azul debajo del texto al hacer hover */}
            <span
              className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 ease-out hover:scale-x-100"
            ></span>
          </a>
        ))}
      </nav>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-primarycolor focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10">
          <nav className="flex flex-col items-center gap-6 py-4 text-gray-700 font-semibold">
            {["¿Quiénes somos?", "Ofertas", "Beneficios", "Nosotros", "Sedes"].map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={() => handleLinkClick(item)}
                className={`hover:text-blue-600 transition ${
                  activeLink === item ? "bg-blue-100 text-gray-700" : ""
                } w-full text-center py-2`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
