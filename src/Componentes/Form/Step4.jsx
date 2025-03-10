import React, { useState } from "react";

const Step4 = ({ onPrevious, onSubmit }) => {
  const [email, setEmail] = useState("pgianmarco10@gmail.com");
  const [sendEmail, setSendEmail] = useState(false);
  const [requireCV, setRequireCV] = useState(false);
  const [allowContact, setAllowContact] = useState(false);
  const [hasDeadline, setHasDeadline] = useState("no");

  return (
    <div className="step-container">
      <h2>Preferencias de comunicación</h2>
      <label>Obtenga actualizaciones de las postulaciones *</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="add-email">+ Agregar email</button>
      <br />
      <input 
        type="checkbox" 
        checked={sendEmail} 
        onChange={() => setSendEmail(!sendEmail)} 
      /> Enviar un email individual cada vez que alguien se postule.
      
      <h2>Preferencias de postulación</h2>
      <input 
        type="checkbox" 
        checked={requireCV} 
        onChange={() => setRequireCV(!requireCV)} 
      /> Se requiere CV
      <br />
      <input 
        type="checkbox" 
        checked={allowContact} 
        onChange={() => setAllowContact(!allowContact)} 
      /> Permitir que los candidatos se comuniquen por email.
      
      <h3>¿Hay una fecha límite para postularse?</h3>
      <label>
        <input 
          type="radio" 
          value="no" 
          checked={hasDeadline === "no"} 
          onChange={() => setHasDeadline("no")} 
        /> No
      </label>
      <label>
        <input 
          type="radio" 
          value="si" 
          checked={hasDeadline === "si"} 
          onChange={() => setHasDeadline("si")} 
        /> Sí
      </label>

      <div className="buttons">
        <button onClick={onPrevious}>Atrás</button>
        <button onClick={onSubmit}>Finalizar</button>
      </div>
    </div>
  );
};

export default Step4;
