import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  IoCalendarClearOutline,
  IoChatbubbleOutline,
  IoStatsChartOutline,
  IoDocumentText,
} from "react-icons/io5";
import { RxDashboard, RxDesktop, RxAvatar } from "react-icons/rx";
import { FaSignOutAlt } from "react-icons/fa";
import classNames from "classnames";
import { UserAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { supabase } from "../../supabase/supabase.config";

const MenuItem = ({
  to,
  icon: Icon,
  label,
  themeMode,
  empresaId,
  isActive,
  subItems = [],
}) => {
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
        return "bg-[#06038d] text-white font-semibold";
      default:
        return themeMode === "light"
          ? "bg-transparent text-gray-700 font-semibold"
          : "bg-gray-700 text-white font-semibold";
    }
  }, [empresaId, themeMode]);

  return (
    <div>
      <div
        className={classNames(
          "rounded-full py-3 px-6 flex items-center transition-all duration-50 ease-in-out",
          {
            [activeColorClass]: isActive,
            "text-gray-700": !isActive && themeMode === "light",
            "text-gray-300": !isActive && themeMode === "dark",
          }
        )}
      >
        <Link to={to} className="flex items-center">
          <Icon className="mr-4 text-lg" /> {label}
        </Link>
      </div>
      {subItems.length > 0 && (
        <ul className="pl-10 space-y-2 mt-2">
          {subItems.map((subItem) => (
            <li key={subItem.to}>
              <MenuItem
                to={subItem.to}
                icon={subItem.icon}
                label={subItem.label}
                themeMode={themeMode}
                empresaId={empresaId}
                isActive={isActive}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function MenuAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
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
      { to: "/Admin", icon: RxDashboard, label: "Mis Ofertas" },
      { to: "/ofertascompartidas", icon: RxDesktop, label: "Ofertas Equipo" },
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
        return "bg-white";
      case 2:
        return "bg-white";
      case 3:
        return "bg-white";
      case 4:
        return "bg-white";
      case 5:
        return "bg-white";
      case 6:
        return "bg-white";
      default:
        return themeMode === "light" ? "bg-white" : "bg-[#141a21]";
    }
  }, [empresaId, themeMode]);

  return (
    <div
      className={`w-60 h-screen z-10 font-jakarta dark:border-r dark:border-gray-800 ${menuBackgroundClass} text-gray-300 px-4 shadow-sm flex flex-col justify-between pt-2 fixed`}
    >
      <div className="flex flex-col items-center px-6 py-6 w-full h-auto justify-center">
        {empresaUrl ? (
          <img
            src={empresaUrl}
            alt="Empresa Logo"
            className="w-auto max-h-20 mb-2"
          />
        ) : (
          <h2 className="text-2xl font-semibold font-dmsans text-primarycolor dark:text-white text-center">
            Cargando...
          </h2>
        )}
      </div>

      <ul className="space-y-2 font-jakarta text-sm font-normal">
        {menuItems.map(({ to, icon, label, subItems }) => (
          <li key={to || label}>
            <MenuItem
              to={to}
              icon={icon}
              label={label}
              themeMode={themeMode}
              empresaId={empresaId}
              isActive={location.pathname === to || subItems?.some((item) => location.pathname === item.to)}
              subItems={subItems}
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
