import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import {
  IoChatbubbleOutline,
  IoCalendarClearOutline,
  IoStatsChartOutline,
  IoDocumentText,
} from "react-icons/io5";
import { RxAvatar, RxDashboard } from "react-icons/rx";
import { RxDesktop } from "react-icons/rx";
import { supabase } from "../../supabase/supabase.config";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserAuth } from "../../Context/AuthContext";
import classNames from "classnames";

const MenuItem = ({ to, icon: Icon, label, themeMode, empresaId }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const activeColorClass = useMemo(() => {
    switch (empresaId) {
      case 1:
        return "bg-primarycolor text-white font-semibold";
      case 2:
        return "bg-[#00993f] text-white font-semibold";
      case 3:
        return "bg-[#e31d26] text-white font-semibold";
      case 4:
        return "bg-[#ee3123] text-white font-semibold";
      case 5:
        return "bg-[#2f4daa] text-white font-semibold";
      case 6:
        return "bg-white text-[#06038d] font-semibold";
      default:
        return themeMode === "light"
          ? "bg-gray-200 text-gray-700 font-semibold"
          : "bg-gray-700 text-white font-semibold";
    }
  }, [empresaId, themeMode]);

  return (
    <div
      className={classNames(
        "rounded-full py-3 px-6 flex items-center transition-all duration-300 ease-in-out",
        {
          [activeColorClass]: isActive,
          "text-gray-500": !isActive && themeMode === "light",
          "text-gray-300": !isActive && themeMode === "dark",
        }
      )}
    >
      <Link to={to} className="flex items-center">
        <Icon className="mr-4 text-lg" /> {label}
      </Link>
    </div>
  );
};

function MenuAdmin() {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const { themeMode } = useContext(ThemeContext);

  const [empresaUrl, setEmpresaUrl] = useState(localStorage.getItem("empresaUrl") || "");
  const [empresaId, setEmpresaId] = useState(null);

  const fetchProfileAndEmpresaUrl = async (userId) => {
    try {
      const { data: profileData, error: profileError } = await supabase
        .from("perfiles")
        .select("id_empresa")
        .eq("id", userId)
        .single();

      if (profileError) {
        console.error("Error fetching profile:", profileError);
        return;
      }

      if (profileData?.id_empresa) {
        setEmpresaId(profileData.id_empresa);

        const { data: empresaData, error: empresaError } = await supabase
          .from("Empresa")
          .select("empresa_url")
          .eq("id_empresa", profileData.id_empresa)
          .single();

        if (empresaError) {
          console.error("Error fetching empresa URL:", empresaError);
          return;
        }

        if (empresaData?.empresa_url) {
          setEmpresaUrl(empresaData.empresa_url);
          localStorage.setItem("empresaUrl", empresaData.empresa_url);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchProfileAndEmpresaUrl(user.id);
    }
  }, [user?.id]); // Solo depende de user.id

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
      { to: "/Admin", icon: RxDashboard, label: "Ofertas Personales" },
      { to: "/ofertascompartidas", icon: RxDesktop, label: "Ofertas Compartidas" },
      { to: "/Programa", icon: IoCalendarClearOutline, label: "Programación" },
      { to: "/Conversaciones", icon: IoChatbubbleOutline, label: "Conversaciones" },
      { to: "/Estadisticas", icon: IoStatsChartOutline, label: "Estadísticas" },
      { to: "/AdminProfile", icon: RxAvatar, label: "Mi Perfil" },
      { to: "/Dicar", icon: IoDocumentText, label: "Mi empresa" },
    ],
    []
  );

  const menuBackgroundClass = useMemo(() => {
    switch (empresaId) {
      case 1:
        return "bg-primarytext";
      case 2:
        return "bg-white";
      case 3:
        return "bg-[#5e4aa0]";
      case 4:
        return "bg-white";
      case 5:
        return "bg-white";
      case 6:
        return "bg-[#06038d]";
      default:
        return themeMode === "light" ? "bg-white" : "bg-[#141a21]";
    }
  }, [empresaId, themeMode]);

  return (
    <div
      className={`w-60 h-screen z-10 font-jakarta dark:border-r dark:border-gray-800 ${menuBackgroundClass} text-gray-300 px-4 shadow-sm flex flex-col justify-between pt-2 fixed`}
    >
      <div className="flex flex-col items-center px-6 w-full h-24 justify-center">
        {empresaUrl ? (
          <img
            src={empresaUrl}
            alt="Empresa Logo"
            className="w-auto h-full mb-2 "
          />
        ) : (
          <h2 className="text-2xl font-semibold font-dmsans text-primarycolor dark:text-white text-center">
            Cargando...
          </h2>
        )}
      </div>

      <ul className="space-y-2 font-jakarta text-sm font-normal">
        {menuItems.map(({ to, icon, label }) => (
          <li key={to}>
            <MenuItem
              to={to}
              icon={icon}
              label={label}
              themeMode={themeMode}
              empresaId={empresaId}
            />
          </li>
        ))}
      </ul>

      <div className="px-6 pb-12">
        <button
          onClick={handleLogout}
          className="flex items-center text-red-500 transition duration-300 ease-in-out font-inter font-medium"
        >
          <FaSignOutAlt className="mr-3 text-xl" /> Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default MenuAdmin;