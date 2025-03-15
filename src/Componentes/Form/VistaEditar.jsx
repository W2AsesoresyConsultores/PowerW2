import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { useParams, Link } from 'react-router-dom'; // Asegúrate de importar Link
import { IoLocationOutline } from 'react-icons/io5';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // Importar el idioma español
import relativeTime from 'dayjs/plugin/relativeTime';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';

const Vista = () => {
    const { id_oferta } = useParams();
    const [jobData, setJobData] = useState(null);
    const [loading, setLoading] = useState(true);

    dayjs.extend(relativeTime);
    dayjs.locale('es');

    useEffect(() => {
        const fetchJob = async () => {
            const { data, error } = await supabase
                .from('Oferta')
                .select('*')
                .eq('id_oferta', id_oferta)
                .single();

            if (error) {
                console.error('Error fetching job:', error);
            } else {
                setJobData(data);
            }
            setLoading(false);
        };

        fetchJob();
    }, [id_oferta]);

    if (loading) return <div>Cargando...</div>;
    if (!jobData) return <div>No se encontró la oferta.</div>;

    // Formatear la fecha de publicación
    const formattedDate = dayjs(jobData.fecha_publicacion).format('DD-MM-YYYY');
    const timeAgo = dayjs(jobData.fecha_publicacion).fromNow();
    const capitalizedTimeAgo = timeAgo.charAt(0).toUpperCase() + timeAgo.slice(1);

    return (
        <div>
            <HeaderAdmin />
            <MenuAdmin />
        
            <div className="selected-job-info w-full max-w-[600px] mx-auto rounded-lg md:flex flex-col py-28 bg-white transition-all duration-500 font-dmsans">
                <p className="text-gray-500 text-xs font-inter">{capitalizedTimeAgo}</p>
                <h2 className="font-bold text-3xl text-newprimarycolor font-source">
                    {jobData.puesto}
                </h2>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <div className="rounded-lg w-12 h-12">
                            <img
                                src={jobData.empresa_img_url}
                                className="w-full h-full rounded-lg"
                                alt={jobData.empresa}
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800 font-inter">
                                {jobData.empresa}
                            </p>
                            <p className="text-xs text-gray-600 font-inter">{jobData.nombre_reclutador || 'Reclutador no encontrado'}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-yellowprimary text-primarycolor py-1 px-3 text-xs rounded-full font-medium tracking-wide flex items-center gap-1 font-inter">
                        <IoLocationOutline />
                        {jobData.ubicacion}
                    </span>
                    <span className="bg-primarycolor text-white py-1 px-3 text-xs rounded-full font-medium tracking-wide gap-1 flex items-center font-inter">
                        S/ {jobData.sueldo}
                    </span>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold text-black font-inter text-lg">Descripción</h3>
                    <p className="text-gray-800 text-base font-inter ml-2">
                        {jobData.descripcion}
                    </p>
                    <h3 className="font-semibold text-black font-inter text-lg mt-4">¿Por qué deberías unirte a nosotros?</h3>
                    <ul>
                        {jobData.beneficios.split('.').map((beneficio, index) => (
                            beneficio.trim() && <li key={index} className="text-gray-800 text-base font-inter ml-2">{beneficio.trim()}</li>
                        ))}
                    </ul>
                    <h3 className="font-semibold text-black font-inter text-lg mt-4">¿Qué buscamos?</h3>
                    <ul>
                        {jobData.requisitos.split('.').map((requisito, index) => (
                            requisito.trim() && <li key={index} className="text-gray-800 text-base font-inter ml-2">{requisito.trim()}</li>
                        ))}
                    </ul>
                    <h3 className="font-semibold text-black font-inter text-lg mt-4">¿Qué es lo que harás?</h3>
                    <ul>
                        {jobData.funciones.split('.').map((funcion, index) => (
                            funcion.trim() && <li key={index} className="text-gray-800 text-base font-inter ml-2">{funcion.trim()}</li>
                        ))}
                    </ul>
                    <h3 className="font-semibold text-black font-inter text-lg mt-4">Horario de Trabajo</h3>
                    <ul>
                        {jobData.horario.split('.').map((horario, index) => (
                            horario.trim() && <li key={index} className="text-gray-800 text-base font-inter ml-2">{horario.trim()}</li>
                        ))}
                    </ul>
                </div>

                {/* Botón de Editar */}
                <div className="mt-4">
                    <Link to={`/EditJob/${jobData.id_oferta}`}>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Editar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Vista;