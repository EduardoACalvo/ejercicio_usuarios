import express from "express";
import db from '../db.js'
const router = express.Router()

router.get('/mostrar-usuarios', (req, res) => {
    const showUsers = db.mostrarUsuarios()
    res.json(showUsers)
})


router.get('/obtener-usuario/:id', (req, res) => {
    let usuarioId = req.params.id
    let usuario = db.obtenerUsuario(usuarioId)
    console.log(usuario)
    if (usuario !== undefined) {
        res.status(200).json(usuario)
    }
    else {
        res.status(404).json({ mensaje: 'usuario NO encontrada' })
    }
})


router.put('/modificar-usuario/:id', (req, res) => {
    const usuarioID = req.params.id
    let id = usuarioID
    const { nombre, email, direccion, telefono } = req.body  //destructuring
    db.modificarUsuario(usuarioID, { id, nombre, email, direccion, telefono })
    res.json({ mensaje: 'Usuario Modificado' })
})


router.post('/agregar-usuario', (req, res) => {
    const ultimID = db.ultimoID()
    const { nombre, email, direccion, telefono } = req.body
    const id = ultimID + 1
    db.agregarUsuario({ id, nombre, email, direccion, telefono })
    res.json({ mensaje: 'Usuario Agregado' })
})


router.delete('/eliminar-usuario/:id', (req, res) => {
    let id = parseInt(req.params.id)
    db.eliminarUsuario(id)
    res.json({ mensaje: 'Usuario Eliminado' })
})


export default router;