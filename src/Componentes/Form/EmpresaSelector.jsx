import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { supabase } from "../../supabase/supabase.config"; 

const EmpresaSelector = ({ onEmpresaChange, empresaSeleccionada }) => {
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        const fetchEmpresas = async () => {
            const { data: empresasData, error } = await supabase
                .from('Empresa')
                .select('id_empresa, nombre_empresa'); 

            if (error) {
                console.error('Error al obtener las empresas:', error);
            } else {
                setEmpresas(empresasData);
            }
        };

        fetchEmpresas();
    }, []);

    const handleChange = (event) => {
        const empresaSeleccionada = event.target.value;
        onEmpresaChange(empresaSeleccionada); // Propagate the change
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="select-empresa-label">Seleccionar Empresa</InputLabel>
            <Select
                labelId="select-empresa-label"
                value={empresaSeleccionada} // Use the prop value
                onChange={handleChange}
            >
                {empresas.map((empresa) => (
                    <MenuItem key={empresa.id_empresa} value={empresa.nombre_empresa}>
                        {empresa.nombre_empresa}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default EmpresaSelector;