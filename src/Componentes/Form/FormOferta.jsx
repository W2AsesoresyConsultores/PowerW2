import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { UserAuth } from '../../Context/AuthContext';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { Box, Stepper, Step, StepLabel } from '@mui/material';
import ShareModal from './ShareModal'; // Asegúrate de importar ShareModal

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
        empresa_img_url: '',
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
    const [shareModalOpen, setShareModalOpen] = useState(false);
    const [createdJob, setCreatedJob] = useState(null);

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

    // Fetch empresa name and image URL based on idEmpresa
    useEffect(() => {
        const fetchNombreEmpresa = async () => {
            if (idEmpresa) {
                const { data: empresaData, error: empresaError } = await supabase
                    .from('Empresa')
                    .select('nombre_empresa, empresa_url')
                    .eq('id_empresa', idEmpresa)
                    .single();

                if (empresaError) {
                    console.error('Error al obtener el nombre de la empresa:', empresaError);
                } else {
                    setNombreEmpresa(empresaData?.nombre_empresa);
                    setFormData(prevState => ({
                        ...prevState,
                        empresa: empresaData?.nombre_empresa,
                        empresa_img_url: empresaData?.empresa_url,
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
        setFormData(prevState => ({ ...prevState, [name]: value }));
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
    const handleSubmit = async () => {
        console.log('Datos a enviar:', formData); 
        const { data, error } = await supabase.from("Oferta").insert([formData]).select(); // Asegúrate de usar .select()
    
        if (error) {
            console.error('Error al insertar:', error);
            return null;
        } else {
            console.log('Oferta creada:', data);
            setCreatedJob(data[0]); // Guarda la oferta creada
            setShareModalOpen(true); // Abre el ShareModal
            resetForm(); 
            return data; // Asegúrate de retornar los datos creados
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
            empresa_img_url: '',
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
                                onCreateOffer={handleSubmit} // Pasar la función de creación de oferta
                            />
                        )}
                    </form>
                </Box>
            </div>

            {/* Mostrar el ShareModal si está abierto */}
            {shareModalOpen && createdJob && (
                <ShareModal 
                    selectedJob={createdJob} // Pasa la oferta creada
                    onClose={() => setShareModalOpen(false)} 
                />
            )}
        </div>
    );
};

export default FormOferta;