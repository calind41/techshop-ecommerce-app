import React, { Fragment } from 'react';
import './InfoTable.css'

export default function InfoTable({ listaAtribute }) {

    return (
        <Fragment>
            <div className='infoTablesContainer'>
                {
                    listaAtribute.map((item, idx) => {
                        return (
                            <table className='info-tbl' key={idx}>
                                <tr>
                                    <th>{item.numeGrup}</th>
                                    <th></th>
                                </tr>
                                {
                                    item.atribute_grup.map((atribut, idx) => {
                                        return (
                                            <tr key={idx}>
                                                <td><span>{atribut.denumire_atribut.split('_').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') + ':'}</span></td>
                                                <td><span>{atribut.valoare_atribut}</span></td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        )
                    })
                }
            </div>
        </Fragment >
    )
}

