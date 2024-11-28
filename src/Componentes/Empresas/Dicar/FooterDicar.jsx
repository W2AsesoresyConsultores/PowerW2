import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function FooterDicar() {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-center">
        {/* Logo y descripción */}
        <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-[300px]">
          <img
            src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/footer/cropped-logo-dicar.png" 
            alt="Logo Dicar"
            className="h-16 mb-2" // Ajustar margen inferior aquí
          />
          <p className="text-gray-400 text-sm">Droguería & Distribuidora</p>
        </div>

        {/* Información de contacto */}
        <div className="text-center md:text-left">
        <h1 className="text-orange-500 text-3xl font-bold mb-2">Contáctanos</h1> {/* Ajustar margen inferior aquí */}
          <p className="text-gray-300">000 000 000</p>
          <p className="text-gray-300">Lima, Perú</p>
          <p className="text-gray-300">sitioweb@dicar.com</p>
          <br></br>
          <div className="flex space-x-4 mt-4"> {/* Ajustar margen superior aquí */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterDicar;