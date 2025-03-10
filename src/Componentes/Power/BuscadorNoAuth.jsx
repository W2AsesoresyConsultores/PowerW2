import React, { useState, useContext } from 'react';
import JobsContext from '../../Context/JobsContext';
import { IoSearchOutline } from "react-icons/io5";

function Buscador() {
  const { allActiveJobs, setSearchTerm } = useContext(JobsContext);
  const [searchInput, setSearchInput] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    // Filtrar trabajos en tiempo real mientras el usuario escribe
    const results = allActiveJobs.filter(job =>
      job.puesto.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredJobs(results);

    // Si la entrada está vacía, limpiar resultados mostrados
    if (input === '') {
      setFilteredJobs([]);
    }
  };

  const handleSearch = () => {
    if (searchInput.trim() === '') {
      // Mostrar todos los trabajos
      setSearchTerm('');
    } else {
      // Buscar según el término ingresado
      setSearchTerm(searchInput);
      const targetSection = document.getElementById('ofertas'); // Seleccionar el contenedor de trabajos
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplazar suavemente hacia el contenedor
      }
    }
    setFilteredJobs([]); // Limpiar las sugerencias al buscar
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Ejecutar la búsqueda al presionar Enter
    }
  };

  const handleSuggestionClick = (job) => {
    setSearchInput(job.puesto); // Colocar el texto en el buscador
    setFilteredJobs([]); // Limpiar las sugerencias
  };

  return (
    <div className="relative w-full flex justify-center items-center z-999 my-6">
      {/* Contenedor del input y el ícono */}
      <div className="relative w-[95%] md:w-1/2">
        {/* Ícono dentro del input */}
        <span className="absolute inset-y-0 left-6 flex items-center text-gray-800">
        <IoSearchOutline className='text-2xl' />
        </span>
        <input
          type="search"
          placeholder="¿Qué trabajo estás buscando?"
          value={searchInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Ejecutar búsqueda con Enter
          className="w-full pl-16 pr-6 py-5 rounded-full focus:outline-none text-gray-800 shadow-2xl placeholder:text-gray-700 placeholder:font-inter placeholder:text-lg font-inter"
        />
      </div>

      {/* Resultados del buscador */}
      {filteredJobs.length > 0 && (
        <div
          className="absolute w-[95%] md:w-1/2 bg-white border border-gray-300 rounded-lg shadow-md mt-2"
          style={{ top: '100%' }}
        >
          {filteredJobs.map((job) => (
            <div
              key={job.id_oferta}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
              onClick={() => handleSuggestionClick(job)}
            >
              {job.puesto}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Buscador;
