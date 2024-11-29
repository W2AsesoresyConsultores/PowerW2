import React from 'react';
import { TextField } from '@mui/material';

function Buscador() {
  return (
    <div style={{ width: '400px' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Buscar ofertas laborales"
        InputProps={{
          style: {
            height: '50px', // Ajusta la altura del input si es necesario
            backgroundColor: 'white', // Fondo blanco
            borderRadius: '25px', // Bordes redondeados
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px', // Bordes redondeados para el contenedor
            '& fieldset': {
              borderColor: '#ccc', // Color del borde
            },
            '&:hover fieldset': {
              borderColor: '#aaa', // Color del borde al pasar el mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#2552a4', // Color del borde cuando está enfocado
            },
          },
        }}
      />
    </div>
  );
}

export default Buscador;