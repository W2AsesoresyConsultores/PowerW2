import React from 'react';

const TeEsperando = () => {
    return (
        <div className="bg-[#2f4daa] p-12 shadow-md flex flex-col md:flex-row justify-between items-start md:px-28">
          <div>
            <h1 className="text-2xl font-bold text-white font-inter">¡Te estamos esperando!</h1>
            <p className="text-3xl text-white font-source">
              Postula con nosotros y súmate a los #Dicars.
            </p>
          </div>
          <a
            href="#ofertas"
            className="mt-4 md:mt-0 bg-[#2f4daa] border-2 border-white text-white  font-bold py-3 px-8 rounded-full hover:bg-gray-200 hover:text-[#2f4daa] transition font-source text-xl"
          >
            Postula Aquí
          </a>
        </div>
      );
    };

export default TeEsperando;