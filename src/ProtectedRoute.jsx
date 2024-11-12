import { Navigate } from 'react-router-dom';
import { UserAuth } from './Context/AuthContext'; // Ajusta la ruta según tu estructura de archivos
import { LinearProgress } from '@mui/material';
const ProtectedRoute = ({ children }) => {
  const { user, loading } = UserAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
          <div className="w-3/4 md:w-1/2">
            <LinearProgress 
              sx={{
                width: '80%',
                backgroundColor: '#e2e8f0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#2563eb',
                }
              }}
            />
          </div>
        </div>
    ); // Pantalla de carga personalizada
  }

  // Si no hay usuario y ya no está cargando, redirigir a la página de inicio
  if (!user) {
    return <Navigate to="/Power" replace />;
  }

  // Si el usuario está autenticado, renderizar el componente protegido
  return children;
};

export default ProtectedRoute;
