let usuarios = [{ id: 1, nombre: 'Ines tornudo', email: 'itorn@gmail.com', direccion: 'lacalle 123', telefono: '291-4111111' },
{ id: 2, nombre: 'Monica Galindo', email: 'moniga@gmail.com', direccion: 'lacalle 678', telefono: '291-4222222' },
{ id: 3, nombre: 'Esteban Quito', email: 'este03@gmail.com', direccion: 'laavenida 2345', telefono: '291-4333333' }]



function ultimoID() {
    const cantUsers = usuarios.length
    const ultID = usuarios[cantUsers - 1].id
    return ultID
}


function mostrarUsuarios() {
    return usuarios
}

function obtenerUsuario(usuarioID) {
    let user = usuarios.find((usuario) => usuario.id === Number((usuarioID)))
    return user
}


function modificarUsuario(id, nuevoDato) {
    let usuarioModi = usuarios.findIndex(usuario => usuario.id === Number(id))
    console.log(usuarioModi)
    if (usuarioModi !== -1) {   // por el metodo find index que no encuentra nada
        usuarios[usuarioModi] = nuevoDato
    }
}

function agregarUsuario(usuario) {
    usuarios.push(usuario)
}

function eliminarUsuario(usuarioID) {
    usuarios = usuarios.filter(usuario => usuario.id !== usuarioID)
}




export default {
    mostrarUsuarios,
    obtenerUsuario,
    modificarUsuario,
    agregarUsuario,
    eliminarUsuario,
    ultimoID
}
