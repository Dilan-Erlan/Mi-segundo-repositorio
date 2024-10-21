import React from 'react';
import Paciente from './Paciente';

function ColaPacientes({ pacientes }) {
    return (
        <div id='div'>
            <center><h2 id='h3'>Pacientes en la Cola</h2></center>

            {pacientes.length === 0 ? (
                <p>No hay pacientes en la cola</p>
            ) : (
                pacientes.map((paciente, index) => (
                    <Paciente key={index} paciente={paciente} />
                ))
            )}
        </div>
    );
}

export default ColaPacientes;