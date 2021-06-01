import React from 'react'

import '../../css/styles.css';

function Formulario() {
    return (

        <div className="container page-section">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <h1 className="font-weight-light text-center" style={{color: 'green'}}>Crear un registro de humedad y temperatura de su ciudad</h1>
        <div className="col text-center">
            <a className="btn btn-secondary btn-center" href="#">Crear Nuevo Registro</a>
        </div>
        <div>
            <h1 className="font-weight-light text-center">Humedad y Temperatura de la ciudad</h1>
            
            <hr className="text-center" style={{width: '750px'}}></hr>
            <div className="container" style={{width: '750px'}}>
                <div className="row">
                    <div className="col">
                        <label>Temperatura</label>
                        <input type="number" className="form-control" id="inputTemperatura" placeholder="0°"></input>
                    </div>
                    <div className="col">
                        <label >Humedad</label>
                        <input type="number" className="form-control" id="inputHumedad" placeholder="0%"></input>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col">
                        <select className="form-control" id="FormControlPais">
                            <option>Seleccione Pais</option>
                            <option>Colombia</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control" id="FormControlCiudad">
                            <option>Seleccione Ciudad</option>
                            <option>Bogota</option>
                            <option>Medellin</option>
                            <option>Bucaramanga</option>
                            <option>Barranquilla</option>
                            <option>Cali</option>
                            <option>Ibague</option>
                            <option>Pasto</option>
                            <option>Neiva</option>
                            <option>Armenia</option>
                            <option>Cartegena</option>
                            <option>Santa Marta</option>
                            <option>Florencia</option>
                            <option>Yopal</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Fecha y Hora</label>
                        <input type="date" className="form-control" id="inputFecha" placeholder="0%"></input>
                    </div>
                </div>
                <hr className="text-center" style={{width: '750px'}}></hr>
                <a className="btn btn-secondary" href="#">Enviar</a>
            </div>

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>


    );
}

export default Formulario;