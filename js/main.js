function mostrarData(){
	var nomb = document.getElementById("nombre").value;
	var apell = document.getElementById("apellido").value;
	var mail = document.getElementById("email").value;
	var direc = document.getElementById("direccion").value;
	var fono = document.getElementById("telefono").value;
	var opcionTe = document.getElementById("teescogido").value;
	var imprimirDatos = document.getElementById("clientes");


	imprimirDatos.innerHTML = "<br><strong>Nombre: </strong>" + nomb + "<br><strong>Apellido: </strong>" + apell + "<br><strong>Dirección: </strong>" + direc + "<br><strong>Correo: </strong>" + mail + "<br><strong>Teléfono: </strong>" + fono + "<br><strong>Té seleccionado: </strong>" + opcionTe;
}
