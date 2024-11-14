import React, { useState, useEffect } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp, IoLogoLinkedin } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabase.config';
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material';

const ShareModal = ({ selectedJob, onClose }) => {
  const navigate = useNavigate();
  const [idOferta, setIdOferta] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    console.log("Selected Job:", selectedJob);
  }, [selectedJob]);

  const fetchIdOferta = async () => {
    try {
      const { data, error } = await supabase
        .from('Oferta')
        .select('id_oferta')
        .eq('puesto', selectedJob.puesto)
        .single();

      if (error) {
        console.error("Error obteniendo id_oferta:", error);
        setIdOferta(null);
      } else {
        setIdOferta(data?.id_oferta);
      }
    } catch (err) {
      console.error("Error en la consulta de id_oferta:", err);
    }
  };

  useEffect(() => {
    if (selectedJob?.puesto) {
      fetchIdOferta();
    }
  }, [selectedJob]);

  const shareOnWhatsApp = (event) => {
    event.preventDefault();
    window.open(
      `https://wa.me/?text=${encodeURIComponent(
        `Hola, te puede interesar este puesto de trabajo: ${selectedJob.puesto}. Aquí tienes el enlace: https://powerw2.com/Share?id=${idOferta}`
      )}`,
      '_blank'
    );
  };

  const shareOnFacebook = (event) => {
    event.preventDefault();
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        `https://powerw2.com/Share?id=${idOferta}`
      )}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = (event) => {
    event.preventDefault();
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        `https://powerw2.com/Share?id=${idOferta}`
      )}&title=${encodeURIComponent(`Puesto de trabajo: ${selectedJob.puesto}`)}`,
      '_blank'
    );
  };

  const copyLink = (event) => {
    event.preventDefault();
    const link = `https://powerw2.com/Share?id=${idOferta}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopySuccess(true);
    }).catch(() => {
      alert('Error al copiar el enlace');
    });
  };

  const handleAccept = () => {
    navigate('/Admin');
  };

  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 3 }}>
          <strong>Compartir este Puesto</strong>
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{ mb: 4 }}>
          <strong>¡Es hora de encontrar al candidato perfecto!</strong>
          <br />
          Comparte el puesto de "{selectedJob.puesto}" en tus redes sociales o contactos interesados.
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <Box display="flex" justifyContent="space-around" width="100%" mb={3} sx={{ px: 5 }}>
  <Button
    color="primary"
    onClick={shareOnWhatsApp}
    disabled={!idOferta}
    startIcon={<IoLogoWhatsapp size={24} style={{ color: '#25D366' }} />}
    sx={{ color: 'black', flex: 1, mx: 1 }} // Ajuste aquí
  >
    WhatsApp
  </Button>
  <Button
    color="primary"
    onClick={shareOnFacebook}
    disabled={!idOferta}
    startIcon={<FaFacebookF size={24} style={{ color: '#1877F2' }} />}
    sx={{ color: 'black', flex: 1, mx: 1 }} // Ajuste aquí
  >
    Facebook
  </Button>
</Box>
<Box display="flex" justifyContent="space-around" width="100%" sx={{ px: 5 }}>
  <Button
    color="primary"
    onClick={shareOnLinkedIn}
    disabled={!idOferta}
    startIcon={<IoLogoLinkedin size={24} style={{ color: '#0077B5' }} />}
    sx={{ color: 'black', flex: 1, mx: 1 }} // Ajuste aquí
  >
    LinkedIn
  </Button>
  <Button
    color="primary"
    onClick={copyLink}
    disabled={!idOferta}
    startIcon={<MdContentCopy size={24} style={{ color: '#000000' }} />}
    sx={{ color: 'black', flex: 1, mx: 1 }} // Ajuste aquí
  >
    Copiar Enlace
  </Button>
</Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box display="flex" justifyContent="center" width="100%" mb={3}>
          <Button onClick={handleAccept} color="primary" variant="contained">
            Aceptar
          </Button>
        </Box>
      </DialogActions>
      <Snackbar
        open={copySuccess}
        autoHideDuration={2000}
        onClose={() => setCopySuccess(false)}
      >
        <Alert onClose={() => setCopySuccess(false)} severity="success">
          Enlace copiado al portapapeles
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default ShareModal;