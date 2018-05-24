

//Si se deja al aire este codigo se ejecutara automaticamente

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    aparece();
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    window.alert("Bienvenido: " + email);

    document.getElementById("login").style.display="none";
    document.getElementById("register").style.display="none";
	  document.getElementById("logout").style.display="block";

    // ...
  } else {
  	console.log("No hay usuario logeado");
  	document.getElementById("login").style.display ="block";
  	document.getElementById("register").style.display="block";
  	document.getElementById("logout").style.display="none";
    // User is signed out.
    // ...
  }
});


function ingresar(){

	var userEmail = document.getElementById("email").value; //Sirve para poder buscar en el documentos los ids que tengas el nombre que se puso entre lkas comillas
	var userPass  = document.getElementById("pass").value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("Error:" + errorCode + errorMessage) //Mostrar el mensaje de error en la consola
  window.alert("Welcome");
  // ...
});
}

function registrarse(){

var userEmail = document.getElementById("new_mail").value;
var userPass = document.getElementById("new_pass").value;

firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("usuario_invalido");
  // ...
});

}

//Aqui se cierra sesion
function logout (){
	firebase.auth().signOut();
	desaparece();
}

//Aparece es para buscar 
function aparece(){
	var contenido = document.getElementById("contenido");
	contenido.innerHTML = `
	<style>
	h1{
	color:green;
	}
	</style>
	<h1>Bienvenido</h1> `;
}

function desaparece(){
	var contenido = document.getElementById("contenido");
	contenido.innerHTML = `
	<style>
	h1{
	color:red;
	}
	</style>
	<h1>Bienvenido</h1> `;
}