import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import ShareButton from "../PowerAuth/ShareButton"; // Ajusta la ruta según tu estructura
import ShareModal from "./ShareModal"; // Importa el componente ShareModal
import { UserAuth } from '../../Context/AuthContext';
import dayjs from "dayjs";
import "dayjs/locale/es"; // Importar idioma español
import relativeTime from "dayjs/plugin/relativeTime";
import { supabase } from "../../supabase/supabase.config"; // Ajusta la ruta según tu estructura
import { Box, Button } from "@mui/material";

const Preview = ({ 
    step1Data, 
    step3Data, 
    nombreReclutador, 
    onCancel 
}) => {
    const { user } = UserAuth();
    const [idEmpresa, setIdEmpresa] = useState(null); // Estado para id_empresa
    const [jobDetails, setJobDetails] = useState([]);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [createdJob, setCreatedJob] = useState(null);

    // Efecto para obtener id_empresa basado en user.id
    useEffect(() => {
        const fetchIdEmpresa = async () => {
            if (user?.id) {
                const { data: perfilData, error: perfilError } = await supabase
                    .from('perfiles')
                    .select('id_empresa')
                    .eq('user_id', user.id)
                    .single();

                if (perfilError) {
                    console.error('Error al obtener el id_empresa:', perfilError);
                } else {
                    setIdEmpresa(perfilData?.id_empresa);
                }
            }
        };

        fetchIdEmpresa();
    }, [user]);

    useEffect(() => {
        const details = [
            {
                title: "¿Por qué deberías unirte a nosotros?",
                content: (
                    <ul>
                        {step3Data.beneficios?.split(".").map((beneficio, index) => 
                            beneficio.trim() && <li key={index}>{beneficio.trim()}</li>
                        )}
                    </ul>
                ),
            },
            {
                title: "¿Qué buscamos?",
                content: (
                    <ul>
                        {step1Data.requisitos?.split(".").map((requisito, index) => 
                            requisito.trim() && <li key={index}>{requisito.trim()}</li>
                        )}
                    </ul>
                ),
            },
            {
                title: "¿Qué es lo que harás?",
                content: (
                    <ul>
                        {step1Data.funciones?.split(".").map((funcion, index) => 
                            funcion.trim() && <li key={index}>{funcion.trim()}</li>
                        )}
                    </ul>
                ),
            },
            {
                title: "Horario de Trabajo",
                content: step3Data.horario,
            },
        ];
        setJobDetails(details);
    }, [step1Data, step3Data]);

    // Formatear la fecha de publicación
    const formattedDate = dayjs(step1Data.fecha_publicacion).format("DD-MM-YYYY");
    dayjs.extend(relativeTime);
    dayjs.locale("es");
    const timeAgo = dayjs(step1Data.fecha_publicacion).fromNow();
    const capitalizedTimeAgo = timeAgo.charAt(0).toUpperCase() + timeAgo.slice(1);

    // Manejar la confirmación y subida de datos a Supabase
    const handleConfirm = async () => {
        setIsSubmitting(true);
        try {
            // Combinar datos de Step1 y Step3
            const newJobData = {
                puesto: step1Data.puesto,
                descripcion: step1Data.descripcion,
                requisitos: step1Data.requisitos,
                funciones: step1Data.funciones,
                ubicacion: step1Data.ubicacion,
                sueldo: step1Data.sueldo,
                empresa: step1Data.empresa,
                id_empresa: idEmpresa, // Usar id_empresa obtenido
                empresa_img_url: step1Data.empresa_img_url || null,
                modalidad: step3Data.modalidad,
                horario: step3Data.horario,
                beneficios: step3Data.beneficios,
                preg_1: step3Data.preg_1 || "",
                preg_2: step3Data.preg_2 || "",
                preg_3: step3Data.preg_3 || "",
                preg_4: step3Data.preg_4 || "",
                preg_5: step3Data.preg_5 || "",
                preg_6: step3Data.preg_6 || "",
                fecha_publicacion: new Date().toISOString(),
                id_reclutador: user?.id || null,
            };

            // Subir los datos a la tabla "Oferta" en Supabase
            const { data, error } = await supabase.from("Oferta").insert([newJobData]).select();

            if (error) {
                console.error("Error al subir la oferta:", error);
                alert("Ocurrió un error al subir la oferta. Inténtalo de nuevo.");
                setIsSubmitting(false);
                return;
            }

            const createdJobData = data[0];
            setCreatedJob(createdJobData);
            setIsShareModalOpen(true);
        } catch (err) {
            console.error("Error inesperado:", err);
            alert("Ocurrió un error inesperado. Inténtalo de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="selected-job-info w-full custom-scrollbar rounded-lg md:flex flex-col px-8 py-4 mx-8 bg-[#ffffff] hidden transition-all duration-500 font-dmsans"
            style={{ height: "610px", overflowY: "auto" }}
        >
            <p className="text-gray-500 text-xs font-inter">{capitalizedTimeAgo}</p>
            <h2 className="font-bold text-3xl text-newprimarycolor font-source">
                {step1Data.puesto}
            </h2>

            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <div className="rounded-lg w-12 h-12">
                        <img
                            src={step1Data.empresa_img_url}
                            className="w-full h-full rounded-lg"
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-800 font-inter">
                            {step1Data.empresa}
                        </p>
                        <p className="text-xs text-gray-600 font-inter">{nombreReclutador}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-2 mb-4">
                <span className="bg-yellowprimary text-primarycolor py-1 px-3 text-xs rounded-full font-medium tracking-wide flex items-center gap-1 font-inter">
                    <IoLocationOutline />
                    {step1Data.ubicacion}
                </span>
                <span className="bg-primarycolor text-white py-1 px-3 text-xs rounded-full font-medium tracking-wide gap-1 flex items-center font-inter">
                    S/. {step1Data.sueldo}
                </span>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold text-black font-inter text-lg">Descripción</h3>
                <p className="text-gray-800 text-base font-inter ml-2">
                    {step1Data.descripcion}
                </p>
                {jobDetails.map((detail, index) => (
                    <div key={index} className="py-2">
                        <div className="font-semibold text-black font-inter text-lg">{detail.title}</div>
                        <div className="mt-2 text-gray-800 text-base font-inter ml-2">{detail.content}</div>
                    </div>
                ))}
            </div>

            {/* Botones de confirmación y cancelación */}
            <Box display="flex" justifyContent="space-between" mt={3}>
                <Button variant="outlined" color="secondary" onClick={onCancel} fullWidth sx={{ mr: 1 }}>
                    Cancelar
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleConfirm} 
                    fullWidth 
                    sx={{ ml: 1 }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Enviando..." : "Confirmar y Enviar"}
                </Button>
            </Box>

            {/* ShareModal */}
            {isShareModalOpen && createdJob && (
                <ShareModal
                    selectedJob={createdJob}
                    onClose={() => setIsShareModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Preview;