import express from 'express'
import morgan from 'morgan'
import usuariosRouter from './routes/usuarios.routes.js'

const app = express()
app.use(express.json())//para poder recibir datos en formato JSON
app.use(morgan('dev'))
app.use('/users', usuariosRouter)

app.get('/*', (req, res) => {
    res.status(404).json({ mensaje: 'no se reconoce la direccion web' })
})

app.listen(3003, () => {
    console.log('se esta escuchando el puerto 3003')
})