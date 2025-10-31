

 export const guardarUsuario = (usuario,contraseña,email="")=>{
    const usuarios = JSON.parse(localStorage.getItem('usuario')) || [];

    if(usuarios.find(u => u.usuario === usuario)){
        throw new Error("El usuario ya existe");
    }

    const nuevoUsuario= {usuario,contraseña,email};
    usuario.push(nuevoUsuario);
    localStorage.setItem('usuario',JSON.stringify(usuarios))
    return true;
 }

 export const validarLogin = (usuario,contraseña) =>{
   
 }