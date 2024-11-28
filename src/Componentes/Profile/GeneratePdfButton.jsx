import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const GeneratePdfButton = ({ formData }) => {
  const generatePDF = async () => {
    const doc = new jsPDF();

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
      // Título con Nombre y Foto
      doc.setFontSize(22);
      doc.text(formData.nombre || "Nombre no especificado", 60, 30);

      // Información Personal
      doc.setFontSize(14);
      doc.text("Información Personal", 10, 60);
      doc.setFontSize(12);
      doc.text(`Correo: ${formData.correo || "No especificado"}`, 10, 70);
      doc.text(`Teléfono: ${formData.telefono || "No especificado"}`, 10, 80);
      doc.text(`DNI: ${formData.dni || "No especificado"}`, 10, 90);
      doc.text(`Distrito: ${formData.distrito || "No especificado"}`, 10, 100);
      doc.text(
        `Fecha de Nacimiento: ${formData.fecha_nac || "No especificado"}`,
        10,
        110
      );

      // Grado Académico
      doc.setFontSize(14);
      doc.text("Grado Académico", 10, 130);
      doc.setFontSize(12);
      doc.text(`Grado: ${formData.estudio || "No especificado"}`, 10, 140);
      doc.text(
        `Institución: ${formData.institucion || "No especificado"}`,
        10,
        150
      );
      doc.text(`Último Año: ${formData.año || "No especificado"}`, 10, 160);

      // Experiencia Laboral
      doc.setFontSize(14);
      doc.text("Experiencia Laboral", 10, 180);

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
          startY: 190,
        });
      } else {
        // Si no hay experiencia laboral
        doc.setFontSize(12);
        doc.text("No cuento con experiencia laboral.", 10, 190);
      }

      // Descargar el PDF
      doc.save(`${formData.nombre || "CV"}-Curriculum.pdf`);
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