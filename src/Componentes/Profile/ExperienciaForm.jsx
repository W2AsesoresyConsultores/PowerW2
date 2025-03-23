import React from 'react';

const ExperienciaForm = ({ formData, handleChange, editMode }) => {
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
              value={formData.cargo_1 || ''}
              onChange={handleChange}
              readOnly={!editMode}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                editMode ? 'border-gray-300' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Nombre de la Empresa</label>
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
          </div>
          <div>
            <label className="block text-sm text-gray-700">Tiempo de Labor</label>
            <input
              type="text"
              name="tiempo_1"
              placeholder="Ejem: Nov. 2022 a Oct. 2023"
              value={formData.tiempo_1 || ''}
              onChange={handleChange}
              readOnly={!editMode}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                editMode ? 'border-gray-300' : 'bg-gray-100'
              }`}
            />
          </div>
        </div>

        <div className="mb-4 w-full md:w-2/5">
  <label className="block text-sm font-medium text-gray-700">Principales Funciones</label>
  <textarea
    name="funcion_1"
    placeholder="Ingrese sus principales funciones"
    value={formData.funcion_1 || ''}
    onChange={handleChange}
    readOnly={!editMode}
    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
      editMode ? 'border-gray-300' : 'bg-gray-100'
    }`}
    rows={4} // Establece las filas para el tamaño vertical
    style={{
      resize: 'none', // Desactiva el redimensionamiento
      height: '200px', // Ajusta el alto según tus necesidades
      width : '380px',
    }}
  ></textarea>
</div>
      </div>

      {/* Experiencia 2 */}
      <h3 className="text-lg text-gray-800 mb-4 mt-6">Experiencia 2</h3>
      <div className="grid grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Nombre del Cargo</label>
            <input
              type="text"
              name="cargo_2"
              placeholder="Ingrese el nombre del puesto"
              value={formData.cargo_2 || ''}
              onChange={handleChange}
              readOnly={!editMode}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                editMode ? 'border-gray-300' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Nombre de la Empresa</label>
            <input
              type="text"
              name="empresa_2"
              placeholder="Ingrese el nombre de la empresa"
              value={formData.empresa_2 || ''}
              onChange={handleChange}
              readOnly={!editMode}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                editMode ? 'border-gray-300' : 'bg-gray-100'
              }`}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Tiempo de Labor</label>
            <input
              type="text"
              name="tiempo_2"
              placeholder="Ejem: Nov. 2022 a Oct. 2023"
              value={formData.tiempo_2 || ''}
              onChange={handleChange}
              readOnly={!editMode}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                editMode ? 'border-gray-300' : 'bg-gray-100'
              }`}
            />
          </div>
        </div>

        <div>
  <label className="block text-sm font-medium text-gray-700">Principales Funciones</label>
  <textarea
    name="funcion_2"
    placeholder="Ingrese sus principales funciones"
    value={formData.funcion_2 || ''}
    onChange={handleChange}
    readOnly={!editMode}
    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
      editMode ? 'border-gray-300' : 'bg-gray-100'
    }`}
    rows={4} // Establece las filas para el tamaño vertical
    style={{
      resize: 'none', // Desactiva el redimensionamiento
      height: '200px', // Ajusta el alto según tus necesidades
      width: '380px', // Ajusta el ancho según tus necesidades
    }}
  ></textarea>
</div>
      </div>
    </div>
  );
};

export default ExperienciaForm;