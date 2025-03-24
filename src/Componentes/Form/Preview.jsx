import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { IoLocationOutline } from 'react-icons/io5';

const Preview = ({ open, onClose, data }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                    maxWidth: 600,
                    mx: 'auto',
                    mt: '10%',
                    maxHeight: '80vh', // Agregar altura máxima
                    overflowY: 'auto',  // Habilitar el scroll vertical
                }}
            >
                <h2 className="font-bold text-3xl text-newprimarycolor font-source">
                    {data.puesto}
                </h2>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <div className="rounded-lg w-12 h-12">
                            <img
                                src={data.empresa_url}
                                className="w-full h-full rounded-lg"
                                alt={data.empresa}
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800 font-inter">
                                {data.empresa}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-yellowprimary text-primarycolor py-1 px-3 text-xs rounded-full font-medium tracking-wide flex items-center gap-1 font-inter">
                        <IoLocationOutline />
                        {data.ubicacion}
                    </span>
                    <span className="bg-primarycolor text-white py-1 px-3 text-xs rounded-full font-medium tracking-wide gap-1 flex items-center font-inter">
                        S/ {data.sueldo}
                    </span>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold text-black font-inter text-lg">Descripción</h3>
                    <p className="text-gray-800 text-base font-inter ml-2">
                        {data.descripcion}
                    </p>
                    <h3 className="font-semibold text-black font-inter text-lg mt-4">¿Por qué deberías unirte a nosotros?</h3>
                    <ul>
                        {data.beneficios.split('\n').map((beneficio, index) => (
                            beneficio.trim() && <li key={index} className="text-gray-800 text-base font-inter ml-2">{beneficio.trim()}</li>
                        ))}
                    </ul>
                    <h3 className="font-semibold text-black font-inter text-lg mt-4">¿Qué buscamos?</h3>
                    <ul>
                        {data.requisitos.split('\n').map((requisito, index) => (
                            requisito.trim() && <li key={index} className="text-gray-800 text-base font-inter ml-2">{requisito.trim()}</li>
                        ))}
                    </ul>
                    <h3 className="font-semibold text-black font-inter text-lg mt-4">¿Qué es lo que harás?</h3>
                    <ul>
                        {data.funciones.split('\n').map((funcion, index) => (
                            funcion.trim() && <li key={index} className="text-gray-800 text-base font-inter ml-2">{funcion.trim()}</li>
                        ))}
                    </ul>
                    <h3 className="font-semibold text-black font-inter text-lg mt-4">Horario de Trabajo</h3>
                    <ul>
                        {data.horario.split('\n').map((horario, index) => (
                            horario.trim() && <li key={index} className="text-gray-800 text-base font-inter ml-2">{horario.trim()}</li>
                        ))}
                    </ul>
                </div>
                <Typography>
                    <strong>Preguntas para el Postulante:</strong>
                    <ul>
                        {data.questions.map((question, index) => (
                            <li key={index}>{question}</li>
                        ))}
                    </ul>
                </Typography>

                <Box display="flex" justifyContent="flex-end" mt={3}>
                    <Button onClick={onClose} variant="contained" sx={{ bgcolor: "#1E50A2", color: "white" }}>
                        Cerrar
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default Preview;