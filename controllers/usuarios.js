import { request, response } from "express"

const usuarioGet = (req = request, res = response) => {

    const query = req.query

    res.status(200).json({
        msg:'get API - contralador',
        query
    })
}
const usuarioPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg:'post API - contralador',
        body
    })
}
const usuarioPut = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg:'put API - contralador',
        id
    })
}
const usuarioDelete = (req, res = response) => {
    res.json({
        msg:'delete API - contralador'
    })
}

export {usuarioGet, usuarioPost, usuarioPut, usuarioDelete}
