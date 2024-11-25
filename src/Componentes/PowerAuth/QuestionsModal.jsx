import React, { useState, useEffect } from 'react';
import { supabase } from "../../supabase/supabase.config";
import { UserAuth } from '../../Context/AuthContext';
import LoadingSpinner from './LoadingSpinner';
import QuestionList from './QuestionList';
import SubmissionSuccess from './SubmissionSuccess';

function QuestionsModal({ isOpen, onClose, selectedJob }) {
  const { user } = UserAuth();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false); // Cambiar a false inicialmente
  const [answers, setAnswers] = useState([]);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false); // Nuevo estado para verificar si ya cargó

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true); // Activar el spinner
        const { data, error } = await supabase
          .from('Oferta')
          .select('preg_1, preg_2, preg_3, preg_4, preg_5')
          .eq('id_oferta', selectedJob.id_oferta)
          .single();

        if (error) throw error;

        const questionsData = [data.preg_1, data.preg_2, data.preg_3, data.preg_4, data.preg_5];
        setQuestions(questionsData.filter((question) => question));
        setLoading(false); // Detener el spinner
        setHasLoaded(true); // Marcar como cargado
      } catch (error) {
        console.error('Error fetching questions:', error.message);
        setLoading(false); // Asegurarse de detener el spinner en caso de error
        setHasLoaded(true); // Marcar como cargado incluso si hay error
      }
    };

    if (isOpen && selectedJob && !hasLoaded) {
      // Solo cargamos preguntas si el modal está abierto y no se han cargado antes
      fetchQuestions();
      setAnswers(['', '', '', '', '']);
      setSubmissionSuccess(false);
    }
  }, [isOpen, selectedJob, hasLoaded]); // Añadir hasLoaded como dependencia

  const handleClose = () => {
    onClose();
    setHasLoaded(false); // Restablecer el estado para que cargue nuevamente si se vuelve a abrir
  };

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    try {
      if (!selectedJob || !selectedJob.id_oferta) {
        console.error('Oferta no válida:', selectedJob);
        alert('Oferta no válida.');
        return;
      }

      const { data: profileData, error: profileError } = await supabase
        .from('perfiles')
        .select('nombre, correo, avatar_url, telefono, dni')
        .eq('id', user.id)
        .single();

      if (profileError || !profileData) {
        console.error('Error al obtener el perfil:', profileError ? profileError.message : 'Perfil no encontrado.');
        alert('No se pudo obtener el perfil del usuario.');
        return;
      }

      const { nombre, correo, avatar_url, telefono, dni } = profileData;
      const fechaPostulacion = new Date().toLocaleString("en-US", { timeZone: "America/Lima" });

      const { error: insertError } = await supabase
        .from('Postulacion')
        .insert({
          id_oferta: selectedJob.id_oferta,
          user_id: user.id,
          name_user: nombre,
          correo: correo,
          telefono: telefono,
          resp_1: answers[0],
          resp_2: answers[1],
          resp_3: answers[2],
          resp_4: answers[3],
          resp_5: answers[4],
          fecha_postulacion: fechaPostulacion,
          estado: 'pendiente',
          avatar_url: avatar_url,
          dni: dni,
        });

      if (insertError) {
        console.error('Error al insertar en postulaciones:', insertError.message);
        alert('Error al enviar la postulación.');
        return;
      }

      const { error: updateError } = await supabase
        .from('Oferta')
        .update({ count_postulados: selectedJob.count_postulados + 1 })
        .eq('id_oferta', selectedJob.id_oferta);

      if (updateError) {
        console.error('Error al actualizar el conteo de postulados:', updateError.message);
        alert('Error al actualizar el conteo de postulados.');
        return;
      }

      setSubmissionSuccess(true);
      setAnswers(['', '', '', '', '']); // Limpiar respuestas
    } catch (error) {
      console.error('Error al enviar la postulación:', error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300`}>
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl mx-auto relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl focus:outline-none" onClick={handleClose}>
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Preguntas para el Postulante</h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <LoadingSpinner />
          </div>
        ) : (
          <QuestionList
            questions={questions}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            onSubmit={handleSubmit}
          />
        )}

        <SubmissionSuccess isVisible={submissionSuccess} onAccept={handleClose} />
      </div>
    </div>
  );
}

export default QuestionsModal;