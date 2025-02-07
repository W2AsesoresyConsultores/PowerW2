import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const ExperienciaForm = ({ formData, handleChange, editMode }) => {
  const [loadingField, setLoadingField] = useState(null);

  const handleAiCorrection = async (fieldName) => {
    setLoadingField(fieldName);
    try {
      const response = await axios.post('/api/openai', { text: formData[fieldName] });
      handleChange({ target: { name: fieldName, value: response.data.correctedText } });
    } catch (error) {
      console.error('Error al corregir con IA:', error);
    } finally {
      setLoadingField(null);
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
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="cargo_1"
                placeholder="Ingrese el nombre del puesto"
                value={formData.cargo_1 || ''}
                onChange={handleChange}
                readOnly={!editMode}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                  editMode ? 'border-gray-300' : 'bg-gray-100'
                }`}
              />
              <button
                onClick={() => handleAiCorrection('cargo_1')}
                disabled={loadingField === 'cargo_1'}
                className="px-3 py-2 bg-blue-500 text-white rounded-md text-sm"
              >
                {loadingField === 'cargo_1' ? 'Corrigiendo...' : 'IA'}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700">Nombre de la Empresa</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="empresa_1"
                placeholder="Ingrese el nombre de la empresa"
                value={formData.empresa_1 || ''}
                onChange={handleChange}
                readOnly={!editMode}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                  editMode ? 'border-gray-300' : 'bg-gray-100'
                }`}
              />
              <button
                onClick={() => handleAiCorrection('empresa_1')}
                disabled={loadingField === 'empresa_1'}
                className="px-3 py-2 bg-blue-500 text-white rounded-md text-sm"
              >
                {loadingField === 'empresa_1' ? 'Corrigiendo...' : 'IA'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienciaForm;
