import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

const Preview = ({ step1Data, step2Data, step3Data, onConfirm, onCancel }) => {
    return (
        <Box
            sx={{
                p: 3,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 3,
                maxWidth: 600,
                mx: 'auto',
                my: 4,
                overflow: 'hidden', // Evitar que se salga el contenido
            }}
        >
            <Typography variant="h5" gutterBottom align="center">
                Previsualización de la Oferta
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Información General</Typography>
                    <Typography sx={{ wordWrap: 'break-word' }}>
                        Puesto: <strong>{step1Data.puesto}</strong>
                    </Typography>
                    <Typography sx={{ wordWrap: 'break-word' }}>
                        Descripción: {step1Data.descripcion}
                    </Typography>
                    <Typography sx={{ wordWrap: 'break-word' }}>
                        Requisitos: {step1Data.requisitos}
                    </Typography>
                    <Typography sx={{ wordWrap: 'break-word' }}>
                        Ubicación: {step1Data.ubicacion}
                    </Typography>
                    <Typography sx={{ wordWrap: 'break-word' }}>
                        Sueldo: {step1Data.sueldo}
                    </Typography>
                    <Typography sx={{ wordWrap: 'break-word' }}>
                        Funciones: {step1Data.funciones}
                    </Typography>
                    <Typography sx={{ wordWrap: 'break-word' }}>
                        Horario: {step3Data.horario}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6" sx={{ mt: 2 }}>Sobre el Trabajo</Typography>
                    <Typography sx={{ wordWrap: 'break-word' }}>
                        Modalidad: <strong>{step3Data.modalidad}</strong>
                    </Typography>
                    <Typography sx={{ wordWrap: 'break-word' }}>
                        Beneficios: {step3Data.beneficios}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h6" sx={{ mt: 2 }}>Preguntas para el Postulante</Typography>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Typography key={index} sx={{ wordWrap: 'break-word' }}>
                            Pregunta {index + 1}: <strong>{step3Data[`preg_${index + 1}`] || 'No especificada'}</strong>
                        </Typography>
                    ))}
                </Grid>
            </Grid>

            {/* Botones de confirmación y cancelación */}
            <Box display="flex" justifyContent="space-between" mt={3}>
                <Button variant="outlined" color="secondary" onClick={onCancel} fullWidth sx={{ mr: 1 }}>
                    Cancelar
                </Button>
                <Button variant="contained" color="primary" onClick={onConfirm} fullWidth sx={{ ml: 1 }}>
                    Confirmar y Enviar
                </Button>
            </Box>
        </Box>
    );
};

export default Preview;