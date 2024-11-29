import React, { useEffect, useRef, useState } from "react";

function Beneficios2() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full flex flex-col items-center text-center py-8 font-dmsans transition-transform duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          ¿Por qué unirte a nuestra empresa?
        </h2>
        <p className="text-gray-800">
          Conoce los beneficios de ser parte de nuestra familia laboral.
        </p>
      </div>
      <div className="bg-[#133168] text-white text-left rounded-xl w-11/12 md:w-10/12 lg:w-9/12 mt-6 p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Planilla completa */}
        <div className="md:p-4">
          <div className="text-4xl mb-2">📋</div>
          <h3 className="font-semibold text-lg">Planilla completa</h3>
          <p className="text-sm">
            Accede a todos los beneficios de ley desde el primer día.
          </p>
        </div>
        {/* Seguro médico */}
        <div className="md:p-4">
          <div className="text-4xl mb-2">🏥</div>
          <h3 className="font-semibold text-lg">Seguro médico</h3>
          <p className="text-sm">
            Contamos con seguro médico privado para ti y tu familia.
          </p>
        </div>
        {/* Desarrollo profesional */}
        <div className="md:p-4">
          <div className="text-4xl mb-2">🚀</div>
          <h3 className="font-semibold text-lg">Desarrollo profesional</h3>
          <p className="text-sm">
            Crece con nosotros a través de capacitaciones y programas de
            desarrollo.
          </p>
        </div>
        {/* Horarios flexibles */}
        <div className="md:p-4">
          <div className="text-4xl mb-2">⏰</div>
          <h3 className="font-semibold text-lg">Horarios flexibles</h3>
          <p className="text-sm">
            Concilia tu vida personal y laboral con horarios adaptados a tus
            necesidades.
          </p>
        </div>
        {/* Oportunidades de crecimiento */}
        <div className="md:p-4">
          <div className="text-4xl mb-2">📈</div>
          <h3 className="font-semibold text-lg">Oportunidades de crecimiento</h3>
          <p className="text-sm">
            Accede a ascensos internos y oportunidades dentro de la empresa.
          </p>
        </div>
        {/* Ambiente laboral positivo */}
        <div className="md:p-4">
          <div className="text-4xl mb-2">🌟</div>
          <h3 className="font-semibold text-lg">Ambiente laboral positivo</h3>
          <p className="text-sm">
            Trabaja en un entorno inclusivo, colaborativo y motivador.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Beneficios2;
