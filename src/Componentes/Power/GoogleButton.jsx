import React from 'react';
import Button from '@mui/material/Button';
import { FcGoogle } from 'react-icons/fc';
import { UserAuth } from "../../Context/AuthContext"; // Importa el contexto de autenticación

function GoogleButton() {
  const { signInWithGoogle } = UserAuth(); // Obtiene la función de inicio de sesión de Google desde el contexto

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <Button
      variant="contained"
      startIcon={<FcGoogle />}
      style={{
        backgroundColor: '#fff',
        color: '#000',
        textTransform: 'none',
        fontWeight: 'bold',
      }}
      onClick={handleGoogleSignIn} // Ejecuta la autenticación cuando se hace clic en el botón
    >
      Continuar con Google
    </Button>
  );
}

export default GoogleButton;
