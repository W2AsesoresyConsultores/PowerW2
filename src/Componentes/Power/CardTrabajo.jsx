import React, { useState, useEffect } from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BsArrowRightCircle } from "react-icons/bs";
import { supabase } from "../../supabase/supabase.config";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import dayjs from "dayjs"; 
import 'dayjs/locale/es'; // Importar el idioma español
import relativeTime from 'dayjs/plugin/relativeTime';

function CardTrabajo({ job, onSelectJob, isSelected }) {
  const { puesto, modalidad, ubicacion, empresa, descripcion, id_reclutador, fecha_publicacion, empresa_img_url } =
    job;

  const [nombreReclutador, setNombreReclutador] = useState("");

  // Función para obtener el nombre del reclutador desde la tabla perfiles
  const fetchNombreReclutador = async () => {
    const { data, error } = await supabase
      .from("perfiles")
      .select("nombre")
      .eq("id", id_reclutador)
      .single(); // Solo esperamos un resultado

    if (error) {
      console.error("Error fetching recruiter name:", error);
    } else {
      setNombreReclutador(data?.nombre || "Reclutador no encontrado");
    }
  };

  useEffect(() => {
    if (id_reclutador) {
      fetchNombreReclutador();
    }
  }, [id_reclutador]);

  dayjs.extend(relativeTime);
  dayjs.locale('es'); // Configurar dayjs para usar español
  
  // Obtener el tiempo en formato "hace X tiempo" y capitalizar la primera letra
  const timeAgo = dayjs(job.fecha_publicacion).fromNow();
  const capitalizedTimeAgo = timeAgo.charAt(0).toUpperCase() + timeAgo.slice(1);


  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => onSelectJob(job)}
        className={`w-full md:w-[90%] text-left border hover:shadow-sm hover:transition-all hover:duration-200 rounded-lg p-6 overflow-hidden flex justify-between items-center ${
          isSelected ? "bg-[#f1f5f9]" : "bg-white"
        }`}
      >
        <div className="flex flex-col space-y-2 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-between w-full text-primarycolor">
              <div className="flex items-center space-x-2">
              <div className="rounded-lg w-12 h-12">
                <img src={empresa_img_url} className="w-full h-full rounded-lg" alt="" />
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-800 font-source">
                  {empresa}
                </h3>
                <p className="text-sm text-gray-500 font-inter">{nombreReclutador}</p>{" "}
                {/* Aquí se muestra el nombre del reclutador */}
              </div>
              </div>
              <FaBookmark size={20} />
            </div>
          </div>
          <h4 className="font-bold text-lg leading-tight text-gray-900 font-source">
            {puesto}
          </h4>
          <p className="text-sm text-gray-600 font-inter">
            {descripcion} <span className="text-blue-500">Ver más</span>
          </p>
          <div className="flex space-x-2 justify-between">
            <div className="flex space-x-2 font-inter">
              {modalidad && (
              <span className="bg-blue-50 text-gray-700 py-1 px-3 text-xs rounded-full font-regular tracking-wide gap-1 flex items-center">
                <MdOutlineMapsHomeWork /> {modalidad}
              </span>
            )}
            <span className="bg-purple-50 text-gray-700 py-1 px-3 text-xs rounded-full font-regular tracking-wide flex items-center gap-1">
            <IoLocationOutline />{ubicacion}
            </span>
            </div>
            
            <BsArrowRightCircle
          className={`text-3xl self-end ${
            isSelected ? "text-primarycolor" : "text-gray-400"
          }`}
        />
          </div>
          <div className="text-md flex items-center justify-between text-gray-600 gap-1">
              <span className="text-[12px]">{capitalizedTimeAgo}</span> 
              </div>
        </div>
        
      </button>
    </div>
  );
}

export default CardTrabajo;
