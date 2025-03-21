import React from 'react';

const QuestionList = ({ questions, answers, onAnswerChange, onSubmit, errors }) => {
  return (
    <div className="max-h-[450px] overflow-y-scroll px-10">
      {questions.length === 0 ? (
        <div className="flex flex-col items-center mt-4">
          <p>No hay preguntas disponibles.</p>
        </div>
      ) : (
        questions.map((question, index) => (
          <div key={index} className="mt-4">
            <label className="w-full text-left">{question}</label>
            <textarea
              value={answers[index]}
              onChange={(e) => onAnswerChange(e, index)}
              className={`w-full mt-2 p-2 border ${
                errors[index] ? 'border-red-500' : 'border-primarycolor border-opacity-50'
              } rounded outline-none`}
            />
            {errors[index] && <p className="text-red-500 text-sm mt-1">Completar campo</p>}
          </div>
        ))
      )}
      <div className="flex justify-center mt-12">
        <button
          className="bg-[#0057c2] text-white font-bold py-2 px-4 rounded-full w-32 disabled:bg-gray-400"
          onClick={onSubmit}
          disabled={Object.values(errors).some(error => error)}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default QuestionList;
