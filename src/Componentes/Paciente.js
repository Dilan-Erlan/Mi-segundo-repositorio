import React from "react";

function Paciente({ paciente }) {
    return (
        <div  className="paciente-item">
            <p>
                <strong>Paciente:</strong>{paciente.nombre} <strong>Edad:</strong> {paciente.edad} <strong>Síntomas:</strong> {paciente.sintoma}
            </p>
        </div>
    );
}

export default Paciente;