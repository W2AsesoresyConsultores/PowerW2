import React from 'react';
import Slider from 'react-slick';
import TestimonioCard from './TestimonioCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      mensaje: '“Lo que más me motiva en Dicar es el ambiente laboral. Somos una familia que trabaja unida para superar los retos y marcar la diferencia.”',
    },
    {
      nombre: 'Valeria Lujan Carrion',
      titulo: 'Coordinadora de Inventarios',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6g4NLS8zft75H_K0Wa-bwNS0bPAPGX33Og&s',
      mensaje: '“En Dicar encuentro un equilibrio perfecto entre desarrollo profesional y personal. La empresa fomenta el aprendizaje constante y reconoce nuestro esfuerzo.”',
    },
    {
      nombre: 'Carlos Pérez',
      titulo: 'Gerente de Operaciones',
      avatar: 'https://www.dineroenimagen.com/media/dinero/images/2022/09/dias-vacaciones-paises-mexico.jpg',
      mensaje: '“Trabajar aquí ha sido muy enriquecedor. Dicar me ha brindado las herramientas para mejorar mis habilidades y avanzar en mi carrera profesional.”',
    },
    {
      nombre: 'Marta González',
      titulo: 'Directora de Logística',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPxbafm6ju4UqDG9GdRzry_iIU1nqoOkRDL9z4ufF8xFNF2gFqOfud51gdjWzD0rAyNI&usqp=CAU',
      mensaje: '“La cultura en Dicar es impresionante, lo que más valoro es la confianza que nos brindan para asumir nuevas responsabilidades y proyectos.”',
    },
    {
      nombre: 'Juan Rodríguez',
      titulo: 'Asistente de Logística',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rhk86OXf2FvDAlcau1iHSTO8I0XaPnFN_Q&s',
      mensaje: '“Mi experiencia en Dicar ha sido excelente. La empresa tiene un ambiente positivo que promueve el aprendizaje y el trabajo en equipo.”',
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8 bg-gray-50 sm:py-8 lg:py-14 font-dmsans">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-regular font-inter text-gray-600">Historias que reflejan nuestra cultura</p>
          <h2 className="text-3xl font-bold text-[#2f4eab] sm:text-4xl xl:text-5xl font-source">
            Lo que dicen nuestros Colaboradores
          </h2>
        </div>

        <div className="mt-10">
          <Slider {...settings}>
            {testimonios.map((testimonio, index) => (
              <TestimonioCard key={index} {...testimonio} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
