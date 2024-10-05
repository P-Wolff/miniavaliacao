import * as db from '../repository/listaDeUsuariosRepository.js';


import { Router } from "express";
const endpoints = Router();


endpoints.get( '/listadeusuarios/', async ( req, resp ) => {

    try {
        let registros = await db.consultarListaDeUsuarios();
        resp.send( registros );

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

endpoints.get( '/listadeusuarios/:id', async (req, resp) => {

    try {
        let id = req.params.id;
        let registros = await db.consultarListaDeUsuariosPorId( id );
        resp.send( registros[0] );

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


endpoints.post( '/listadeusuarios/', async ( req, resp ) => {
    try {
        let usuario = req.body;
        let id = await db.inserirListaDeUsuarios( usuario );

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


endpoints.put( '/listadeusuarios/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let usuario = req.body;

        let linhasAfetadas = await db.alterarListaDeUsuarios( id, usuario );

        if ( linhasAfetadas >= 1 ) {
            resp.send();
        }
        else {
            resp.status(400).send({ erro: 'Nenhum registro encontrado' })
        }
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


endpoints.delete( '/listadeusuarios/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        
        let linhasAfetadas = await db.removerListaDeUsuarios( id );

        if ( linhasAfetadas >= 1 ) {
            resp.send();
        }
        else {
            resp.status(400).send({ erro: 'Nenhum registro encontrado' })
        }
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


export default endpoints;