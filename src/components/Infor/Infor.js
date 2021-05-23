import React from 'react'
import { connect } from 'react-redux';
import { cargarCiudad } from '../../redux/actions';
import  InformacionCiudad  from './InformacionCiudad';


export const ciudades = [
    'bogota',
    'new york',
    'cali',
    'tokyo',
    'paris',
    'tunja',
    'ibague',
    'roma',
    'cairo',
    'hiroshima',
    'nagasaki',
    'isfahan',
    'mumbai',
    'anchorage'
]
function _Infor({ cargarCiudad }) {

    function seleccionarCiudad(evento) {
        const ciudad = evento.target.value;
        cargarCiudad(ciudad);
    }
    return (
        <div>

            <div className="col-12 border">

                <h1> Informacion de datos</h1>
                <div className="d-flex justify-content-center w-100 my-4">
                    <select onChange={(e) => seleccionarCiudad(e)} className="w-50 p-2 border-primary" aria-label="Default select example">
                        <option selected>Selecciona tu ciudad</option>
                        {ciudades.map((ciudad, indice) => (
                            <option key={indice} value={ciudad}>{ciudad}</option>
                        ))}
                    </select>
                </div>

            </div>

            <InformacionCiudad/>
        </div>
    )
}
export default connect(null, { cargarCiudad })(_Infor)