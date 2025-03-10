import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase/supabase.config";

const ExperienciaForm = ({ formData, handleChange, editMode }) => {
  const [loading, setLoading] = useState({});
  const [profileApiKey, setProfileApiKey] = useState(null);

  // Obtener API Key de Supabase
  useEffect(() => {
    const fetchApiKey = async () => {
      const { data, error } = await supabase
        .from("Claves")
        .select("clave")
        .eq("descripcion", "api_key_profile")
        .single();

      if (error) {
        console.error("Error obteniendo la API Key:", error);
        return;
      }
      setProfileApiKey(data.clave);
    };

    fetchApiKey();
  }, []);

  // Función para mejorar texto con OpenAI
  const mejorarTexto = async (campo) => {
    if (!formData[campo] || !profileApiKey) return;

    setLoading((prev) => ({ ...prev, [campo]: true }));

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${profileApiKey}`, // FIX: Se agrega Bearer
        },
        body: JSON.stringify({
          model: "gpt-4-turbo",
          messages: [{ role: "user", content: `Mejora este texto de experiencia laboral, usa palabras más clave para reclutadores y conserva el aproximado de la misma cantidad de palabras: ${formData[campo]}` }],
          max_tokens: 150,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices[0]?.message?.content) {
        handleChange({ target: { name: campo, value: data.choices[0].message.content.trim() } });
      } else {
        console.error("Error en la respuesta de OpenAI:", data);
      }
    } catch (error) {
      console.error("Error al mejorar el texto:", error);
    } finally {
      setLoading((prev) => ({ ...prev, [campo]: false }));
    }
  };

  return (
    <div className="w-full bg-white border border-primarycolor border-opacity-30 p-6 rounded-lg">
      <h2 className="text-xl text-gray-800 mb-6">Experiencia Laboral</h2>

      {/* Experiencia 1 */}
      <h3 className="text-lg text-gray-800 mb-4">Experiencia 1</h3>
      <div className="grid grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Nombre del Cargo</label>
            <input
              type="text"
              name="cargo_1"
              placeholder="Ingrese el nombre del puesto"
              value={formData.cargo_1 || ""}
              onChange={handleChange}
              readOnly={!editMode}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                editMode ? "border-gray-300" : "bg-gray-100"
              }`}
            />
          </div>
        </div>

        {/* Área de funciones */}
        <div className="mb-4 w-full md:w-2/5">
          <label className="block text-sm font-medium text-gray-700">Principales Funciones</label>
          <textarea
            name="funcion_1"
            placeholder="Ingrese sus principales funciones"
            value={formData.funcion_1 || ""}
            onChange={handleChange}
            readOnly={!editMode}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              editMode ? "border-gray-300" : "bg-gray-100"
            }`}
            rows={4}
            style={{ resize: "none", height: "200px", width: "380px" }}
          ></textarea>

          <button
            onClick={() => mejorarTexto("funcion_1")}
            disabled={loading.funcion_1 || !profileApiKey}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
            title={!profileApiKey ? "Esperando API Key..." : "Mejorar descripción"}
          >
            {loading.funcion_1 ? "Mejorando..." : "Mejorar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienciaForm;
