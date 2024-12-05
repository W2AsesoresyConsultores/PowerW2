import React, { useState } from "react";

const ImageSlide = ({ image, title, address, onButtonClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="sedes"
      className="relative w-full max-w-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-[250px] transition-transform duration-700 ease-in-out ${isHovered ? 'translate-x-[100%] translate-y-[-100%]' : 'translate-x-0 translate-y-0'}`}
      />
      <div className={`absolute top-0 left-0 w-full h-full bg-[#2f4daa] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-white text-xl font-bold">{title}</p>
        <p className="text-white text-base font-inter">{address}</p>
        <button
          type="button"
          className="mt-4 bg-white text-[#2f4daa] px-4 py-2 rounded-lg font-source font-semibold"
          onClick={onButtonClick}
        >
          Abrir Ubicación
        </button>
      </div>
    </div>
  );
};

function Sedes() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMap, setSelectedMap] = useState("");

  const sedes = [
    {
      title: "Sede Lima Centro",
      address: "Av. Uruguay 514 Cerrado de Lima",
      image:
        "https://www.infobae.com/resizer/v2/MOIUY4X42REJ5JYDG4MAK6LMRI.jpg?auth=a8aead889d4bd3edcd9254c7422f4b9d455897766b17b0bf5bd6cad2e5865f71&smart=true&width=1200&height=900&quality=85",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15608.867979462078!2d-77.013269!3d-12.0285769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf582a17fa43%3A0x83b92ceaf0d841f2!2sSelecci%C3%B3n%20de%20Personal%20%7C%20W2%20Consultores%20%7C%20Head%20Huntig!5e0!3m2!1ses-419!2spe!4v1724678046398!5m2!1ses-419!2spe",
    },
    {
      title: "Sede Miraflores",
      address: "Av. Pardo 1234, Miraflores, Lima",
      image:
        "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/sedes/sede3.jpg",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.587812345919!2d-77.0368614!3d-12.1198875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c862a17e5b43%3A0x91b34cf5fd8b476f!5e0!3m2!1ses-419!2spe!4v1724678046398!5m2!1ses-419!2spe",
    },
    {
      title: "Sede San Isidro",
      address: "Calle Los Sauces 765, San Isidro",
      image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RTSKIE7VL5ADLPQK25U4GIY6VE.jpg",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.687812345919!2d-77.0378614!3d-12.0998875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c862a18e5b43%3A0x91b34cf5fd8b476f!5e0!3m2!1ses-419!2spe!4v1724678046398!5m2!1ses-419!2spe",
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-8 py-12 2xl:py-16 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 font-dmsans">
        <h3 className="text-3xl font-bold text-[#2f4eab] sm:text-4xl xl:text-5xl font-source text-center">
          Conoce Nuestras Sedes
        </h3>
        <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 sm:max-md:justify-items-center md:grid-cols-2 md:justify-items-start md:gap-6 lg:grid-cols-3">
          {sedes.map((sede, index) => (
            <div key={index} className="flex flex-col w-80 items-start mx-auto gap-6 overflow-hidden rounded-xl border border-slate-200 max-h-[250px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <ImageSlide 
                image={sede.image} 
                title={sede.title} 
                address={sede.address} 
                onButtonClick={() => {
                  setSelectedMap(sede.mapLink);
                  setShowModal(true);
                }} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className={`bg-white rounded-lg shadow-lg h-[80%] w-11/12 max-w-3xl transform transition-transform duration-300 ${showModal ? "scale-100" : "scale-90"}`}>
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h4 className="text-xl font-semibold">Ubicación</h4>
            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          <div className="p-6 h-[90%]">
            <iframe
              src={selectedMap}
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="border rounded-md w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sedes;