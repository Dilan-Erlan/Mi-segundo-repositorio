
import React from 'react';

function GestorCola({ cola, atenderPaciente }) {
    function obtenerPacienteActual() {
        if (cola.length === 0) {
            return "No hay pacientes en la cola.";
        }
        const pacienteActual = cola[0];
        return `${pacienteActual.nombre} (Edad: ${pacienteActual.edad}, Sintoma: ${pacienteActual.sintoma})`;
    }
    function obtenerSiguientePaciente() {
        if (cola.length <= 1) {
            return "No hay más pacientes.";
        }
        const siguientePaciente = cola[1];
        return `${siguientePaciente.nombre} (Edad: ${siguientePaciente.edad}, Sintona: ${siguientePaciente.sintoma})`;
    }
    function obtenerPacientesRestantes() {
        return cola.length;
    }
    return (
        <div id='cola'>
            <h1 id='h1'>Gestión de Cola de Pacientes</h1 >
            <p><strong>Paciente actual:</strong> {obtenerPacienteActual()}</p>
            <p><strong>Próximo paciente:</strong> {obtenerSiguientePaciente()}</p>
            <p><strong>Pacientes restantes:</strong> {obtenerPacientesRestantes()}</p>
            <button className="btn btn-danger" onClick={atenderPaciente}>
                Atender Paciente
            </button>
        </div >
    );
}
export default GestorCola;