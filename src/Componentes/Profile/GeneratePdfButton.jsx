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
            doc.addImage(event.target.result, "JPEG", 140, 30, 50, 50);
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
        doc.text((formData.nombre || "NOMBRE NO ESPECIFICADO").toUpperCase(), 10, 30);

        // Datos Personales
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.correo || "No especificado"}`, 10, 40);
        doc.text(`Teléfono: ${formData.telefono || "No especificado"}`, 10, 48);
        doc.text(`DNI: ${formData.dni || "No especificado"}`, 10, 56);
        doc.text(`Fecha de Nacimiento: ${formData.fecha_nac || "No especificado"}`, 10, 64);
        doc.text(`Distrito: ${formData.distrito || "No especificado"}`, 10, 72);

        // Línea de separación
        doc.setDrawColor(0);
        doc.setLineWidth(0.5);
        doc.line(10, 90, 200, 90);

        // Experiencia Laboral
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("EXPERIENCIA LABORAL", 10, 105);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");

        if (formData.empresa_1 || formData.cargo_1 || formData.tiempo_1 || formData.funcion_1) {
          // Empresa en negrita
          doc.setFont("helvetica", "bold");
          doc.text(`${formData.empresa_1 || "No especificado"}`, 10, 120);

          // Cargo y tiempo
          doc.setFont("helvetica", "normal");
          doc.text(`${formData.cargo_1 || "No especificado"}`, 10, 130);
          doc.text(`${formData.tiempo_1 || "No especificado"}`, 200, 130, { align: "right" });

          // Funciones con margen adicional
          const funciones1 = formData.funcion_1 || "No especificado";
          funciones1.split("\n").forEach((funcion, index) => {
            doc.text(`• ${funcion}`, 20, 140 + index * 10); // Moved 10px to the right
          });
        } else {
          doc.text("No cuento con experiencia laboral.", 10, 115);
        }

        if (formData.empresa_2 || formData.cargo_2 || formData.tiempo_2 || formData.funcion_2) {
          let offset = formData.funcion_1 ? 155 : 135;

          // Empresa en negrita
          doc.setFont("helvetica", "bold");
          doc.text(`${formData.empresa_2 || "No especificado"}`, 10, offset);

          // Cargo y tiempo
          doc.setFont("helvetica", "normal");
          doc.text(`${formData.cargo_2 || "No especificado"}`, 10, offset + 10);
          doc.text(`${formData.tiempo_2 || "No especificado"}`, 200, offset + 10, { align: "right" });

          // Funciones con margen adicional
          const funciones2 = formData.funcion_2 || "No especificado";
          funciones2.split("\n").forEach((funcion, index) => {
            doc.text(`• ${funcion}`, 20, offset + 20 + index * 10); // Moved 10px to the right
          });
        }

        // Educación
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("EDUCACIÓN", 10, 198);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.institucion || "No especificado"}`, 10, 208, { bold: true });
        doc.text(`${formData.estudio || "No especificado"}, ${formData.año || "No especificado"}`, 10, 218);

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