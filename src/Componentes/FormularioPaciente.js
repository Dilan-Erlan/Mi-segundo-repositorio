import React, { useState } from "react";

function FormularioPaciente({ agregarPaciente }) {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [sintoma, setSintoma] = useState('');

    function manejarEnvio(e) {
        e.preventDefault();
        if (!nombre || !edad || !sintoma) return;

        agregarPaciente({ nombre: nombre, edad: edad, sintoma: sintoma });
        setNombre('');
        setEdad('');
        setSintoma('');
    }

    return (
        <form onSubmit={manejarEnvio} className="mb-4">
            <h1 id="h2">Agregar Paciente</h1 >
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del paciente"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Edad del paciente"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />
            </div>

            <div className="mb-3">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Sintoma del paciente"
                    value={sintoma}
                    onChange={(e) => setSintoma(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Agregar Paciente
            </button>
        </form>
    );
}

export default FormularioPaciente;