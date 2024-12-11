import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { Drawer, Slide, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function HeaderPower() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Controla si el header es visible
  const [lastScrollY, setLastScrollY] = useState(0); // Guarda la última posición de scroll

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
      className={`bg-newprimarycolor w-full z-10 fixed top-0 transition-transform duration-300 ${
        isVisible ? 'translate-y-0 shadow-sm' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto px-4 flex justify-between md:justify-around items-center h-20">
        <Link className="text-white" to="/">
          <img
            className="w-28"
            src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Main/logo%20power%20en%20positivo.png?t=2024-12-06T19%3A15%3A42.525Z"
            alt="Logo"
          />
        </Link>

        {/* Icono de menú para dispositivos móviles */}
        <div className="md:hidden flex w-full justify-end">
          <IconButton onClick={toggleMenu} className="text-white">
            <IoMenu size={40} className="text-white" />
          </IconButton>
        </div>

        {/* Botones de login y registro */}
        <div className="hidden md:flex font-inter items-center">
          <Link
            to="/AdminLogin"
            className="text-md font-bold border border-white hover:bg-white hover:text-primarycolor transition-colors duration-200 text-white px-6 py-2 rounded-full ml-4"
          >
            Reclutador
          </Link>
          <Link
            to="/Login"
            className="text-md font-bold hover:bg-white bg-yellowprimary text-primarycolor transition-colors duration-200 px-6 py-2 rounded-full ml-4"
          >
            Candidato
          </Link>
        </div>
      </div>

      {/* Menú móvil */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={toggleMenu}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#003E9D',
            width: '75%',
            padding: '1rem',
          },
        }}
      >
        <Slide in={menuOpen} direction="right">
          <div className="flex flex-col h-full">
            {/* Botón para cerrar el menú */}
            <div className="flex justify-end mb-6">
              <IconButton onClick={toggleMenu}>
                <CloseIcon className="text-white" fontSize="large" />
              </IconButton>
            </div>

            {/* Opciones del menú */}
            <nav className="flex flex-col space-y-6 text-white font-bold font-source text-xl">
              <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>
                Inicio
              </Link>
              <a
                href="https://w2asesoresyconsultores.com"
                className="hover:text-gray-300 font-bold font-source text-xl"
                
              >
                W2 Asesores y Consultores
              </a>
            </nav>

            {/* Botones de acciones */}
            <div className="mt-auto flex flex-col gap-4">
              <Link
                to="/Login"
                className="bg-white hover:bg-blue-600 text-primarycolor font-bold py-3 px-6 rounded-lg text-center"
                onClick={toggleMenu}
              >
                Candidato
              </Link>
              <Link
                to="/AdminLogin"
                className="bg-primarycolor hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-center"
                onClick={toggleMenu}
              >
                Reclutador
              </Link>
            </div>
          </div>
        </Slide>
      </Drawer>
    </header>
  );
}

export default HeaderPower;
