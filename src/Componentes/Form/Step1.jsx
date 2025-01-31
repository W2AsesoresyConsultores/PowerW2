import React, { useState } from "react";
import { TextField, Button, Box, MenuItem, Select, FormControl, InputLabel, FormHelperText } from "@mui/material";

const Step1 = ({ data, handleChange, nextStep }) => {
    const [sueldoOption, setSueldoOption] = useState(""); // Estado para la opción de sueldo
    const [sueldoDesde, setSueldoDesde] = useState("");
    const [sueldoHasta, setSueldoHasta] = useState("");
    const [errors, setErrors] = useState({}); // Estado para manejar errores de validación

    // Maneja el cambio de la opción de sueldo
    const handleSueldoOptionChange = (event) => {
        const selectedOption = event.target.value;
        setSueldoOption(selectedOption);
        handleChange({ target: { name: "sueldo", value: "" } });
        setSueldoDesde("");
        setSueldoHasta("");
    };

    const handleKeyDown = (event, name) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const newText = data[name] ? data[name] + ".\n" : ".\n";
            handleChange({ target: { name, value: newText } });
        }
    };

    const handleSueldoFijoChange = (event) => {
        handleChange(event);
    };

    const handleSueldoRangoChange = (event) => {
        const { name, value } = event.target;
        if (name === "sueldoDesde") {
            setSueldoDesde(value);
            handleChange({ target: { name: "sueldo", value: `${value} - ${sueldoHasta}` } });
        } else {
            setSueldoHasta(value);
            handleChange({ target: { name: "sueldo", value: `${sueldoDesde} - ${value}` } });
        }
    };

    // Validaciones de los campos
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
                onKeyDown={(event) => handleKeyDown(event, "descripcion")}
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
                <Select value={sueldoOption} onChange={handleSueldoOptionChange} displayEmpty>
                    <MenuItem value="" disabled>
                        Selecciona una opción
                    </MenuItem>
                    <MenuItem value="sueldoFijo">Sueldo Fijo</MenuItem>
                    <MenuItem value="sueldoRango">Sueldo Desde - Hasta</MenuItem>
                </Select>
            </FormControl>

            {/* Campos de sueldo dinámicos según la opción seleccionada */}
            {sueldoOption === "sueldoFijo" && (
                <TextField
                    label="Sueldo Fijo"
                    variant="outlined"
                    name="sueldo"
                    value={data.sueldo}
                    onChange={handleSueldoFijoChange}
                    fullWidth
                    required
                    margin="normal"
                    error={!!errors.sueldo}
                    helperText={errors.sueldo}
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
