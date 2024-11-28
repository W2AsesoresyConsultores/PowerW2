import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between md:justify-around px-8 py-4 bg-white shadow-md">
      {/* Espacio para el logotipo */}
      <a href="#" className="text-lg font-bold">
        <img
          src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/footer/cropped-logo-dicar.png?t=2024-11-25T02%3A59%3A33.313Z"
          alt="Logo"
          className="h-10"
        />
      </a>

      {/* Menú de navegación */}
      <nav className="hidden md:flex gap-12 text-orange-600 font-semibold">
        <a href="#" className="hover:text-orange-800 transition">
          ¿Quiénes somos?
        </a>
        <a href="#" className="hover:text-orange-800 transition">
          Oportunidades laborales
        </a>
        <a href="#" className="hover:text-orange-800 transition">
          Nuestro equipo
        </a>
        <a href="#" className="hover:text-orange-800 transition">
          Novedades
        </a>
      </nav>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-orange-600 focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10">
          <nav className="flex flex-col items-center gap-6 py-4 text-orange-600 font-semibold">
            <a href="#" className="hover:text-orange-800 transition">
              ¿Quiénes somos?
            </a>
            <a href="#" className="hover:text-orange-800 transition">
              Oportunidades laborales
            </a>
            <a href="#" className="hover:text-orange-800 transition">
              Nuestro equipo
            </a>
            <a href="#" className="hover:text-orange-800 transition">
              Novedades
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
