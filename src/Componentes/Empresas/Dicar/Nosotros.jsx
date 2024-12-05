import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import "../../../Nosotros.css";

const Nosotros = () => {
  return (
    <div id="nosotros" className="bg-white py-16 px-4 md:px-16">
      {/* Título general */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#2f4eab] sm:text-4xl xl:text-5xl font-source">
            El éxito se construye con el mejor talento
        </h1>
      </div>

      <div className="relative w-full flex justify-center">
  <div className="player-wrapper rounded-lg overflow-hidden shadow-lg">
    <Plyr
      source={{
        type: "video",
        sources: [
          {
            src: "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/sedes/talanaremu.mp4?t=2024-12-04T22%3A25%3A53.063Z",
            type: "video/mp4",
          },
        ],
      }}
      options={{
        controls: [
          "play-large", // Botón grande de reproducción
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
        settings: ["quality", "speed"], // Opciones de configuración
        theme: { primary: "#FF5733" }, // Cambiar el color principal
      }}
    />
  </div>
</div>
    </div>
  );
};

export default Nosotros;