const CLAVE_USUARIOS = "usuarios";
const CLAVE_BACKUP = "backupUsuarios";
const CLAVE_USUARIO_ACTUAL = "usuarioActual";

export const inicializarSistemaBackpu = () => {
  if(!localStorage.getItem(CLAVE_BACKUP)){
    localStorage.setItem(CLAVE_BACKUP,JSON.stringify([]));
  }
};
// de obeto/array a texto
const actualizarBackup = (usuarios) => {
  localStorage.setItem(CLAVE_BACKUP,JSON.stringify(usuarios));
  console.log('✅Backup actualizado:', usuarios.length, 'usuarios');
}

// de texto a objeto
export const verificarYOfrecerRestauracion= () => {
  const usuarioActuales = JSON.parse(localStorage.getItem(CLAVE_USUARIOS)) || []; // creo un array vacio para evitar errores
  const usuariosBackup = JSON.parse(localStorage.getItem(CLAVE_BACKUP)) || []; 

  if(usuarioActuales.length === 0 && usuariosBackup.length > 0){
    const restaurar = window.confirm(
      `No se encontro usuarios en el sistema.\n\nSe detecto una copia de seguridad con ${usuariosBackup} usuario(s).\n\n ¿Quieres restaurar los usuarios 
      desde la copia de emergencia?`
    );

    if(restaurar){
      localStorage.setItem(CLAVE_USUARIOS,JSON.stringify(usuariosBackup));
      console.log('✅ Usuarios restaurados desde backup:', usuariosBackup.length);
      return true;
    }
  }


  if(usuarioActuales.length>0){
    actualizarBackup(usuarioActuales);
  }

  return false
}

export const guardarUsuario = (usuario,contraseña,email="") => {
  const usuarios = JSON.parse(localStorage.getItem(CLAVE_USUARIOS)) || [];

  if(usuarios.find(u => u.usuario === usuario)){
    throw new Error("El usuario ya existe");
  }

  const nuevoUsuario = {usuario,contraseña,email, fechaRegistro: new Date().toISOString()};
  usuarios.push(nuevoUsuario);

  //guardo en usuarios principales
  localStorage.setItem(CLAVE_USUARIOS,JSON.stringify(usuarios));

  actualizarBackup(usuarios);

  console.log('Usuario registrado y backup actualizado');
  return true;
}

