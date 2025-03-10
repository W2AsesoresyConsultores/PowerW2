import React, { useState, useEffect, useContext } from 'react';
import CardTrabajo from './CardTrabajo';
import InfoJobPower from './InfoJobPower';
import { supabase } from '../../supabase/supabase.config';
import { useNavigate, useParams } from 'react-router-dom';
import JobsContext from '../../Context/JobsContext';

function TrabajosContainer() {
  const { searchTerm } = useContext(JobsContext);
  const [jobs, setJobs] = useState([]);
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
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('Oferta')
        .select('*')
        .eq('estado', 'activa')
        .order('fecha_publicacion', { ascending: false });

      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        setJobs(data);
        if (data.length > 0) {
          setSelectedJob(data[0]);
        }
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (id_oferta && jobs.length > 0) {
      const foundJob = jobs.find(job => job.id_oferta === parseInt(id_oferta) && job.estado === 'activa');
      if (foundJob) {
        setSelectedJob(foundJob);
      } else {
        navigate('/');
      }
    }
  }, [id_oferta, jobs, navigate]);

  const handleCardClick = (job) => {
    if (isMobile) {
      navigate(`/info-job-movil/${job.id_oferta}`);
    } else {
      setSelectedJob(job);
    }
  };

  // **Filtrar trabajos en tiempo real mientras el usuario escribe**
  const filteredJobs = searchTerm
    ? jobs.filter(job => job.puesto.toLowerCase().includes(searchTerm.toLowerCase()))
    : jobs;

  return (
    <div id='ofertas' className='md:w-[80%] w-full mx-auto flex flex-col items-center pt-6 px-4 rounded-2xl justify-center pb-10 bg-white'>
      <div className='flex w-full justify-center items-center'>
        <div
          className='flex flex-col w-full md:w-1/2 justify-start items-center gap-4 md:h-[650px] md:overflow-auto h-auto'
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {filteredJobs.map((job, index) => (
            <CardTrabajo
              key={index}
              job={job}
              onSelectJob={() => handleCardClick(job)}
              isSelected={selectedJob === job}
            />
          ))}
        </div>
        {selectedJob && !isMobile && (
          <InfoJobPower selectedJob={selectedJob} />
        )}
      </div>
    </div>
  );
}

export default TrabajosContainer;
