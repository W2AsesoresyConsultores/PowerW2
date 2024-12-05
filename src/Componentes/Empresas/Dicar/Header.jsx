import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Cierra el menú en móviles
    }
  };

  return (
    <header className="fixed top-0 w-full flex items-center justify-between md:justify-around px-8 py-4 bg-white shadow-md z-50 font-inter text-md font-light">
      {/* Logo */}
      <a
  href="#"
  onClick={(e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    window.history.replaceState(null, null, "/Dicar"); // Limpia el hash
    window.location.reload(); // Recarga la página
  }}
  className="text-lg font-bold"
>
  <img
    src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/footer/logo-header.png"
    alt="Logo"
    className="h-10"
  />
</a>

      {/* Menú de navegación */}
      <nav className="hidden md:flex gap-12 text-gray-700">
        {[
          { name: '¿Quiénes somos?', id: 'nosotros' },
          { name: 'Ofertas', id: 'ofertas' },
          { name: 'Beneficios', id: 'beneficios' },
          { name: 'Sedes', id: 'sedes' },
          { name: 'Testimonios', id: 'testimonios' },
        ].map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            onClick={() => handleScroll(item.id)}
            className="relative group transition text-gray-900 hover:text-[#2552a4]"
          >
            {item.name}

            {/* Línea azul debajo del texto al hacer hover */}
            <span
              className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#2552a4] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </a>
        ))}
      </nav>

      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-[#2552a4] focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10">
          <nav className="flex flex-col items-center gap-6 py-4 text-gray-700 font-semibold">
            {[
              { name: '¿Quiénes somos?', id: 'nosotros' },
              { name: 'Ofertas', id: 'ofertas' },
              { name: 'Beneficios', id: 'beneficios' },
              { name: 'Sedes', id: 'sedes' },
              { name: 'Testimonios', id: 'testimonios' },
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                onClick={() => handleScroll(item.id)}
                className="hover:text-[#2552a4] transition w-full text-center py-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
