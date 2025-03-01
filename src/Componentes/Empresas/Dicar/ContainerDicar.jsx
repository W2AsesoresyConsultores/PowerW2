import React, { useState, useContext, useEffect } from 'react';
import CardTrabajoDicar from './CardTrabajoDicar';
import InfoDicar from './InfoDicar';
import JobsContext from '../../../Context/JobsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from "../../../supabase/supabase.config";

function ContainerDicar() {
  const { searchTerm } = useContext(JobsContext);
  const [allActiveJobs, setAllActiveJobs] = useState([]);
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

  // Obtener trabajos filtrados de Supabase
  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('Oferta')
        .select('*')
        .eq('id_empresa', 5); // Solo los trabajos de id_empresa = 5

      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        setAllActiveJobs(data || []);
      }
    };

    fetchJobs();
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

  return (
    <div id='ofertas' className='w-full flex flex-col items-center pt-6 px-4 md:px-40 justify-center pb-10 bg-[#F5F7F9]'>
      <h1 className="text-3xl font-bold text-[#2f4eab] sm:text-4xl xl:text-5xl font-source my-8">Sé parte de #Dicar</h1>
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
              onSelectJob={() => setSelectedJob(selectedJob)}
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
                  onSelectJob={() => setSelectedJob(job)}
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
