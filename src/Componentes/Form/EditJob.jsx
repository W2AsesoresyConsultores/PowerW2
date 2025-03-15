import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { useParams } from 'react-router-dom';
import EditStep1 from './EditStep1';
import EditStep2 from './EditStep2';
import EditStep3 from './EditStep3';
import HeaderAdmin from '../Admin/HeaderAdmin';
import MenuAdmin from '../Admin/MenuAdmin';
import { Box, Stepper, Step, StepLabel } from '@mui/material';

const EditJob = () => {
    const { id_oferta } = useParams();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        puesto: '',
        descripcion: '',
        requisitos: '',
        ubicacion: '',
        sueldo: '',
        funciones: '',
        horario: '',
        empresa: '',
        wtsp_url: '',
        beneficios: '',
        modalidad: '',
        preg_1: '',
        preg_2: '',
        preg_3: '',
        preg_4: '',
        preg_5: '',
        preg_6: '',
        id_reclutador: null,
    });

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const { data, error } = await supabase
                    .from('Oferta')
                    .select('*')
                    .eq('id_oferta', id_oferta)
                    .single();

                if (error) throw error;
                setFormData(data);
            } catch (error) {
                console.error('Error fetching job:', error.message);
            }
        };

        fetchJob();
    }, [id_oferta]);

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (submittedData) => {
        try {
            const { error } = await supabase
                .from('Oferta')
                .update(submittedData)
                .eq('id_oferta', id_oferta);

            if (error) throw error;
            console.log('Job updated successfully');
        } catch (error) {
            console.error('Error updating job:', error.message);
        }
    };

    return (
        <div className="w-full h-screen flex">
            <HeaderAdmin />
            <MenuAdmin />
            
            <div className="w-full h-full bg-white flex flex-col font-dmsans overflow-y-scroll pl-72 pt-24">
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
                        {step === 1 && <EditStep1 data={formData} handleChange={handleChange} nextStep={nextStep} />}
                        {step === 2 && <EditStep2 data={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
                        {step === 3 && <EditStep3 data={formData} handleChange={handleChange} prevStep={prevStep} onSubmit={handleSubmit} />}
                    </form>
                </Box>
            </div>
        </div>
    );
};

export default EditJob;
