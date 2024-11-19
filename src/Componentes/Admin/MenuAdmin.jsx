import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import {
  IoChatbubbleOutline,
  IoCalendarClearOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import { RxAvatar, RxDashboard } from "react-icons/rx";
import { useSpring, animated } from "@react-spring/web";
import { supabase } from "../../supabase/supabase.config";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserAuth } from "../../Context/AuthContext";

const MenuItem = ({ to, icon: Icon, label, themeMode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const styles = useSpring({
    backgroundColor: isActive ? "rgba(0, 123, 255, 0.2)" : "transparent",
    color: isActive ? "#007bff" : themeMode === "light" ? "#555" : "#ccc",
  });

  return (
    <animated.div style={styles} className="rounded-lg hover:bg-opacity-20">
      <Link
        to={to}
        className="flex items-center py-3 px-6 font-medium"
      >
        <Icon className="mr-4 text-xl" /> {label}
      </Link>
    </animated.div>
  );
};

function MenuAdmin() {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  
  const [id_empresa, setIdEmpresa] = useState(null);
  const [empresaUrl, setEmpresaUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('perfiles')
        .select('id_empresa')
        .eq('id', userId)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      if (data) {
        setIdEmpresa(data.id_empresa);
        // Fetch the empresa_url using the id_empresa
        fetchEmpresaUrl(data.id_empresa);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchEmpresaUrl = async (id_empresa) => {
    try {
      const { data, error } = await supabase
        .from('Empresa')
        .select('empresa_url')
        .eq('id_empresa', id_empresa)
        .single();

      if (error) {
        console.error("Error fetching empresa URL:", error);
        return;
      }

      if (data) {
        setEmpresaUrl(data.empresa_url);
      }
    } catch (error) {
      console.error("Error fetching empresa URL:", error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchProfile(user.id);
    }
  }, [user?.id]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error cerrando sesión:", error.message);
        return;
      }
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

  const menuItems = useMemo(
    () => [
      { to: "/Admin", icon: RxDashboard, label: "Ofertas" },
      { to: "/Programa", icon: IoCalendarClearOutline, label: "Programación" },
      { to: "/Conversaciones", icon: IoChatbubbleOutline, label: "Conversaciones" },
      { to: "/Estadisticas", icon: IoStatsChartOutline, label: "Estadísticas" },
      { to: "/AdminProfile", icon: RxAvatar, label: "Mi Perfil" },
    ],
    []
  );

  return (
    <div
      className={`w-60 h-screen z-10 font-lato dark:border-r dark:border-gray-800 ${
        themeMode === "light"
          ? "bg-white text-gray-800"
          : "bg-[#141a21] text-gray-300"
      } px-4 shadow-sm flex flex-col justify-between pt-8 fixed`}
    >
      {/* Header del menú */}
      <div className="flex flex-col items-center px-6 mb-8">
        {loading ? (
          <h2 className="text-2xl font-semibold font-dmsans text-primarycolor dark:text-white text-center">
            Cargando...
          </h2>
        ) : (
          <>
            {empresaUrl && (
              <img
                src={empresaUrl}
                alt="Empresa Logo"
                className="max-w-full h-auto mb-2 object-contain"
              />
            )}
          </>
        )}
      </div>

      {/* Menú de navegación */}
      <ul className="space-y-4">
        {menuItems.map(({ to, icon, label }) => (
          <li key={to}>
            <MenuItem to={to} icon={icon} label={label} themeMode={themeMode} />
          </li>
        ))}
      </ul>

      {/* Botón de cerrar sesión */}
      <div className="px-6 pb-12">
        <button
          onClick={handleLogout}
          className="flex items-center text-red-500 transition duration-300 ease-in-out"
        >
          <FaSignOutAlt className="mr-3 text-xl" /> Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default MenuAdmin;