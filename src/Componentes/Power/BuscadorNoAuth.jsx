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

    // Filtrar trabajos en tiempo real
    const results = input
      ? allActiveJobs.filter(job =>
          job.puesto.toLowerCase().includes(input.toLowerCase())
        )
      : [];

    setFilteredJobs(results);
    setSearchTerm(input);
  };

  const handleSearch = () => {
    setSearchTerm(searchInput.trim());

    const targetSection = document.getElementById('ofertas');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    setFilteredJobs([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (job) => {
    setSearchInput(job.puesto);
    setSearchTerm(job.puesto);
    setFilteredJobs([]);
  };

  return (
    <div className="relative w-full flex justify-center items-center z-50 my-6">
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
          onKeyDown={handleKeyDown}
          className="w-full pl-16 pr-6 py-5 rounded-full focus:outline-none text-gray-800 shadow-2xl placeholder:text-gray-700 placeholder:font-inter placeholder:text-lg font-inter"
        />
        
        {/* Resultados del buscador */}
        {searchInput && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md z-40 max-h-60 overflow-y-auto mt-1">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id_oferta}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
                  onClick={() => handleSuggestionClick(job)}
                >
                  {job.puesto}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No se encontraron resultados</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Buscador;

