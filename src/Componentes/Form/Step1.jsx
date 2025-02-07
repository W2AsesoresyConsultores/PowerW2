import React, { useState, useEffect } from "react";
import { TextField, Button, Box, MenuItem, Select, FormControl, InputLabel, FormHelperText, InputAdornment } from "@mui/material";

const Step1 = ({ data, handleChange, nextStep }) => {
    const [sueldoOption, setSueldoOption] = useState("");

    useEffect(() => {
        if (data.sueldo.includes("-")) {
            setSueldoOption("sueldoRango");
        } else if (data.sueldo.trim()) {
            setSueldoOption("sueldoFijo");
        }
    }, [data.sueldo]);

    const [sueldoDesde, setSueldoDesde] = useState("");
    const [sueldoHasta, setSueldoHasta] = useState("");
    const [errors, setErrors] = useState({});

    const handleSueldoOptionChange = (event) => {
        const selectedOption = event.target.value;
        setSueldoOption(selectedOption);
        handleChange({ target: { name: "sueldo", value: "" } });

        if (selectedOption === "sueldoRango") {
            setSueldoDesde("");
            setSueldoHasta("");
        }
    };

    const handleSueldoFijoChange = (event) => {
        const value = event.target.value.replace(/\D/g, ""); // Solo permite números
        handleChange({ target: { name: "sueldo", value } });
    };

    const handleSueldoRangoChange = (event) => {
        const { name, value } = event.target;
        const numericValue = value.replace(/\D/g, ""); // Solo permite números

        if (name === "sueldoDesde") {
            setSueldoDesde(numericValue);
            handleChange({ target: { name: "sueldo", value: `${numericValue} - ${sueldoHasta}` } });
        } else {
            setSueldoHasta(numericValue);
            handleChange({ target: { name: "sueldo", value: `${sueldoDesde} - ${numericValue}` } });
        }
    };

    const validateFields = () => {
        let newErrors = {};
        if (!data.puesto.trim()) newErrors.puesto = "Este campo es obligatorio";
        if (!data.descripcion.trim()) newErrors.descripcion = "Este campo es obligatorio";
        if (!data.ubicacion.trim()) newErrors.ubicacion = "Este campo es obligatorio";

        if (sueldoOption === "sueldoFijo" && !data.sueldo.trim()) {
            newErrors.sueldo = "Este campo es obligatorio";
        } else if (sueldoOption === "sueldoRango") {
            if (!sueldoDesde.trim()) newErrors.sueldoDesde = "Este campo es obligatorio";
            if (!sueldoHasta.trim()) newErrors.sueldoHasta = "Este campo es obligatorio";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNextStep = () => {
        if (validateFields()) {
            nextStep();
        }
    };

    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 0, p: 3, bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
            <TextField
                label="Puesto"
                variant="outlined"
                name="puesto"
                value={data.puesto}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                error={!!errors.puesto}
                helperText={errors.puesto}
            />
            <TextField
                label="Descripción"
                variant="outlined"
                name="descripcion"
                value={data.descripcion}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                error={!!errors.descripcion}
                helperText={errors.descripcion}
            />
            <TextField
                label="Lugar"
                variant="outlined"
                name="ubicacion"
                value={data.ubicacion}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                error={!!errors.ubicacion}
                helperText={errors.ubicacion}
            />

            {/* Selección de tipo de sueldo */}
            <FormControl fullWidth margin="normal">
                <InputLabel>Selecciona una opción</InputLabel>
                <Select value={sueldoOption} onChange={handleSueldoOptionChange}>
                    <MenuItem value="sueldoFijo">Sueldo Fijo</MenuItem>
                    <MenuItem value="sueldoRango">Sueldo Desde - Hasta</MenuItem>
                </Select>
            </FormControl>

            {/* Campos de sueldo con símbolo "S/." */}
            {sueldoOption === "sueldoFijo" && (
                <TextField
                    label="Ingrese Monto"
                    variant="outlined"
                    name="sueldo"
                    value={data.sueldo}
                    onChange={handleSueldoFijoChange}
                    fullWidth
                    required
                    margin="normal"
                    error={!!errors.sueldo}
                    helperText={errors.sueldo}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">S/.</InputAdornment>,
                    }}
                />
            )}

            {sueldoOption === "sueldoRango" && (
                <Box display="flex" alignItems="center" gap={2}>
                    <TextField
                        label="Desde"
                        variant="outlined"
                        name="sueldoDesde"
                        value={sueldoDesde}
                        onChange={handleSueldoRangoChange}
                        required
                        margin="normal"
                        sx={{ flex: 1 }}
                        error={!!errors.sueldoDesde}
                        helperText={errors.sueldoDesde}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">S/.</InputAdornment>,
                        }}
                    />
                    <span>-</span>
                    <TextField
                        label="Hasta"
                        variant="outlined"
                        name="sueldoHasta"
                        value={sueldoHasta}
                        onChange={handleSueldoRangoChange}
                        required
                        margin="normal"
                        sx={{ flex: 1 }}
                        error={!!errors.sueldoHasta}
                        helperText={errors.sueldoHasta}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">S/.</InputAdornment>,
                        }}
                    />
                </Box>
            )}

            <Box mt={3} display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary" onClick={handleNextStep}>
                    Siguiente
                </Button>
            </Box>
        </Box>
    );
};

export default Step1;
