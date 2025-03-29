import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { Box, TextField, Button, Select, MenuItem, IconButton, Typography, FormHelperText, FormControl } from "@mui/material";
import EmpresaSelector from './EmpresaSelector';
import Preview from './Preview';
import ShareModal from './ShareModal'; // Importa ShareModal
import { supabase } from '../../supabase/supabase.config';

const Step3 = ({ data, handleChange, nextStep, prevStep, handleQuestionsChange, onCreateOffer }) => {
    const [questions, setQuestions] = useState([""]);
    const [errors, setErrors] = useState({ modalidad: false, horario: false, empresa: false, questions: false });
    const [previewOpen, setPreviewOpen] = useState(false);
    const [empresas, setEmpresas] = useState([]);
    const [shareModalOpen, setShareModalOpen] = useState(false); // Estado para el ShareModal
    const [createdJob, setCreatedJob] = useState(null); // Para almacenar la oferta creada

    useEffect(() => {
        const fetchEmpresas = async () => {
            const { data: empresasData, error } = await supabase
                .from('Empresa')
                .select('id_empresa, nombre_empresa, empresa_url');

            if (error) {
                console.error('Error al obtener las empresas:', error);
            } else {
                setEmpresas(empresasData);
            }
        };

        fetchEmpresas();
    }, []);

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
    };

    const validateFields = () => {
        const newErrors = {
            modalidad: !data.modalidad,
            horario: !data.horario.trim(),
            empresa: !data.id_empresa
        };

        setErrors(newErrors);
        return !Object.values(newErrors).includes(true);
    };

    const handleOpenPreview = () => {
        handleQuestionsChange(questions);
        setPreviewOpen(true);
    };

    const handleCreateOffer = async () => {
        const isValid = validateFields();
        if (isValid) {
            await handleQuestionsChange(questions);
            const createdData = await onCreateOffer(); // Asegúrate de que esto devuelva los datos
            if (createdData) {
                setCreatedJob(createdData[0]); // Guarda la oferta creada
                setShareModalOpen(true); // Abre el ShareModal
            }
        }
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
            {/* Modalidad */}
            <FormControl fullWidth required error={errors.modalidad} margin="normal">
                <Typography variant="body1" gutterBottom>
                    Modalidad
                </Typography>
                <Select
                    name="modalidad"
                    value={data.modalidad}
                    onChange={handleChange}
                    sx={{
                        bgcolor: 'background.default',
                        color: 'text.primary'
                    }}
                >
                    <MenuItem value="">Selecciona una modalidad</MenuItem>
                    <MenuItem value="Presencial">Presencial</MenuItem>
                    <MenuItem value="Remoto">Remoto</MenuItem>
                    <MenuItem value="Híbrido">Híbrido</MenuItem>
                </Select>
                {errors.modalidad && <FormHelperText>Este campo es obligatorio</FormHelperText>}
            </FormControl>

            <TextField
                label="Horario"
                variant="outlined"
                name="horario"
                value={data.horario}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                error={errors.horario}
                helperText={errors.horario ? "Este campo es obligatorio" : ""}
            />

            {/* Campo de Selección de Empresa */}
            <EmpresaSelector
                onEmpresaChange={(empresa) => {
                    console.log('Empresa seleccionada:', empresa);
                    handleChange({ target: { name: 'empresa', value: empresa.nombre_empresa } });
                    handleChange({ target: { name: 'id_empresa', value: empresa.id_empresa } });
                    handleChange({ target: { name: 'empresa_img_url', value: empresa.empresa_url } });
                }}
                empresaSeleccionada={data.empresa}
            />
            {errors.empresa && <FormHelperText error>Este campo es obligatorio</FormHelperText>}

            {/* Preguntas para el Postulante */}
            <Box mb={3}>
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
                            error={errors.questions && index === 0}
                            helperText={errors.questions && index === 0 ? "La primera pregunta es obligatoria" : ""}
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
            </Box>

            {/* Botones de navegación */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
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

                <Box display="flex" gap={2}>
                    <Button
                        onClick={handleOpenPreview}
                        sx={{
                            color: "#1E50A2",
                            fontWeight: "bold",
                            textTransform: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: 1
                        }}
                    >
                        Vista previa <AiOutlineEye size={20} />
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleCreateOffer} // Cambia aquí
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
                        Crear Oferta
                    </Button>
                </Box>
            </Box>

            {/* Componente de Vista Previa */}
            <Preview 
                open={previewOpen} 
                onClose={() => setPreviewOpen(false)} 
                data={{ 
                    ...data, 
                    questions, 
                    empresa_url: empresas.find(emp => emp.nombre_empresa === data.empresa)?.empresa_url 
                }} 
            />

            {/* Componente del ShareModal */}
            {shareModalOpen && createdJob && (
                <ShareModal 
                    selectedJob={createdJob} // Pasa la oferta creada
                    onClose={() => setShareModalOpen(false)} 
                />
            )}
        </Box>
    );
};

export default Step3;