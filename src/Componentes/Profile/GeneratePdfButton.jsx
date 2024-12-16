import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const GeneratePdfButton = ({ formData }) => {
  const generatePDF = async () => {
    const doc = new jsPDF();
    // URLs de los íconos
    const icons = {
      informacion: "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Perfil/agenda.png",
      grado: "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Perfil/estudio.png",
      experiencia: "https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/AssetsPower/Perfil/maletin.png",
    };

    // Cargar las imágenes como base64
    const loadImage = async (url) => {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    };

    const informacionIcon = await loadImage(icons.informacion);
    const gradoIcon = await loadImage(icons.grado);
    const experienciaIcon = await loadImage(icons.experiencia);

    // Foto de perfil
    if (formData.avatar_url) {
      try {
        const response = await fetch(formData.avatar_url);
        const imageBlob = await response.blob();
        const reader = new FileReader();

        reader.onload = (event) => {
          doc.addImage(event.target.result, "JPEG", 10, 10, 40, 40);
          finalizePDF();
        };

        reader.readAsDataURL(imageBlob);
      } catch (error) {
        console.error("Error loading profile image:", error.message);
        finalizePDF();
      }
    } else {
      finalizePDF();
    }

    const finalizePDF = () => {
      // Título con Nombre y Correo
      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      doc.text(formData.nombre || "Nombre no especificado", 60, 30);
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`${formData.correo || "No especificado"}`, 60, 40);
    
      // Información Personal
      doc.addImage(informacionIcon, "PNG", 10, 58, 10, 10); // Ícono
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Información Personal", 25, 65);
    
      // Establecer un gris más oscuro para el texto
      doc.setTextColor(80, 80, 80); // Gris aún más oscuro
    
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`Teléfono: ${formData.telefono || "No especificado"}`, 25, 75);
      doc.text(`DNI: ${formData.dni || "No especificado"}`, 25, 85);
      doc.text(`Distrito: ${formData.distrito || "No especificado"}`, 25, 95);
      doc.text(
        `Fecha de Nacimiento: ${formData.fecha_nac || "No especificado"}`,
        25,
        105
      );
    
      // Restaurar el color predeterminado para el siguiente texto
      doc.setTextColor(0, 0, 0); // Color negro (predeterminado)
    
      // Grado Académico
      doc.addImage(gradoIcon, "PNG", 10, 118, 10, 10); // Ícono
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Grado Académico", 25, 125);
    
      // Establecer un gris más oscuro para el texto
      doc.setTextColor(80, 80, 80); // Gris aún más oscuro
    
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`Grado: ${formData.estudio || "No especificado"}`, 25, 135);
      doc.text(
        `Institución: ${formData.institucion || "No especificado"}`,
        25,
        145
      );
      doc.text(`Último Año: ${formData.año || "No especificado"}`, 25, 155);
    
      // Restaurar el color predeterminado para el siguiente texto
      doc.setTextColor(0, 0, 0); // Color negro (predeterminado)
    
      // Experiencia Laboral
      doc.addImage(experienciaIcon, "PNG", 10, 168, 10, 10); // Ícono
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Experiencia Laboral", 25, 176);
    
      const experienciaData = [];
    
      // Agregar experiencia 1 si existe
      if (formData.cargo_1 || formData.empresa_1 || formData.tiempo_1 || formData.funcion_1) {
        experienciaData.push([
          "Exp. 1",
          formData.cargo_1 || "No especificado",
          formData.empresa_1 || "No especificado",
          formData.tiempo_1 || "No especificado",
          formData.funcion_1 || "No especificado",
        ]);
      }
    
      // Agregar experiencia 2 si existe
      if (formData.cargo_2 || formData.empresa_2 || formData.tiempo_2 || formData.funcion_2) {
        experienciaData.push([
          "Exp. 2",
          formData.cargo_2 || "No especificado",
          formData.empresa_2 || "No especificado",
          formData.tiempo_2 || "No especificado",
          formData.funcion_2 || "No especificado",
        ]);
      }
      if (experienciaData.length > 0) {
        doc.autoTable({
          head: [["#", "Cargo", "Empresa", "Tiempo", "Funciones"]],
          body: experienciaData,
          startY: 187,
          styles: { fontSize: 9 }, // Reducir el tamaño del texto
          headStyles: {
            halign: 'center', // Centrar el texto del encabezado
          },
        });
      } else {
        // Si no hay experiencia laboral
        doc.setFontSize(12);
        doc.text("No cuento con experiencia laboral.", 20, 180);
      }
    
      // Descargar el PDF
      doc.save(`${formData.nombre || "CV"} - Curriculum.pdf`);
    };
    
  };

  return (
    <button
      onClick={generatePDF}
      className="px-4 py-2 bg-white text-primarycolor rounded-md hover:bg-blue-100 transition-colors duration-100 flex items-center gap-2"
    >
      Descargar CV
    </button>
  );
};

export default GeneratePdfButton;