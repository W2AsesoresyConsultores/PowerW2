import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  Box,
  TextField,
  Button,
  Input,
  Typography,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";

const Step3 = ({ data, handleChange, nextStep, prevStep, handleQuestionsChange }) => {
  const [questions, setQuestions] = useState([""]);
  const [companyImage, setCompanyImage] = useState(null);

  // Manejar los cambios en las preguntas
  const handleQuestionChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);
  };

  // Agregar una nueva pregunta
  const addQuestion = () => {
    if (questions.length < 6) {
      setQuestions([...questions, ""]);
    }
  };

  // Eliminar una pregunta específica
  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  // Manejar cambios en la imagen de la empresa
  const handleImageChange = (e) => {
    setCompanyImage(e.target.files[0]);
  };

  // Navegar al preview y actualizar las preguntas en el estado global
  const handlePreview = () => {
    handleQuestionsChange(questions); // Actualiza las preguntas en el estado global
    nextStep(); // Navega al siguiente paso (Preview)
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
        boxShadow: 1,
      }}
    >
      {/* Modalidad */}
      <Box mb={3}>
        <Typography variant="body1" gutterBottom sx={{ color: 'text.primary' }}>
          Modalidad
        </Typography>
        <Select
          name="modalidad"
          value={data.modalidad}
          onChange={handleChange}
          fullWidth
          required
          sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            '& .MuiSelect-icon': {
              color: 'text.primary',
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'text.primary',
            },
            '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: 'text.primary',
            }
          }}
        >
          <MenuItem value="">Selecciona una modalidad</MenuItem>
          <MenuItem value="Presencial">Presencial</MenuItem>
          <MenuItem value="Remoto">Remoto</MenuItem>
          <MenuItem value="Híbrido">Híbrido</MenuItem>
        </Select>
      </Box>

      {/* Horario */}
      <TextField
        label="Horario"
        variant="outlined"
        name="horario"
        value={data.horario}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        sx={{ bgcolor: 'background.default', color: 'text.primary' }}
      />

      {/* Imagen de la empresa */}
      {/*<Box mb={3}>
        <Typography variant="body1" gutterBottom sx={{ color: 'text.primary' }}>
          Imagen de la empresa
        </Typography>
        <label htmlFor="upload-image">
          <Input
            id="upload-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            sx={{
              width: '100%',
              height: 'auto',
              border: '1px solid #ccc',
              padding: '16px',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
      </Box>*/}

      {/* Preguntas para el Postulante */}
      <Box mb={3}>
        <Typography variant="body1" gutterBottom sx={{ color: 'text.primary' }}>
          Preguntas para el Postulante
        </Typography>
        {questions.map((question, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            <TextField
              value={question}
              onChange={(e) => handleQuestionChange(index, e)}
              fullWidth
              placeholder={`Pregunta ${index + 1}`}
              required={index === 0} // Solo la primera pregunta es obligatoria
              variant="outlined"
              margin="normal"
              sx={{ bgcolor: 'background.default', color: 'text.primary' }}
            />
            {index === questions.length - 1 && questions.length < 6 && (
              <IconButton color="primary" onClick={addQuestion}>
                <IoMdAdd />
              </IconButton>
            )}
            {index > 0 && (
              <IconButton
                color="secondary"
                onClick={() => removeQuestion(index)}
              >
                <MdDeleteForever />
              </IconButton>
            )}
          </Box>
        ))}
      </Box>

      {/* Botones de navegación */}
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button variant="contained" color="secondary" onClick={prevStep}>
          Anterior
        </Button>
        <Button variant="contained" color="primary" onClick={handlePreview}>
          Preview
        </Button>
      </Box>
    </Box>
  );
};

export default Step3;