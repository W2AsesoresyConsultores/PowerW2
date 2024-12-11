import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase.config"; // Importar cliente de Supabase
import { UserAuth } from "../../Context/AuthContext"; // Importar contexto de autenticación
import { MdOutlineVerifiedUser } from "react-icons/md";
import dayjs from "dayjs";
import "dayjs/locale/es"; // Importar el idioma español
import relativeTime from "dayjs/plugin/relativeTime";
import ShareButton from "../PowerAuth/ShareButton"; // Import the ShareButton component
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import InicioWhatsapp from "./InicioWhatsapp";

function InfoJobPower({ selectedJob }) {
  const { user } = UserAuth(); // Obtener información del usuario autenticado
  const [atBottom, setAtBottom] = useState(false);
  const [hasApplied, setHasApplied] = useState(false); // Estado para rastrear si el usuario ya se postuló
  const [nombreReclutador, setNombreReclutador] = useState(""); // Estado para el nombre del reclutador
  const [isInicioWhatsappOpen, setIsInicioWhatsappOpen] = useState(false);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  // Función para obtener el nombre del reclutador desde la tabla perfiles
  const fetchNombreReclutador = async () => {
    if (selectedJob) {
      const { data, error } = await supabase
        .from("perfiles")
        .select("nombre")
        .eq("id", selectedJob.id_reclutador)
        .single(); // Solo esperamos un resultado

      if (error) {
        console.error("Error fetching recruiter name:", error);
      } else {
        setNombreReclutador(data?.nombre || "Reclutador no encontrado");
      }
    }
  };

  useEffect(() => {
    fetchNombreReclutador(); // Llamar la función cuando selectedJob cambia
  }, [selectedJob]);

  useEffect(() => {
    const checkIfApplied = async () => {
      if (user && selectedJob) {
        const { data, error } = await supabase
          .from("Postulacion")
          .select("id_postulacion")
          .eq("user_id", user.id)
          .eq("id_oferta", selectedJob.id_oferta)
          .single();

        if (error && error.code !== "PGRST116") {
          console.error("Error checking if user has applied:", error.message);
        } else {
          setHasApplied(!!data); // Si hay datos, el usuario ya se ha postulado
        }
      }
    };

    checkIfApplied();
  }, [user, selectedJob]);

  if (!selectedJob) {
    return null; // Evitar renderizar si selectedJob es null
  }

  const jobDetails = [
    {
      title: "¿Por qué deberías unirte a nosotros?",
      content: (
        <ul>
          {selectedJob.beneficios
            .split(".")
            .map(
              (beneficio, index) =>
                beneficio.trim() && <li key={index}>{beneficio.trim()}</li>
            )}
        </ul>
      ),
    },
    {
      title: "¿Qué buscamos?",
      content: (
        <ul>
          {selectedJob.requisitos
            .split(".")
            .map(
              (requisito, index) =>
                requisito.trim() && <li key={index}>{requisito.trim()}</li>
            )}
        </ul>
      ),
    },
    {
      title: "¿Qué es lo que harás?",
      content: (
        <ul>
          {selectedJob.funciones
            .split(".")
            .map(
              (funcion, index) =>
                funcion.trim() && <li key={index}>{funcion.trim()}</li>
            )}
        </ul>
      ),
    },
    {
      title: "Horario de Trabajo",
      content: selectedJob.horario, // El horario se mantiene como texto simple
    },
  ];

  const whatsappBaseUrl = selectedJob.wtsp_url
    ? selectedJob.wtsp_url.split("?")[0]
    : "";
  const whatsappMessage = `Hola, estoy interesado en el puesto de ${selectedJob.puesto}`;
  const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Formatear la fecha de publicación a dd-mm-yyyy
  const formattedDate = dayjs(selectedJob.fecha_publicacion).format(
    "DD-MM-YYYY"
  );
  // Cargar el plugin y configurar el idioma español
  dayjs.extend(relativeTime);
  dayjs.locale("es");

  // Obtener el tiempo en formato "hace X tiempo" y capitalizar la primera letra
  const timeAgo = dayjs(selectedJob.fecha_publicacion).fromNow();
  const capitalizedTimeAgo = timeAgo.charAt(0).toUpperCase() + timeAgo.slice(1);

  return (
    <div
      className="selected-job-info custom-scrollbar w-full sm:w-3/5 rounded-lg md:flex flex-col p-8 mx-8 bg-white hidden transition-all duration-500 "
      style={{ height: "650px", overflowY: "auto" }}
    >
      <p className="text-gray-500 text-xs font-inter">{capitalizedTimeAgo}</p>
      <h2 className="font-bold text-3xl  text-newprimarycolor font-source">
        {selectedJob.puesto}
      </h2>
      <div className="flex items-center justify-between mb-4">
        
        <div className="flex items-center gap-4">
          <div className="rounded-lg w-12 h-12">
            <img
              src={selectedJob.empresa_img_url}
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 font-inter">
              {selectedJob.empresa}
            </p>
            <p className="text-xs text-gray-600 font-inter">{nombreReclutador}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <span className="bg-yellowprimary text-primarycolor py-1 px-3 text-xs rounded-full font-medium tracking-wide flex items-center gap-1 font-inter">
          <IoLocationOutline />
          {selectedJob.ubicacion}
        </span>
        <span className="bg-primarycolor text-white py-1 px-3 text-xs rounded-full font-medium tracking-wide gap-1 flex items-center font-inter">
          S/. {selectedJob.sueldo}
        </span>
      </div>

      <div className="flex mb-4 gap-4">
        <button
          className="font-bold py-2 px-4 rounded-full w-64 bg-[#0057c2] text-white font-source text-lg"
          onClick={() => navigate("/Login")} // Redirigir a /Login
        >
          Postularme
        </button>

        <div className="">
          <ShareButton selectedJob={selectedJob} />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-black font-inter text-lg">Descripción</h3>
        <p className="text-gray-800 text-base font-inter ml-2">
          {selectedJob.descripcion}
        </p>
        {jobDetails.map((detail, index) => (
          <div key={index} className="py-2">
            <div className="font-semibold text-black font-inter text-lg">{detail.title}</div>
            <div className="mt-2 text-gray-800 text-base font-inter ml-2">{detail.content}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="font-bold py-2 px-4 rounded-full w-64 bg-[#0057c2] text-white font-source text-lg"
          onClick={() => navigate("/Login")} // Redirigir a /Login
        >
          Postularme
        </button>
        {/* <button
          className="bg-[#00d35e] text-white font-bold py-2 px-4 rounded-full flex items-center"
          onClick={() => setIsInicioWhatsappOpen(true)} // Abrir el componente InicioWhatsapp
        >
          <IoLogoWhatsapp className="mr-2" size={24} />
          WhatsApp
        </button> */}
      </div>

      {isInicioWhatsappOpen && (
        <InicioWhatsapp onClose={() => setIsInicioWhatsappOpen(false)} />
      )}
    </div>
  );
}

export default InfoJobPower;
