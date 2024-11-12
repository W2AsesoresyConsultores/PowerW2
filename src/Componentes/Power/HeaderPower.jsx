import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { IoMenu } from "react-icons/io5";

function HeaderPower() {
  const [showMenu, setShowMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Controla si el header es visible
  const [lastScrollY, setLastScrollY] = useState(0); // Guarda la última posición de scroll

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Efecto para detectar el scroll y mostrar/ocultar el header
  useEffect(() => {
    let timeout = null; // Controla el tiempo de inactividad del scroll

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Si el usuario está scrolleando hacia abajo, ocultamos el header
        setIsVisible(false);
      } else {
        // Si está scrolleando hacia arriba, mostramos el header
        setIsVisible(true);
      }

      // Actualizamos la última posición del scroll
      setLastScrollY(window.scrollY);

      // Clear any existing timeout
      if (timeout) {
        clearTimeout(timeout);
      }

      // Set a timeout to show the header again when user stops scrolling
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, 200); // Después de 200ms sin scroll, mostramos el header de nuevo
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`bg-newprimarycolor w-full z-10 font-dmsans fixed top-0 transition-transform duration-300 ${
        hasShadow ? 'shadow-none' : ''
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto px-4 flex justify-between md:justify-around items-center h-20">
          <Link className='text-white' to="/">
            <img src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Main/LogoPower.svg?t=2024-11-12T22%3A38%3A36.881Z" alt="" />
          </Link>
        <div className="flex items-center justify-center md:justify-center">
          <a href="/Power">
           
          </a>
        </div>

        {/* Icono de menú para dispositivos móviles */}
        <div className="md:hidden flex w-full justify-end">
          <button onClick={toggleMenu} className="focus:outline-none text-yellowprimary">
            <IoMenu size={40} />
          </button>
        </div>

        {/* Opciones de navegación */}
        

        {/* Botones de login y registro */}
        <div className='flex'>
          <div className="hidden md:flex items-center">
            <Link to="/AdminLogin" className="text-md font-bold border border-white hover:bg-blue-800 text-white px-4 py-2 rounded-xl ml-4">Reclutador</Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/Login" className="text-md font-bold bg-white hover:bg-yellow-200 text-primarycolor px-4 py-2 rounded-xl ml-4">Candidato</Link>
          </div>
        </div>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {showMenu && (
        <div className="md:hidden bg-[#003E9D] w-full">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            <Link to="/Empresas" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Empresas</Link>
            <Link to="/DescubriendoTalentos" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Descubriendo Talentos</Link>
            <Link to="/Coworking" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Coworking</Link>
            <Link to="/Power" className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Power</Link>
            <div className='w-full px-4 flex gap-4'>
              <Link to="/Login" className="bg-white hover:bg-blue-600 text-primarycolor font-bold py-2 px-4 rounded-lg mt-2 w-full">Candidato</Link>
              <Link to="/AdminLogin" className="bg-primarycolor hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2 w-full">Reclutador</Link>
            </div>
          </div>
        </div>
      )}
      {modalOpen && <Login closeModal={handleModalClose} />}
    </header>
  );
}

export default HeaderPower;
