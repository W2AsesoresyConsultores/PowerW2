import React from 'react';

const CustomSuccessModal = ({ isVisible, onAccept }) => {
  if (!isVisible) return null;

  const handleAccept = () => {
    onAccept();
    window.location.reload(); // Recargar la página
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <div className="flex flex-col items-center">
          {/* Ícono de éxito */}
          <div className="bg-green-500 rounded-full p-4 mb-4">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>

          {/* Título */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            ¡Postulación enviada con éxito!
          </h2>

          {/* Descripción */}
          <p className="text-sm text-gray-500 mb-6">
            Gracias por tu interés. Hemos recibido tu postulación correctamente.
          </p>

          {/* Botón de aceptar */}
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-200 ease-in-out"
            onClick={handleAccept}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSuccessModal;