import {useEffect} from 'react'
import { Link } from 'react-router-dom';
import fondo from '../../assets/gradiantFondo.png';
import Hero from './Hero';
import arrow from '../../assets/flechas-a-la-derecha.png';
import ScrollTrigger from 'react-scroll-trigger';

function MainDiv() {
  return (
    <section style={{backgroundImage: 'none' }}
      className="md:h-[auto h-auto pt-24  sm:pt-24 font-dmsans flex flex-col items-center bg-no-repeat bg-cover animate-fade-up">
      <div className="area h-full">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"/>
      <div className="text-center px-4">
        <h1
          className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-primarytext sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight animate-fade-up">
          <span className='text-primarycolor'>Potenciamos talentos,</span> impulsamos resultados
        </h1>
        <p className="max-w-2xl mx-auto px-6 text-lg text-primarytext font-inter animate-fade-up">
          Potenciamos tu éxito empresarial con soluciones de gestión humana y tecnología de vanguardia, incluso sin un departamento de recursos humanos.
        </p>
        <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
          <Link to="/Empresas" title=""
            className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-primarycolor border-2 border-transparent sm:w-auto rounded-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 animate-fade-right"
            role="button">
            Soy Empresa
            <span className='flex items-center justify-center bg-no-repeat ml-2 animate-fade-right'
              style={{backgroundImage: `url(${arrow})`, width:'30px', height:'20px' }}></span>
          </Link>
          <Link to="/Practicantes"
            className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-primarytext hover:bg-gray-50 sm:w-auto rounded-xl"
            role="button">Soy Talento
          </Link>
        </div>
      </div>
      <Hero />
    </section>
  );
}

export default MainDiv;