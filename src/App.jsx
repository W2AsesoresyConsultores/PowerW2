import { Routes, Route } from "react-router-dom";
import Power from "./Componentes/Power/Power.jsx";
import PowerAuth from "./Componentes/PowerAuth/PowerAuth.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { JobsProvider } from "./Context/JobsContext.jsx";
import { JobsProviderCompartido } from "./Context/JobsContextCompartido.jsx"; // Importa el nuevo proveedor
import Admin from "./Componentes/Admin/Admin.jsx";
import AdminForm from "./Componentes/Form/AdminForm.jsx";
import LoginAdmin from "./Componentes/Admin/LoginAdmin.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Profile from "./Componentes/Profile/Profile.jsx";
import PgPostulados from "./Componentes/Admin/PgPostulados.jsx";
import Share from "./Componentes/PowerAuth/Share.jsx";
import InfoJobMovil from "./Componentes/PowerAuth/InfoJobMovil.jsx";
import EditJob from "./Componentes/Form/EditJob.jsx";
import VistaEditar from "./Componentes/Form/VistaEditar.jsx";
import Login from './Componentes/Power/Login.jsx';
import RegisterAdmin from "./Componentes/Admin/RegisterAdmin.jsx";
import Conversaciones from "./Componentes/Admin/Conversaciones.jsx";
import Programa from "./Componentes/Entrevistas/Programa.jsx";
import Estadisticas from "./Componentes/Admin/Estadisticas.jsx";
import AdminProfile from "./Componentes/Admin/AdminProfile.jsx";
import Proceso from "./Componentes/Entrevistas/Proceso.jsx";
import Entrevistas from "./Componentes/Entrevistas/Entrevistas.jsx";
import { ThemeContextProvider } from './Context/ThemeContext.jsx';
import Dicar from "./Componentes/Empresas/Dicar/Dicar.jsx";
import Ransa from "./Componentes/Empresas/Ransa/Ransa.jsx";
import OfertasCompartidas from "./Componentes/Admin/OfertasCompartidas.jsx";
import Juniors from './Componentes/Empresas/Juniors/Juniors.jsx'

function App() {
  return (
    <AuthContextProvider>  {/* Proveedor para la autenticación */}
      <ThemeContextProvider> {/* Proveedor para el tema */}
        <JobsProvider>       {/* Proveedor para los trabajos */}
          <JobsProviderCompartido> {/* Proveedor para ofertas compartidas */}
            <Routes>
            <Route path="/Juniors" element={<Juniors />} />
              {/* Rutas Públicas */}
              <Route path="/" element={<Power />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Share" element={<Share />} />
              <Route path="/info-job-movil/:id" element={<InfoJobMovil />} />

              {/* Rutas Protegidas */}
              <Route path="/PowerAuth" element={<ProtectedRoute><PowerAuth /></ProtectedRoute>} />
              <Route path="/Admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
              <Route path="/AdminForm" element={<ProtectedRoute><AdminForm /></ProtectedRoute>} />
              <Route path="/Conversaciones" element={<ProtectedRoute><Conversaciones /></ProtectedRoute>} />
              <Route path="/Programa" element={<ProtectedRoute><Programa /></ProtectedRoute>} />
              <Route path="/Proceso" element={<ProtectedRoute><Proceso /></ProtectedRoute>} />
              <Route path="/Estadisticas" element={<ProtectedRoute><Estadisticas /></ProtectedRoute>} />
              <Route path="/AdminProfile" element={<ProtectedRoute><AdminProfile /></ProtectedRoute>} />
              <Route path="/AdminLogin" element={<LoginAdmin />} />
              <Route path="/550e8400-e29b-41d4-a716-446655440000" element={<RegisterAdmin />} />
              <Route path="/EditJob/:id_oferta" element={<ProtectedRoute><EditJob /></ProtectedRoute>} />
              <Route path="/VistaEditar/:id_oferta" element={<ProtectedRoute><VistaEditar /></ProtectedRoute>} />
              <Route path="/Entrevistas/:id_oferta" element={<ProtectedRoute><Entrevistas /></ProtectedRoute>} />
              <Route path="/Postulados/:id" element={<ProtectedRoute><PgPostulados /></ProtectedRoute>} />
              <Route path="/Profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/Dicar" element={<Dicar />} />
              <Route path="/Ransa" element={<Ransa />} />
              <Route path="/OfertasCompartidas" element={<ProtectedRoute><OfertasCompartidas /></ProtectedRoute>} />
            </Routes>
          </JobsProviderCompartido> {/* Cierra el proveedor aquí */}
        </JobsProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;