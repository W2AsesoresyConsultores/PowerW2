import React from 'react';
import 'tailwindcss/tailwind.css';

const CtaPower = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen p-4 bg-gray-100 md:px-20 font-dmsans">
      <div className="w-full md:w-1/2 flex flex-col text-center justify-center md:items-start md:text-left space-y-4 md:space-y-6 md:px-16">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-gray-800">
          Nuestros coaches <br />
          están listos para asesorarte <br />
        </h1>
        <p className="text-sm md:text-lg text-gray-600">
        Contamos con un equipo de profesionales expertos para ayudarte a conseguir el trabajo que deseas.
        </p>
        <li className="my-1 flex w-1/2 items-center text-gray-600">
               Asesoría y orientación de cv
            </li>
            <li className="my-1 flex w-1/2 items-center text-gray-600">
               Preparación para la entrevista
            </li>
            <li className="my-1 flex w-1/2 items-center text-gray-600">
               Desarrollo de habilidades blandas
            </li>
        <button className="bg-primarycolor text-white py-2 px-4 md:px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Chatear con un coach
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative w-full md:w-2/3 h-auto bg-primarycolor p-4 rounded-lg">
          
        </div>
      </div>
    </div>
  );
};

export default CtaPower;
