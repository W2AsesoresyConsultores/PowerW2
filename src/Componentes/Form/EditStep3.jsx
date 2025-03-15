import React, { useState, useEffect } from "react";
import { Box, TextField, Button, FormControl, Typography, Select, MenuItem, FormHelperText, IconButton } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import ShareModal from "./ShareModal"; // Asegúrate de importar ShareModal

const EditStep3 = ({ data = {}, handleChange, prevStep, onSubmit, errors = {} }) => {
  const [questions, setQuestions] = useState([""]);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [createdJob, setCreatedJob] = useState(null);

  useEffect(() => {
    const existingQuestions = [
      data.preg_1 || "",
      data.preg_2 || "",
      data.preg_3 || "",
      data.preg_4 || "",
      data.preg_5 || "",
      data.preg_6 || ""
    ].filter(q => q.trim() !== "");

    if (existingQuestions.length > 0) {
      setQuestions(existingQuestions);
    }
  }, [data]);

  const handleQuestionChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    if (questions.length < 6) {
      setQuestions(prevQuestions => [...prevQuestions, ""]);
    }
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  
    // Eliminar la pregunta correspondiente del objeto data
    const updatedData = { ...data };
    for (let i = index + 1; i <= 6; i++) {
      updatedData[`preg_${i}`] = updatedData[`preg_${i + 1}`] || "";
    }
    delete updatedData[`preg_6`]; // Si la pregunta eliminada es la última, asegurarse de eliminar `preg_6`
  };

  const handleSubmit = () => {
    const updatedData = { ...data };
  
    // Solo guarda preguntas que no estén vacías
    questions.forEach((q, i) => {
      updatedData[`preg_${i + 1}`] = q.trim() !== "" ? q : null;
    });
  
    // Asegurarse de eliminar preguntas que hayan sido eliminadas
    for (let i = questions.length + 1; i <= 6; i++) {
      updatedData[`preg_${i}`] = null;
    }
  
    onSubmit(updatedData);
  
    // Abre el modal después de guardar
    setCreatedJob(updatedData);
    setIsShareModalOpen(true);
  };

  return (
    <Box
      fullWidth
      sx={{
        maxWidth: 600,
        minWidth: 600,
        mx: "auto",
        mt: 0,
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1
      }}
    >
      <FormControl fullWidth required error={!!errors.modalidad} margin="normal">
        <Typography variant="body1" gutterBottom>
          Modalidad
        </Typography>
        <Select
          name="modalidad"
          value={data.modalidad}
          onChange={handleChange}
          variant="outlined"
          sx={{
            bgcolor: "background.default",
            color: "text.primary"
          }}
        >
          <MenuItem value="">Selecciona una modalidad</MenuItem>
          <MenuItem value="Presencial">Presencial</MenuItem>
          <MenuItem value="Remoto">Remoto</MenuItem>
          <MenuItem value="Híbrido">Híbrido</MenuItem>
        </Select>
        {errors.modalidad && <FormHelperText>{errors.modalidad}</FormHelperText>}
      </FormControl>

      <TextField
        label="Horario"
        variant="outlined"
        name="horario"
        value={data.horario || ""}
        onChange={handleChange}
        fullWidth
        required
        multiline
        rows={4}
        margin="normal"
        error={!!errors.horario}
        helperText={errors.horario || ""}
      />

      <Typography variant="body1" gutterBottom>
        Preguntas para el Postulante
      </Typography>
      {questions.map((question, index) => (
        <Box key={index} display="flex" alignItems="center" mb={2}>
          <TextField
            value={question}
            onChange={(e) => handleQuestionChange(index, e)}
            fullWidth
            placeholder={`Pregunta ${index + 1}`}
            required
            variant="outlined"
            margin="normal"
          />
          {index === questions.length - 1 && questions.length < 6 && (
            <IconButton color="primary" onClick={addQuestion}>
              <IoMdAdd />
            </IconButton>
          )}
          {index > 0 && (
            <IconButton color="secondary" onClick={() => removeQuestion(index)}>
              <MdDeleteForever />
            </IconButton>
          )}
        </Box>
      ))}

      <Box mt={3} display="flex" justifyContent="space-between">
        <Button
          onClick={prevStep}
          sx={{
            color: "#1E50A2",
            fontWeight: "bold",
            textTransform: "none"
          }}
        >
          ← Volver
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            bgcolor: "#1E50A2",
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >
          Guardar
        </Button>
      </Box>

      {/* Mostrar el modal después de guardar */}
      {isShareModalOpen && createdJob && (
        <ShareModal
          selectedJob={createdJob}
          onClose={() => setIsShareModalOpen(false)}
        />
      )}
    </Box>
  );
};

export default EditStep3;
