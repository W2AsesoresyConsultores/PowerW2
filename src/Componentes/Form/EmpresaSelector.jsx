import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { supabase } from "../../supabase/supabase.config";

const EmpresaSelector = ({ onEmpresaChange, empresaSeleccionada }) => {
    const [empresas, setEmpresas] = useState([]);

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

    const handleChange = (event) => {
        const selectedId = event.target.value;
        const selectedEmpresa = empresas.find(emp => emp.id_empresa === selectedId);
        onEmpresaChange(selectedEmpresa); // Propagar el objeto completo
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="select-empresa-label">Seleccionar Empresa</InputLabel>
            <Select
                labelId="select-empresa-label"
                value={empresaSeleccionada ? empresaSeleccionada.id_empresa : ''} // Usar el id de la empresa
                onChange={handleChange}
                renderValue={(selectedValue) => {
                    const empresa = empresas.find(emp => emp.id_empresa === selectedValue);
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
                    <MenuItem key={empresa.id_empresa} value={empresa.id_empresa}>
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