import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { supabase } from "../../supabase/supabase.config";

const EmpresaSelector = ({ onEmpresaChange, empresaSeleccionada }) => {
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        const fetchEmpresas = async () => {
            const { data: empresasData, error } = await supabase
                .from('Empresa')
                .select('id_empresa, nombre_empresa, empresa_url'); // Incluye la URL de la imagen

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
        onEmpresaChange(empresaSeleccionada); // Propagar el cambio
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="select-empresa-label">Seleccionar Empresa</InputLabel>
            <Select
                labelId="select-empresa-label"
                value={empresaSeleccionada}
                onChange={handleChange}
                renderValue={(selectedValue) => {
                    const empresa = empresas.find(emp => emp.nombre_empresa === selectedValue);
                    return empresa ? (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img 
                                src={empresa.empresa_url} 
                                alt={empresa.nombre_empresa} 
                                style={{ width: 30, height: 30, marginRight: 10, borderRadius: '50%' }} 
                            />
                            {empresa.nombre_empresa}
                        </div>
                    ) : selectedValue;
                }}
            >
                {empresas.map((empresa) => (
                    <MenuItem key={empresa.id_empresa} value={empresa.nombre_empresa}>
                        <ListItemIcon>
                            <img 
                                src={empresa.empresa_url} 
                                alt={empresa.nombre_empresa} 
                                style={{ width: 30, height: 30, borderRadius: '50%' }} 
                            />
                        </ListItemIcon>
                        <ListItemText primary={empresa.nombre_empresa} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default EmpresaSelector;
