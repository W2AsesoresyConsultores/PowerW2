import React from "react";

function Hero() {
  return (
    <section
      className="bg-[#0069ff] text-white h-[550px] text-center py-20 px-6 relative"
      style={{
        backgroundImage: "url('https://www.digitalocean.com/_next/static/media/hero-background.a9bcc858.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-source">
          Diseñamos experiencias digitales<br />
          <span className="text-white">modernas y funcionales</span>
        </h1>
        <p className="text-md md:text-md text-gray-200 mb-8 font-inter md:px-40">
          Tu sitio web es la puerta a tu marca. Creamos experiencias digitales únicas y enfocadas en resultados
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 flex items-center justify-center gap-2">
            
            Sign up with Google
          </button>
          <button className="bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 flex items-center justify-center gap-2">
            
            Sign up with GitHub
          </button>
        </div>
      </div>
      <img className="w-4/7 mx-auto mt-16 rounded-xl" src="https://www.digitalocean.com/api/static-content/v1/images?src=%2F_next%2Fstatic%2Fmedia%2Fhero-gpu-droplets-preview.31c5d655.svg&width=1200" alt="" />
    </section>
  );
}

export default Hero;
