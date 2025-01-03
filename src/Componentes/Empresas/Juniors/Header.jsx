import React from "react";

function Header() {
  return (
    <header className="w-full h-auto fixed top-0 z-20">
      <div className="w-full h-8 bg-primarycolor">

      </div>
      <nav className="flex items-center justify-around px-6 py-4 shadow-sm font-inter bg-white">
{/* Logo */}
<div className="flex items-center">
        <img
          src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Juniors/juniorsBlue.svg"
          alt="Logo"
          className="w-36"
        />
      </div>

      {/* Menu */}
      <nav className="hidden md:flex space-x-6 text-gray-700 bg-white">
        <a href="#" className="hover:text-[#0069ff] hover:bg-[#eef2fa] px-4 py-1 rounded-full transition-colors duration-900">
          Producto
        </a>
        <a href="#" className="hover:text-[#0069ff]">
          Soluciones
        </a>
        <a href="#" className="hover:text-[#0069ff]">
          Developers
        </a>
        <a href="#" className="hover:text-[#0069ff]">
          Partners
        </a>
        <a href="#" className="hover:text-[#0069ff]">
          Precios
        </a>
      </nav>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-[#0069ff] text-white rounded-full hover:bg-blue-500 font-semibold">
          Cotizar Web
        </button>
      </div>
      </nav>
      
    </header>
  );
}

export default Header;
