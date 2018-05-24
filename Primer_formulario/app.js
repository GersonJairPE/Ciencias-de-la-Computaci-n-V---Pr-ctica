firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
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

/*================================================================================
Esta función sirve para poder alamacenar los datos ingresados en el login
y la parte de Firebase realiza la verificacion o utiliza la autorixacion ya hecha 
para  que el usuario pueda ingresar a la pagina
================================================================================*/
function ingresar(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Bienvenido a DeepcodE : " + email);
        // ...
      });

}


/*================================================================================
Esta función sirve para poder alamacenar e introducir datos de usuarios nuevos
que recien se registran y se almacenan en la nube (Firebase)
================================================================================*/

function registrar(){

    var email = document.getElementById("email_regis").value;
    var pass = document.getElementById("pass_regis").value;

    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("No registrado")
        // ...
      });
      
}

/*================================================================================
Esta función sirve para pque el usuario activo cierre sesion
================================================================================*/

function logout(){
    firebase.auth().signOut();
    desaparece();

}

function desaparece(){
    var contenido = document.getElementById("contenido");
    contenido.innerHTML=`
    Bienvenido Amigo
    `;
}