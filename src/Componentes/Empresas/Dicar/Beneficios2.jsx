import React from "react";

function BeneficiosGrid() {
  const beneficios = [
    {
      id: 1,
      title: "Integridad",
      image:
        "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Beneficios/10.jpg",
    },
    {
      id: 2,
      title: "Servicio",
      image:
        "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Beneficios/11.jpg",
    },
    {
      id: 3,
      title: "Confianza",
      image:
        "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Beneficios/6.jpg",
    },
    {
      id: 4,
      title: "Compromiso",
      image:
        "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Beneficios/7.jpg",
    },
    {
      id: 5,
      title: "",
      image:
        "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Beneficios/8.jpg",
    },
    {
      id: 6,
      title: "",
      image:
        "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/Beneficios/9.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center p-4">
      {/* Título */}
      <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl xl:text-5xl my-8">
        ¿Por qué trabajar con <span class="underline decoration-primarycolor underline-offset-4">
                    Nosotros
                </span>?
      </h2>

      {/* Contenedor de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 w-full max-w-6xl">
        {/* Imagen sin texto izquierda (más grande) */}
        <div className="col-span-1">
          <img
            src={beneficios[4].image}
            alt="Sin título"
            className="w-full h-64 object-cover rounded-lg"
            style={{ height: "380px"}}
          />
        </div>

        {/* Imágenes con texto en el centro (más pequeñas) */}
        <div className="col-span-4 grid grid-cols-2 gap-4">
          {beneficios.slice(0, 4).map((beneficio) => (
            <div
              key={beneficio.id}
              className="relative overflow-hidden rounded-lg group"
              style={{ height: "180px" }}
            >
              <img
                src={beneficio.image}
                alt={beneficio.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-lg font-bold">{beneficio.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Imagen sin texto derecha (más grande) */}
        <div className="col-span-1">
          <img
            src={beneficios[5].image}
            alt="Sin título"
            className="w-full object-cover rounded-lg"
            style={{ height: "380px"}}
          />
        </div>
      </div>
    </div>
  );
}

export default BeneficiosGrid;

