import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import ShareButton from "../PowerAuth/ShareButton"; // Asegúrate de ajustar la ruta
import QuestionsModal from "../PowerAuth/QuestionsModal"; // Asegúrate de ajustar la ruta
import dayjs from "dayjs";
import "dayjs/locale/es"; // Importar el idioma español
import relativeTime from "dayjs/plugin/relativeTime";
import { Box, Button } from '@mui/material'; // Importar Box y Button de MUI

const Preview = ({ step1Data, step3Data, hasApplied, setIsQuestionsModalOpen, isQuestionsModalOpen, nombreReclutador, onConfirm, onCancel }) => {
    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        const details = [
            {
                title: "¿Por qué deberías unirte a nosotros?",
                content: (
                    <ul>
                        {step3Data.beneficios.split(".").map((beneficio, index) => 
                            beneficio.trim() && <li key={index}>{beneficio.trim()}</li>
                        )}
                    </ul>
                ),
            },
            {
                title: "¿Qué buscamos?",
                content: (
                    <ul>
                        {step1Data.requisitos.split(".").map((requisito, index) => 
                            requisito.trim() && <li key={index}>{requisito.trim()}</li>
                        )}
                    </ul>
                ),
            },
            {
                title: "¿Qué es lo que harás?",
                content: (
                    <ul>
                        {step1Data.funciones.split(".").map((funcion, index) => 
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

            <div className="flex mb-4 gap-4">
                <button
                    className={`font-bold py-2 px-4 rounded-full w-64 font-source text-lg ${
                        hasApplied
                            ? "bg-yellow-200 text-primarycolor cursor-not-allowed"
                            : "bg-[#0057c2] text-white"
                    }`}
                    onClick={hasApplied ? null : () => setIsQuestionsModalOpen(true)}
                    disabled={hasApplied}
                >
                    {hasApplied ? "Ya has postulado" : "Postularme"}
                </button>

                <div className="">
                    <ShareButton selectedJob={step1Data} />
                </div>
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

            <div className="flex justify-center mt-4">
                <button
                    className={`font-bold py-2 px-4 rounded-full w-64 font-source text-lg ${
                        hasApplied
                            ? "bg-gray-500 text-white cursor-not-allowed"
                            : "bg-[#0057c2] text-white"
                    }`}
                    onClick={hasApplied ? null : () => setIsQuestionsModalOpen(true)}
                    disabled={hasApplied}
                >
                    {hasApplied ? "Ya has postulado" : "Postularme"}
                </button>
            </div>

            {/* Botones de confirmación y cancelación */}
            <Box display="flex" justifyContent="space-between" mt={3}>
                <Button variant="outlined" color="secondary" onClick={onCancel} fullWidth sx={{ mr: 1 }}>
                    Cancelar
                </Button>
                <Button variant="contained" color="primary" onClick={onConfirm} fullWidth sx={{ ml: 1 }}>
                    Confirmar y Enviar
                </Button>
            </Box>

            <QuestionsModal
                isOpen={isQuestionsModalOpen}
                onClose={() => setIsQuestionsModalOpen(false)}
                selectedJob={step1Data}
            />
        </div>
    );
};

export default Preview;