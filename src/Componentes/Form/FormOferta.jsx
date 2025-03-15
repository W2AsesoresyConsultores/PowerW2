import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { UserAuth } from '../../Context/AuthContext';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Preview from './Preview';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { Box, Stepper, Step, StepLabel } from '@mui/material';

const FormOferta = () => {
    const { user } = UserAuth();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        puesto: '',
        cantidadPersonas: '',
        descripcion: '',
        requisitos: '',
        ubicacion: '',
        sueldo: '',
        funciones: '',
        horario: '',
        empresa: '',
        id_empresa: null,
        beneficios: '',
        modalidad: '',
        preg_1: '',
        preg_2: '',
        preg_3: '',
        preg_4: '',
        preg_5: '',
        preg_6: '',
        id_reclutador: user?.id || null,
    });
    const [idEmpresa, setIdEmpresa] = useState(null);
    const [nombreEmpresa, setNombreEmpresa] = useState('');

    // Fetch empresa id based on user
    useEffect(() => {
        const fetchIdEmpresa = async () => {
            if (user?.id) {
                const { data: perfilData, error: perfilError } = await supabase
                    .from('perfiles')
                    .select('id_empresa')
                    .eq('user_id', user.id)
                    .single();

                if (perfilError) {
                    console.error('Error al obtener el perfil:', perfilError);
                } else {
                    setIdEmpresa(perfilData?.id_empresa);
                }
            }
        };

        fetchIdEmpresa();
    }, [user]);

    // Fetch empresa name based on idEmpresa
    useEffect(() => {
        const fetchNombreEmpresa = async () => {
            if (idEmpresa) {
                const { data: empresaData, error: empresaError } = await supabase
                    .from('Empresa')
                    .select('nombre_empresa')
                    .eq('id_empresa', idEmpresa)
                    .single();

                if (empresaError) {
                    console.error('Error al obtener el nombre de la empresa:', empresaError);
                } else {
                    setNombreEmpresa(empresaData?.nombre_empresa);
                    setFormData(prevState => ({
                        ...prevState,
                        empresa: empresaData?.nombre_empresa,
                        id_empresa: idEmpresa
                    }));
                }
            }
        };

        fetchNombreEmpresa();
    }, [idEmpresa]);

    // Step navigation
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle question-specific changes
    const handleQuestionsChange = (questions) => {
        setFormData({ 
            ...formData, 
            preg_1: questions[0] || '',
            preg_2: questions[1] || '',
            preg_3: questions[2] || '',
            preg_4: questions[3] || '',
            preg_5: questions[4] || '',
            preg_6: questions[5] || '',
        });
    };

    // Submit data to Supabase
    const handleSubmit = async (submittedData) => {
        const { data, error } = await supabase.from("Oferta").insert([submittedData]);

        if (error) {
            console.error('Error al insertar:', error);
        } else {
            console.log('Oferta creada:', data);
            resetForm(); // Reset form data after submission
        }
    };

    const resetForm = () => {
        setFormData({
            puesto: '',
            cantidadPersonas: '',
            descripcion: '',
            requisitos: '',
            ubicacion: '',
            sueldo: '',
            funciones: '',
            horario: '',
            empresa: '',
            id_empresa: null,
            beneficios: '',
            modalidad: '',
            preg_1: '',
            preg_2: '',
            preg_3: '',
            preg_4: '',
            preg_5: '',
            preg_6: '',
            id_reclutador: user?.id || null,
        });
        setStep(1); // Return to the first step
    };

    // Confirm data submission from Preview
    const handleConfirm = async () => {
        await handleSubmit(formData); // Submit all form data
    };

    // Cancel preview and return to Step 3
    const handleCancel = () => {
        setStep(3); // Return to the previous step
    };

    return (
        <div className="w-full h-screen flex">
            <HeaderAdmin />
            <MenuAdmin />
            
            <div className="w-full h-full bg-[#fafbff] dark:bg-[#141a21] dark:text-white flex flex-col font-dmsans overflow-y-scroll pl-72 pt-24">
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '7%', fontFamily: 'sans-serif'}}>
                    <Stepper activeStep={step - 1} orientation="vertical" sx={{ mr: 4 }}>
                        <Step>
                            <StepLabel>Información general</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Sobre el trabajo</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Información adicional</StepLabel>
                        </Step>
                    </Stepper>
                    <form onSubmit={(e) => e.preventDefault()}>
                        {step === 1 && (
                            <Step1 
                                data={formData} 
                                handleChange={handleChange} 
                                nextStep={nextStep} 
                            />
                        )}
                        {step === 2 && (
                            <Step2 
                                data={formData} 
                                handleChange={handleChange} 
                                nextStep={nextStep} 
                                prevStep={prevStep} 
                            />
                        )}
                        {step === 3 && (
                            <Step3 
                                data={formData} 
                                handleChange={handleChange} 
                                nextStep={nextStep} 
                                prevStep={prevStep}  
                                handleQuestionsChange={handleQuestionsChange}
                            />
                        )}
                        {step === 4 && (
                            <Preview
                                step1Data={formData}
                                step2Data={formData}
                                step3Data={formData}
                                onConfirm={handleConfirm}
                                onCancel={handleCancel}
                            />
                        )}
                    </form>
                </Box>
            </div>
        </div>
    );
};

export default FormOferta;