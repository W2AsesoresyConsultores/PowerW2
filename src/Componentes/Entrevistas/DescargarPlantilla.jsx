import React from 'react';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

function DescargarPlantilla() {
  const url = 'https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/PlantillaExcel/Plantilla.xlsx';

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
      component="a"
      href={url}
      download="Plantilla.xlsx"
    >
      Plantilla
    </Button>
  );
}

export default DescargarPlantilla;