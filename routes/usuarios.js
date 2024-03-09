import { Router } from "express";
import { usuarioGet, usuarioPut, usuarioPost, usuarioDelete } from "../controllers/usuarios.js";

const router = Router();

router.get('/', usuarioGet)

router.post('/', usuarioPost)

router.put('/:id', usuarioPut)
router.delete('/', usuarioDelete)

export {router}