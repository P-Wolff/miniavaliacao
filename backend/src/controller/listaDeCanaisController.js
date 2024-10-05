import * as db from '../repository/listaDeCanaisRepository.js';


import { Router } from "express";
const endpoints = Router();


endpoints.get( '/listadecanais/', async ( req, resp ) => {

    try {
        let registros = await db.consultarListaDeCanais();
        resp.send( registros );

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

endpoints.get( '/listadecanais/:id', async ( req, resp ) => {

    try {
        let id = req.params.id;
        let registros = await db.consultarListaDeCanaisPorId( id );
        resp.send( registros[0] );

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


endpoints.post( '/listadecanais/', async ( req, resp ) => {
    try {
        let canal = req.body;
        let id = await db.inserirListaDeCanais( canal );

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


endpoints.put( '/listadecanais/:id', async ( req, resp ) => {
    try {
        let id = req.params.id;
        let canal = req.body;

        let linhasAfetadas = await db.alterarListaDeCanais( id, canal );

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


endpoints.delete( '/listadecanais/:id', async ( req, resp ) => {
    try {
        let id = req.params.id;
        
        let linhasAfetadas = await db.removerListaDeCanais( id );

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