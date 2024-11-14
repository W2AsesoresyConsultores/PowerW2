import React, { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Link,
} from "@mui/material";

function InicioWhatsapp({ onClose }) {
  const { signInWithGoogle } = UserAuth();
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          position: "relative",
          maxWidth: 400,
          width: "90%",
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={closeModal}
        >
          <IoMdClose />
        </IconButton>
        <Typography variant="h5" align="center" mb={2} sx={{ fontWeight: 'bold' }}>
          ¡Conoce el número del reclutador!
        </Typography>
        <Typography variant="body1" align="center" mb={3}>
          Inicia sesión y postula fácilmente a todas las ofertas laborales que te interesen.
        </Typography>
        <Button
          onClick={signInWithGoogle}
          variant="contained"
          startIcon={<FcGoogle />}
          sx={{
            mb: 2,
            width: "100%",
            bgcolor: "white",
            color: "black",
            '&:hover': {
              bgcolor: '#f0f0f0',
            },
          }}
        >
          Continuar con Google
        </Button>
        <Typography variant="body2" align="center">
          ¿No tienes cuenta?
          <Link href="/Login" ml={1} color="primary">
            Regístrate
          </Link>
        </Typography>
      </Box>
    </Modal>
  );
}

export default InicioWhatsapp;