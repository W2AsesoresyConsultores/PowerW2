import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2f4eab] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <img
        src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/footer/logo-footer-2%20(1).png" // Reemplaza con el logo real
        alt="Logo Dicar"
        className="h-16 mb-4"
        />
      </div>
{/* Información de contacto */}
    <div className="text-start text-inter">
      <a href=""><p className="text-gray-300">¿Quiénes somos?</p></a>
      <a href="#ofertas"><p className="text-gray-300">Ofertas</p></a>
      <a href=""><p className="text-gray-300">Beneficios</p></a>
      <a href=""><p className="text-gray-300">Sedes</p></a>
    </div>

    {/* Iconos de redes sociales */}
    <div className="flex space-x-4 mt-6 md:mt-0">
      <a
        href="https://www.linkedin.com/company/dicar-logistic/?originalSubdomain=pe"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/dicarlogistic/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/dicarlogistic/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-xl"
      >
        <FaFacebook />
      </a>

    </div>
  </div>
</footer>
  );
};

export default Footer;