import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import ShareButton from "../PowerAuth/ShareButton"; 
import ShareModal from "./ShareModal"; 
import { UserAuth } from '../../Context/AuthContext';
import dayjs from "dayjs";
import "dayjs/locale/es"; 
import relativeTime from "dayjs/plugin/relativeTime";
import { supabase } from "../../supabase/supabase.config"; 
import { Box, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const Preview = ({ 
    step1Data, 
    step3Data, 
    nombreReclutador, 
    onCancel 
}) => {
    const { user } = UserAuth();
    const [idEmpresa, setIdEmpresa] = useState(null); 
    const [empresaImgUrl, setEmpresaImgUrl] = useState(null); 
    const [jobDetails, setJobDetails] = useState([]);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [createdJob, setCreatedJob] = useState(null);
    const [empresas, setEmpresas] = useState([]);
    const [selectedEmpresa, setSelectedEmpresa] = useState(""); 

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
                    fetchNombreEmpresa(perfilData?.id_empresa);
                }
            }
        };

        fetchIdEmpresa();
    }, [user]);

    const fetchNombreEmpresa = async (id) => {
        if (id) {
            const { data: empresaData, error } = await supabase
                .from('Empresa')
                .select('nombre_empresa, empresa_url')
                .eq('id_empresa', id)
                .single();

            if (error) {
                console.error('Error al obtener el nombre de la empresa:', error);
            } else {
                step1Data.empresa = empresaData?.nombre_empresa || "";
                setEmpresaImgUrl(empresaData?.empresa_url || null);
            }
        }
    };

    useEffect(() => {
        const fetchEmpresas = async () => {
            const { data: empresasData, error } = await supabase
                .from('Empresa')
                .select('id_empresa, nombre_empresa, empresa_url'); 

            if (error) {
                console.error('Error al obtener las empresas:', error);
            } else {
                setEmpresas(empresasData);
            }
        };

        fetchEmpresas();
    }, []);

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

    const handleConfirm = async () => {
        setIsSubmitting(true);
        try {
            const newJobData = {
                puesto: step1Data.puesto,
                descripcion: step1Data.descripcion,
                requisitos: step1Data.requisitos,
                funciones: step1Data.funciones,
                ubicacion: step1Data.ubicacion,
                sueldo: step1Data.sueldo,
                empresa: step1Data.empresa,
                id_empresa: selectedEmpresa || idEmpresa,
                empresa_img_url: empresaImgUrl,
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

    const handleEmpresaChange = async (event) => {
        const empresaSeleccionada = event.target.value;
        setSelectedEmpresa(empresaSeleccionada);

        const { data: empresaData, error } = await supabase
            .from('Empresa')
            .select('empresa_url, nombre_empresa')
            .eq('id_empresa', empresaSeleccionada)
            .single();

        if (error) {
            console.error('Error al obtener la empresa_url:', error);
        } else {
            setEmpresaImgUrl(empresaData?.empresa_url || null);
            step1Data.empresa = empresaData?.nombre_empresa || ""; 
        }
    };

    const formattedDate = dayjs(step1Data.fecha_publicacion).format("DD-MM-YYYY");
    dayjs.extend(relativeTime);
    dayjs.locale("es");
    const timeAgo = dayjs(step1Data.fecha_publicacion).fromNow();
    const capitalizedTimeAgo = timeAgo.charAt(0).toUpperCase() + timeAgo.slice(1);

    return (
        <div className="selected-job-info w-full custom-scrollbar rounded-lg md:flex flex-col px-8 py-4 mx-8 bg-[#ffffff] hidden transition-all duration-500 font-dmsans" style={{ height: "610px", overflowY: "auto" }}>
            <p className="text-gray-500 text-xs font-inter">{capitalizedTimeAgo}</p>
            <h2 className="font-bold text-3xl text-newprimarycolor font-source">{step1Data.puesto}</h2>

            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <div className="rounded-lg w-12 h-12">
                        <img src={empresaImgUrl} className="w-full h-full rounded-lg" alt="" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-800 font-inter">{step1Data.empresa}</p>
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
                <p className="text-gray-800 text-base font-inter ml-2">{step1Data.descripcion}</p>
                {jobDetails.map((detail, index) => (
                    <div key={index} className="py-2">
                        <div className="font-semibold text-black font-inter text-lg">{detail.title}</div>
                        <div className="mt-2 text-gray-800 text-base font-inter ml-2">{detail.content}</div>
                    </div>
                ))}
            </div>

            {idEmpresa === 1 && (
                <div className="mb-4">
                    <FormControl fullWidth>
                        <InputLabel id="select-empresa-label">Seleccionar Empresa</InputLabel>
                        <Select
                            labelId="select-empresa-label"
                            value={selectedEmpresa}
                            onChange={handleEmpresaChange}
                        >
                            {empresas.map((empresa) => (
                                <MenuItem key={empresa.id_empresa} value={empresa.id_empresa}>
                                    {empresa.nombre_empresa} {/* Muestra el nombre de la empresa */}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            )}

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