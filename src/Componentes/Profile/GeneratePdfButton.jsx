import React from "react";
import jsPDF from "jspdf";

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
          doc.addImage(event.target.result, "JPEG", 140, 10, 50, 50);
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
      // Nombre
      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      doc.text(formData.nombre || "Nombre no especificado", 10, 20);

      // Datos Personales
      doc.setFontSize(16);
      doc.text("Datos Personales", 10, 35);

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`Correo: ${formData.correo || "No especificado"}`, 10, 45);
      doc.text(`Teléfono: ${formData.telefono || "No especificado"}`, 10, 55);
      doc.text(`DNI: ${formData.dni || "No especificado"}`, 10, 65);
      doc.text(`Fecha de Nacimiento: ${formData.fecha_nac || "No especificado"}`, 10, 75);
      doc.text(`Distrito: ${formData.distrito || "No especificado"}`, 10, 85);

      // Línea de separación
      doc.setDrawColor(0);
      doc.setLineWidth(0.5);
      doc.line(10, 95, 200, 95);

      // Estudios
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Estudios", 105, 110, { align: "center" });

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`Grado: ${formData.estudio || "No especificado"}`, 10, 125);
      doc.text(`Institución: ${formData.institucion || "No especificado"}`, 10, 135);
      doc.text(`Último Año: ${formData.año || "No especificado"}`, 10, 145);

      // Línea de separación
      doc.line(10, 155, 200, 155);

      // Experiencia Laboral
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Experiencia Laboral", 105, 170, { align: "center" });

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      if (formData.cargo_1 || formData.empresa_1 || formData.tiempo_1 || formData.funcion_1) {
        doc.text(`Cargo: ${formData.cargo_1 || "No especificado"}`, 10, 185);
        doc.text(`Empresa: ${formData.empresa_1 || "No especificado"}`, 10, 195);
        doc.text(`Tiempo: ${formData.tiempo_1 || "No especificado"}`, 10, 205);
        doc.text(`Funciones: ${formData.funcion_1 || "No especificado"}`, 10, 215);
      } else {
        doc.text("No cuento con experiencia laboral.", 10, 185);
      }

      if (formData.cargo_2 || formData.empresa_2 || formData.tiempo_2 || formData.funcion_2) {
        doc.text(`Cargo: ${formData.cargo_2 || "No especificado"}`, 10, 225);
        doc.text(`Empresa: ${formData.empresa_2 || "No especificado"}`, 10, 235);
        doc.text(`Tiempo: ${formData.tiempo_2 || "No especificado"}`, 10, 245);
        doc.text(`Funciones: ${formData.funcion_2 || "No especificado"}`, 10, 255);
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
