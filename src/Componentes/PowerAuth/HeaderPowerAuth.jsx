import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from "../../Context/AuthContext";
import { supabase } from "../../supabase/supabase.config";
import Tooltip from '@mui/material/Tooltip';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { BiSupport } from "react-icons/bi";
import { BiLogOut, BiMenuAltRight } from "react-icons/bi";

function HeaderPowerAuth() {
  const { user, signOut } = UserAuth();
  const [profile, setProfile] = useState({
    nombre: '',
    avatar_url: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('perfiles')
        .select('nombre, avatar_url')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      if (data) {
        setProfile({
          nombre: data.nombre,
          avatar_url: data.avatar_url,
        });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const whatsappSupportLink = "https://wa.me/51991879666?text=Hola,%20necesito%20ayuda%20en%20lo%20siguiente:";

  return (
    <header className="bg-powercolorblue w-full z-10 h-[72px] flex justify-between md:justify-around items-center fixed top-0 transition-transform duration-300">
      <div className="mx-auto w-full px-4 flex justify-between md:justify-around items-center">
        <div className="md:flex items-center hidden">
        <Link className='text-white' to="/PowerAuth">
            <img className='w-28' src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Main/logo%20power%20en%20positivo.png" alt="" />
          </Link>
        </div>

        {/* Desktop view */}
        <div className="items-center gap-4 md:flex hidden">
          <Tooltip title="Notificaciones" arrow>
            <button className="p-2 rounded-full text-white  hover:text-primarycolor hover:bg-gray-200 focus:outline-none transition">
              <NotificationsIcon fontSize="small" className="" />
            </button>
          </Tooltip>
          <Tooltip title="Mis Postulaciones" arrow>
            <button className="p-2 rounded-full text-white  hover:text-primarycolor hover:bg-gray-200 focus:outline-none transition">
              <WorkOutlineIcon fontSize="small" className="" />
            </button>
          </Tooltip>
          <Tooltip title="Soporte" arrow>
            <a
              href={whatsappSupportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-white  hover:text-primarycolor hover:bg-gray-200 focus:outline-none transition"
            >
              <BiSupport size={20} className="" />
            </a>
          </Tooltip>
          <span className="w-40 truncate font-inter text-md text-white ">
  {profile.nombre || 'Usuario'}
</span>

          <Tooltip title="Mi Perfil" arrow>
            <Link to="/Profile">
              <img
                className="w-10 h-10 rounded-full my-2"
                src={profile.avatar_url || 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                alt="User"
              />
            </Link>
          </Tooltip>
          <Tooltip title="Cerrar sesión" arrow>
            <button
              onClick={signOut}
              className="p-2 rounded-full hover:bg-gray-200 focus:outline-none transition"
            >
              <BiLogOut size={24} className="text-red-500" />
            </button>
          </Tooltip>
        </div>

        {/* Mobile view */}
        <div className="flex items-center justify-between w-full px-4 md:hidden">
          <a className="text-primarycolor text-2xl font-bold" href="/PowerAuth">
            Power
          </a>
          <div className="flex gap-4">
            <Link to="/Profile">
              <img
                className="w-10 h-10 rounded-full"
                src={profile.avatar_url || 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'}
                alt="User"
              />
            </Link>
            <button
              className="p-2 rounded-full hover:bg-gray-200 focus:outline-none transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <BiMenuAltRight size={24} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 mt-[233px] absolute right-0 z-10">
            <Tooltip title="Notificaciones" arrow>
              <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none transition">
                <NotificationsIcon fontSize="small" className="text-gray-700" />
                <span className="text-sm text-gray-800">Notificaciones</span>
              </button>
            </Tooltip>
            <Tooltip title="Mis Postulaciones" arrow>
              <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none transition">
                <WorkOutlineIcon fontSize="small" className="text-gray-700" />
                <span className="text-sm text-gray-800">Mis Postulaciones</span>
              </button>
            </Tooltip>
            <Tooltip title="Soporte" arrow>
              <a
                href={whatsappSupportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none transition"
              >
                <BiSupport size={20} className="text-blue-500" />
                <span className="text-sm text-gray-800">Soporte</span>
              </a>
            </Tooltip>
            <Tooltip title="Mi Perfil" arrow>
              <Link to="/Profile" className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none transition">
                <RxAvatar size={20} className="text-gray-700" />
                <span className="text-sm text-gray-800">Mi Perfil</span>
              </Link>
            </Tooltip>
            <Tooltip title="Cerrar sesión" arrow>
              <button
                onClick={signOut}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none transition"
              >
                <BiLogOut size={20} className="text-red-500" />
                <span className="text-sm text-gray-800">Cerrar sesión</span>
              </button>
            </Tooltip>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderPowerAuth;
