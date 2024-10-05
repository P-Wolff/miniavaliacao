import './index.scss'
import axios, { Axios } from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Consultar() {
    const [ listadeCanais, setListaDeCanais ] = useState([]);

    async function buscar() {
        const url = 'http://localhost:3000/listadecanais/';
        let resp = await axios.get(url);

        setListaDeCanais(resp.data);
    }

    async function buscar() {
        const url = ` http://localhost:3000/listadecanais/${ id } `;
        let resp = await axios.get(url);

        console.log(resp.data);
        
    };

    useEffect(() => {
        buscar();
    }, []);

    return(
        <div className="pagina_consultar pagina">
            <h1>CONSULTAR</h1>

            <button onClick={buscar}> Buscar </button>


            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Canal</th>
                        <th>Aberto</th>
                    </tr>
                </thead>

                <tbody
                {...listadeCanais.map( item =>
                        <tr>
                            <td>{ item.id }</td>
                            <td>{ item.nome }</td>
                            <td>{ item.canal }</td>
                            <td>{ item.aberto ? 'Sim' : 'Não' }</td>
                            <td>
                                <Link to={`/cadastrar/${ item.id }`}> Alterar </Link>
                            </td>
                        </tr>
                    )}>
                </tbody>

            </table>


        </div>
    );
}