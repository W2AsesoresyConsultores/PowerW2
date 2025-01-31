import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlide = ({ image, title, address, onButtonClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-[250px] transition-transform duration-700 ease-in-out ${
          isHovered ? "translate-x-[100%] translate-y-[-100%]" : "translate-x-0 translate-y-0"
        }`}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#2f4daa] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white text-xl font-bold">{title}</p>
        <p className="mt-6 text-white text-base">{address}</p>
        <button
          type="button"
          className="mt-8 bg-white text-[#2f4daa] px-4 py-2 rounded-lg font-semibold"
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
      title: "Sede Lima - Chorillos",
      address: " Av. Guardia Peruana Nro. 1465 Int. 1 Urb. La Campiña",
      image:
        "https://www.infobae.com/resizer/v2/MOIUY4X42REJ5JYDG4MAK6LMRI.jpg?auth=a8aead889d4bd3edcd9254c7422f4b9d455897766b17b0bf5bd6cad2e5865f71&smart=true&width=1200&height=900&quality=85",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.985850680186!2d-76.9939165!3d-12.1813658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9ceda1f5e3b%3A0x510c341b89b731fe!2sAv.%20Guardia%20Peruana%201465%2C%20Lima%2015056!5e0!3m2!1ses-419!2spe!4v1738339343757!5m2!1ses-419!2spe",
    },
    {
      title: "Sede Lima - Chorillos",
      address: "Av. Guardia Civil Nro. 633A Urb. La Campiña Zona Cuatro",
      image:
        "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/sedes/sede3.jpg",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15600.659937641418!2d-76.99554884091542!3d-12.169168479882039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8346c703533%3A0xbd65754eedf20397!2sAv.%20Guardia%20Civil%20Sur%20633%2C%20Lima%2015054!5e0!3m2!1ses-419!2spe!4v1738339515165!5m2!1ses-419!2spe",
    },
    {
      title: "Sede Lima - Chorillos",
      address: "Av. El Sol Mza. N1 Lote 1C Urb. La Campiña",
      image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RTSKIE7VL5ADLPQK25U4GIY6VE.jpg",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.059379373963!2d-77.00227016588781!3d-12.17636064437529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9c8dc323e15%3A0xe5a088d47d8f3932!2sAv%20El%20Sol%2C%20Lima!5e0!3m2!1ses-419!2spe!4v1738339581112!5m2!1ses-419!2spe",
    },
    {
      title: "Sede Lima",
      address: "Jr. Paruro Nro. 721 Int. 401",
      image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RTSKIE7VL5ADLPQK25U4GIY6VE.jpg",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4735971927151!2d-77.02492563047592!3d-12.050786999261637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b064f6ccf7%3A0xdc082741ef2487a!2sJr.%20Paruro%20721%2C%20Lima%2015001!5e0!3m2!1ses-419!2spe!4v1738339653007!5m2!1ses-419!2spe",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Muestra 3 tarjetas por vista
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // En pantallas medianas, muestra 2
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // En móviles, muestra 1
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-12 2xl:py-16 max-w-screen-2xl mx-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 font-dmsans">
        <h3 className="font-source font-bold text-5xl text-[#2f4daa] text-center">
          Conoce Nuestras Sedes
        </h3>

        <div className="relative">
          <Slider {...settings} className="mt-8">
            {sedes.map((sede, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col w-full items-start mx-auto gap-6 overflow-hidden rounded-xl border border-slate-200 max-h-[250px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-lg h-[80%] w-11/12 max-w-3xl transform transition-transform duration-300">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h4 className="text-xl font-semibold">Ubicación</h4>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
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
      )}
    </>
  );
}

export default Sedes;
