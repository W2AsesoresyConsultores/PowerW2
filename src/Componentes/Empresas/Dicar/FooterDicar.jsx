import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#2552a4] text-white">
      {/* Contenido del pie de página */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center py-4 px-4"><br/>
        {/* Logotipo */}
        <div className="flex items-center mb-4">
        <img
            src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/footer/logo-footer-2%20(1).png"
            alt="Cultura en el trabajo"
            className="rounded-lg shadow-lg object-cover w-full max-w-md" // Ajusta el tamaño aquí
            style={{ height: '50px' }} 
          />
        </div>

        {/* Enlaces y Redes Sociales */}
        <div className="text-center mb-4">
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-4 justify-center">
              <a href="#" className="hover:underline">Inicio</a>
              <a href="#" className="hover:underline">Ofertas</a>
              <a href="#" className="hover:underline">Nosotros</a>
              <a href="#" className="hover:underline">Beneficios</a>
              <a href="#" className="hover:underline">Sedes</a>
            </div>
        <div className="flex space-x-4 mt-4 justify-center" > {/* Ajustar margen superior aquí */}
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;