import React, { useState } from 'react';

const sedes = [
  {
    id: 1,
    nombre: "SEDE LIMA CENTRO",
    direccion: "Av. Uruguay 514 Cerrado de Lima",
    imagen: "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/sedes/sede1.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15608.867979462078!2d-77.013269!3d-12.0285769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf582a17fa43%3A0x83b92ceaf0d841f2!2sSelecci%C3%B3n%20de%20Personal%20%7C%20W2%20Consultores%20%7C%20Head%20Huntig!5e0!3m2!1ses-419!2spe!4v1724678046398!5m2!1ses-419!2spe"
  },
  {
    id: 2,
    nombre: "SEDE CALLAO",
    direccion: "Av. Mariscal Óscar R. Benavides 3866-4470 (Mall Plaza)",
    imagen: "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/sedes/sede3.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...tu_mapa_callao"
  },
  {
    id: 3,
    nombre: "SEDE SAN JUAN DE LURIGANCHO",
    direccion: "Av. Próceres De la Independencia 3023-3043",
    imagen: "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/sedes/sede1.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...tu_mapa_san_juan"
  }
];

const Sedes = () => {
  const [selectedSede, setSelectedSede] = useState(null);

  const handleOpenMap = (map) => {
    setSelectedSede(map);
  };

  const handleCloseMap = () => {
    setSelectedSede(null);
  };

  return (
    <div className="container mx-auto my-10 p-4">
      <h2 className="text-4xl font-bold text-center mb-6">Conoce nuestras sedes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sedes.map(sede => (
          <div key={sede.id} className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img src={sede.imagen} alt={sede.nombre} className="w-full h-60 object-cover" />
            <div className="p-4 bg-white-100">
              <h3 className="text-2xl font-semibold">{sede.nombre}</h3>
              <p className="text-gray-700">{sede.direccion}</p>
              <button 
                onClick={() => handleOpenMap(sede.mapa)} 
                className="mt-4 bg-[#2552a4] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Explora esta sede
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedSede && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
            <iframe 
              src={selectedSede} 
              width="100%" 
              height="400" 
              className="rounded-lg"
              title="Mapa de ubicación"
            ></iframe>
            <button 
              onClick={handleCloseMap} 
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sedes;