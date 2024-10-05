import './index.scss'
import axios from 'axios'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



export default function Cadastrar() {
    const [nome, setNome] = useState('');
    const [canal, setCanal] = useState('');
    const [aberto, setAberto] = useState(false);

    const { id } =  useParams();

    async function salvar() {
        let paramCorpo = {
            "nome": nome,
            "canal": canal,
            "aberto": aberto
        }

        if ( id == undefined ) {
            //  CRIAR
            const url = 'http://localhost:3000/listadecanais/';
            let resp = await axios.post(url, paramCorpo);
    
            alert(`Canal adicionada na lista. Id: ${resp.data.novoId}`);
        }
        else {
            //  ALTERAR
            const url = `http://localhost:3000/listadecanais/${ id }`;
            let resp = await axios.put(url, paramCorpo);
    
            alert(`Canal alterada na lista.`);

        }

    };

    async function buscar() {
        const url = ` http://localhost:3000/listadecanais/${ id } `;
        let resp = await axios.get(url);

        console.log(resp.data);
        
        setNome(resp.data.nome)
        setCanal(resp.data.canal)
    };

    useEffect(() => {
        buscar();
    }, []);

    return (
        <div className='pagina-cadastrar'>
            <h1> CADASTRAR </h1>


            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                </div>

                <div>
                    <label>Motivo:</label>
                    <input type='text' value={canal} onChange={e => setCanal(e.target.value)}/>
                </div>

                <div>
                    <label>Perdoado:</label>
                    <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
                </div>
            </div>

            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}
