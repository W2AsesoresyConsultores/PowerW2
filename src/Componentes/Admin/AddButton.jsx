import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { Button, Box } from '@mui/material';

function AddButton() {
  return (
    <Box className="flex space-x-4">
      {/* Botón para crear oferta */}
      <Box className="rounded-md bg-primarycolor items-center w-36 h-16 p-2 flex justify-center">
        <Link to="/AdminForm" className="no-underline w-full">
          <Button
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              width: '100%',
              textTransform: 'none',
            }}
            aria-label="Crear Oferta"
          >
            <FaPlus size={20} />
            <p className='font-semibold text-sm font-dmsans'>Crear Oferta</p>
          </Button>
        </Link>
      </Box>

      {/* Nuevo botón para Ofertas Compartidas */}
      <Box className="rounded-md bg-purple-400 items-center w-36 h-16 p-2 flex justify-center">
        <Link to="/OfertasCompartidas" className="no-underline w-full">
          <Button
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              width: '100%',
              textTransform: 'none',
            }}
            aria-label="Ofertas Compartidas"
          >
            <FaPlus size={20} />
            <p className='font-semibold text-sm font-dmsans'>Ofertas Compartidas</p>
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default AddButton;