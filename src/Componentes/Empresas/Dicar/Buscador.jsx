import React, { useState, useContext } from 'react';
import JobsContext from '../../../Context/JobsContext';
import { FaSearch } from 'react-icons/fa'; // Ícono de buscar

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
    <div className="relative w-full  flex justify-center items-center mx-auto z-20">
      <div className='flex md:w-1/2 w-full mx-auto'>
      <input
        type="text"
        placeholder="Buscar Ofertas Laborales"
        value={searchInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Asegúrate de tener este manejador
        className="w-full px-6 py-4 rounded-l-full focus:outline-none text-black shadow-2xl placeholder:text-gray-500"
      />

      {/* Botón de buscar */}
      <button
        onClick={handleSearch}
        className="bg-black hover:bg-gray-50 text-white px-8 py-2 rounded-r-full flex items-center justify-center"
      >
        <FaSearch className="text-lg" />
      </button>

      </div>
      {/* Input del buscador */}
      
      {/* Resultados del buscador */}
      {filteredJobs.length > 0 && (
        <div
          className="absolute w-1/2 mx-auto bg-white border border-gray-300 rounded-lg shadow-md mt-1"
          style={{ top: '100%' }} // Asegura que las sugerencias estén debajo del input
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
