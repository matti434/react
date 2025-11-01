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




export const guardarUsuario = (usuario, contraseña, email = "") => {
  const usuarios = JSON.parse(localStorage.getItem("usuario")) || [];

  if (usuarios.find((u) => u.usuario === usuario)) {
    throw new Error("El usuario ya existe");
  }

  const nuevoUsuario = { usuario, contraseña, email };
  usuario.push(nuevoUsuario);
  localStorage.setItem("usuario", JSON.stringify(usuarios));
  return true;
};

export const validarLogin = (usuario, contraseña) => {
  // Primero verificar el estado de los datos
  verificarYOfrecerRestauracion();

  const usuarios = JSON.parse(localStorage.getItem(CLAVE_USUARIOS)) || [];
  const usuarioEncontrado = usuarios.find(
    (u) => u.usuario === usuario && u.contraseña === contraseña
  );
};
