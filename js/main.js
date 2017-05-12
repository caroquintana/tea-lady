//Rescatar el comentario del usuario
function mostrarData() {
	//Rescatar datos usuario y producto escogido
	var nomb = document.getElementById("nombre").value;
	var apell = document.getElementById("apellido").value;
	var email = document.getElementById("email").value;
	var direc = document.getElementById("direccion").value;
	var tel = document.getElementById("telefono").value;	
	var opciónTe = document.getElementById("datosusuario").value;
	
	var reflejarDatos = document.getElementById("cliente");
	reflejarDatos.innerHTML +=  nomb;	
}