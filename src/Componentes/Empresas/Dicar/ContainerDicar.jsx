import React, { useState, useContext, useEffect } from 'react';
import CardTrabajoDicar from './CardTrabajoDicar';
import InfoDicar from './InfoDicar';
import JobsContext from '../../../Context/JobsContext';
import { useNavigate, useParams } from 'react-router-dom';

function ContainerDicar() {
  const { allActiveJobs, searchTerm } = useContext(JobsContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const { id_oferta } = useParams();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Filtrar trabajos por el término de búsqueda
    const filteredResults = searchTerm
      ? allActiveJobs.filter(job => job.puesto.toLowerCase().includes(searchTerm.toLowerCase()))
      : allActiveJobs;

    setSelectedJob(filteredResults[0] || null);
  }, [searchTerm, allActiveJobs]);

  useEffect(() => {
    if (id_oferta && allActiveJobs.length > 0) {
      const foundJob = allActiveJobs.find(job => job.id_oferta === parseInt(id_oferta, 10));
      if (foundJob) {
        setSelectedJob(foundJob);
      } else {
        navigate('/PowerAuth');
      }
    }
  }, [id_oferta, allActiveJobs, navigate]);

  const handleCardClick = (job) => {
    if (isMobile) {
      navigate(`/info-job-movil/${job.id_oferta}`);
    } else {
      setSelectedJob(job);
    }
  };

  return (
    <div id='ofertas' className='w-full flex flex-col items-center font-dmsans pt-4 px-4 justify-center pb-6 bg-[#f8fafc]'>
      {/* <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl xl:text-5xl my-8">Ofertas Laborales</h1> */}
      <div className='flex w-full justify-center items-center'>
        <div
          className='flex flex-col w-full md:w-1/2 justify-start items-center gap-4 h-[620px] overflow-auto'
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {searchTerm && selectedJob ? (
            // Mostrar solo el trabajo buscado
            <CardTrabajoDicar
              key={selectedJob.id_oferta}
              job={selectedJob}
              onSelectJob={() => handleCardClick(selectedJob)}
              isSelected={true}
            />
          ) : (
            // Mostrar todos los trabajos si no hay búsqueda
            allActiveJobs
              .sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion))
              .map(job => (
                <CardTrabajoDicar
                  key={job.id_oferta}
                  job={job}
                  onSelectJob={() => handleCardClick(job)}
                  isSelected={selectedJob === job}
                />
              ))
          )}
        </div>
        {selectedJob && !isMobile && (
          <InfoDicar selectedJob={selectedJob} />
        )}
      </div>
    </div>
  );
}

export default ContainerDicar;