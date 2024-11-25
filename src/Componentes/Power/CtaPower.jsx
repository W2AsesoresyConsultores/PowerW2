import React from 'react';

const CtaPower = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen p-4 bg-white md:px-20 font-dmsans">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">¿Cómo empezar?</h1>
        <p className="text-gray-600 mb-8">
          Dedique menos tiempo a monitorear los horarios y los días libres. El sistema de tiempo y asistencia de Zoho People le permite concentrarse en la productividad de los empleados mientras realiza un seguimiento preciso de las horas de trabajo y brinda informes sin errores.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Realice un seguimiento de la asistencia con facilidad.</span>
          </div>
          <div className="flex items-center">
            <svg className="h-6 w-6 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Programe los turnos sin problemas.</span>
          </div>
          <div className="flex items-center">
            <svg className="h-6 w-6 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Monitoree los días libres de forma eficiente.</span>
          </div>
          <div className="flex items-center">
            <svg className="h-6 w-6 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Convierta el tiempo en planillas de horas trabajadas.</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className="relative">
          <img src="https://example.com/image.jpg" alt="Woman using mobile phone" className="w-full h-auto rounded-lg shadow-lg" />
          <div className="absolute top-4 right-4 bg-white rounded-lg px-4 py-2 shadow-md">
            <p className="text-gray-700 font-bold">Check-Out</p>
            <p className="text-gray-700">07:53:34 Hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaPower;