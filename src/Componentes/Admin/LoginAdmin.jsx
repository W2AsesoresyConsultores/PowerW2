import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import HeaderPower from "../Power/HeaderPower";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";

function LoginAdmin() {
  const navigate = useNavigate();
  const { manualSignIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const success = await manualSignIn(email, password);
      if (success) {
        const userRole = await getUserRole(email);
        if (userRole === "reclutador") {
          navigate("/Admin");
        } else {
          setError("No tienes permiso para acceder a esta área");
        }
      } else {
        setError("Correo electrónico o contraseña incorrecta");
      }
    } catch (err) {
      setError("Ocurrió un error al iniciar sesión");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <HeaderPower />
      <div className="flex h-screen">
        <div
          className="hidden md:flex flex-col gap-8 items-center justify-center bg-newprimarycolor w-1/2"
          style={{
            backgroundImage: "url('https://www.digitalocean.com/_next/static/media/hero-background.a9bcc858.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="p-10 text-center">
            <h1 className="text-4xl font-bold text-white mb-4 font-inter">Inicia sesión en Power</h1>
            <p className="text-white font-inter">
              Si no tienes una cuenta puedes...  
              <a
                href="https://wa.me/51970632448?text=Hola%20vengo%20de%20Power.%20Quiero%20solicitar%20mi%20cuenta%20de%20Reclutador."
                className="text-yellowprimary hover:underline"
              > Solicitarla aquí!</a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2 px-6 md:px-28">
          <div className="p-4 w-full max-w-md">
            <h1 className="text-4xl text-newprimarycolor font-bold text-center mb-4 font-inter">Te damos la bienvenida</h1>
            <p className="text-gray-800 text-center mb-8 font-inter">Ingresa tus datos para iniciar sesión</p>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-newprimarycolor transition"
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-newprimarycolor transition"
                  placeholder="Contraseña"
                />
                <button
                  type="button"
                  onClick={handleClickShowPassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <HiOutlineEye />
                  ) : (
                    <HiOutlineEyeOff />
                  )}
                </button>
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <div className="flex flex-col gap-4 mt-4">
                <a
                  href="https://wa.me/51970632448?text=Hola%2C%20me%20gustar%C3%ADa%20que%20me%20pueda%20ayudar%20a%20recuperar%20mi%20contrase%C3%B1a"
                  className="text-colorgreen underline underline-offset-2 font-inter"
                >
                  Olvidé mi contraseña
                </a>
                <button
                  type="submit"
                  className="w-full py-3 font-inter text-md bg-yellowprimary text-newprimarycolor font-bold rounded-lg hover:bg-yellow-500 transition"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
