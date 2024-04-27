import React, { useState } from 'react';
import logo from '../../assets/Logo horizontal W2 Black.png'
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white shadow z-10 top-0 fixed w-full justify-around font-dmsans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo o título */}
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-bold text-gray-800">
              <img className='w-32 h-28' src={logo} alt="" />
            </a>
          </div>
          {/* Navegación de escritorio */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="/" className="text-gray-800 hover:text-gray-600">
              Inicio
            </a>
            <a href="/" className="text-gray-800 hover:text-gray-600">
              Empresas
            </a>
            <a href="/" className="text-gray-800 hover:text-gray-600">
              Postulantes
            </a>
            <a href="/" className="text-gray-800 hover:text-gray-600">
              Practicantes
            </a>
            <button className="bg-primarycolor hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
              Contáctanos
            </button>
          </div>
          {/* Botón de menú para dispositivos móviles */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {showMenu ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Navegación de dispositivos móviles */}
      {showMenu && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </a>
            <a
              href="/"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Empresas
            </a>
            <a
              href="/"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Postulantes
            </a>
            <a
              href="/"
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Practicantes
            </a>
            <button className="bg-primarycolor hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2">
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
