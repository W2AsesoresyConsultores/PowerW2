import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const Step2 = ({ data, handleChange, nextStep, prevStep }) => {
    const [errors, setErrors] = useState({});

    const validateFields = () => {
        let newErrors = {};
        if (!data.requisitos) newErrors.requisitos = "Campo obligatorio";
        if (!data.funciones) newErrors.funciones = "Campo obligatorio";
        if (!data.beneficios) newErrors.beneficios = "Campo obligatorio";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateFields()) {
            nextStep();
        }
    };

    const handleKeyDown = (event, fieldName) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Previene el comportamiento por defecto
            handleChange({ target: { name: fieldName, value: data[fieldName] + '.\n' } });
        }
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 0, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
            <TextField
                label="Requisitos"
                variant="outlined"
                name="requisitos"
                value={data.requisitos}
                onChange={handleChange}
                onKeyDown={(event) => handleKeyDown(event, 'requisitos')}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                error={!!errors.requisitos}
                helperText={errors.requisitos || "Use viñetas separando por líneas para cada requisito"}
            />
            <TextField
                label="Funciones"
                variant="outlined"
                name="funciones"
                value={data.funciones}
                onChange={handleChange}
                onKeyDown={(event) => handleKeyDown(event, 'funciones')}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                error={!!errors.funciones}
                helperText={errors.funciones || "Use viñetas separando por líneas para cada función"}
            />
            <TextField
                label="Beneficios"
                variant="outlined"
                name="beneficios"
                value={data.beneficios}
                onChange={handleChange}
                onKeyDown={(event) => handleKeyDown(event, 'beneficios')}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                error={!!errors.beneficios}
                helperText={errors.beneficios || "Use viñetas separando por líneas para cada beneficio"}
            />
            <Box mt={3} display="flex" justifyContent="space-between">
                <Button variant="contained" color="secondary" onClick={prevStep}>
                    Anterior
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    Siguiente
                </Button>
            </Box>
        </Box>
    );
};

export default Step2;