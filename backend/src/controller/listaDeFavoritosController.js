import * as db from '../repository/listaDeFavoritosRepository.js';


import { Router } from "express";
const endpoints = Router();


endpoints.get( '/listadefavoritos/', async ( req, resp ) => {

    try {
        let registros = await db.consultarListaDeFavoritos();
        resp.send( registros );

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

endpoints.get( '/listadefavoritos/:id', async ( req, resp ) => {

    try {
        let id = req.params.id;
        let registros = await db.consultarListaDeFavoritosPorId( id );
        resp.send( registros[0] );

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


endpoints.post( '/listadefavoritos/', async ( req, resp ) => {
    try {
        let favorito = req.body;
        let id = await db.inserirListaDeFavoritos( favorito );

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


endpoints.put( '/listadefavoritos/:id', async ( req, resp ) => {
    try {
        let id = req.params.id;
        let favorito = req.body;

        let linhasAfetadas = await db.alterarListaDeCanais( id, favorito );

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


endpoints.delete( '/listadefavoritos/:id', async ( req, resp ) => {
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