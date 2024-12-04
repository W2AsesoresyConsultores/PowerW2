import React from 'react';
import TestimonioCard from './TestimonioCard';

function Testimonios() {
  const testimonios = [
    {
      nombre: 'Luis Salvador',
      titulo: 'Analista de Logística',
      avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
      mensaje: '“Trabajar en Dicar ha sido una experiencia transformadora. Aquí se valora el trabajo en equipo, la innovación y el compromiso con la excelencia.”',
    },
    {
      nombre: 'Jesus Martínez',
      titulo: 'Supervisor de Operaciones',
      avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png',
      mensaje: '“Lo que más me motiva en Dicar es el ambiente laboral. Somos una familia que trabaja unida para superar los retos y marcar la diferencia en la logística farmacéutica.”',
    },
    {
      nombre: 'Valeria Lujan Carrion',
      titulo: 'Coordinadora de Inventarios',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6g4NLS8zft75H_K0Wa-bwNS0bPAPGX33Og&s',
      mensaje: '“En Dicar encuentro un equilibrio perfecto entre desarrollo profesional y personal. La empresa fomenta el aprendizaje constante y reconoce nuestro esfuerzo.”',
    },
  ];

  return (
    <section className="py-8 bg-gray-50 sm:py-8 lg:py-20 font-dmsans">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600">Historias que reflejan nuestra cultura</p>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl xl:text-5xl">
            Lo que dicen nuestros <span class="underline decoration-primarycolor underline-offset-4">
                    Colaboradores
                </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3 lg:gap-10">
          {testimonios.map((testimonio, index) => (
            <TestimonioCard key={index} {...testimonio} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
