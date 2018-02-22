
/* función que observa la sesion activa de un usuario*/
function observador() {
  // Si existe un cambio de usuario, se ejecuta un if y caso contrario ejecuta un else
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $('#main').hide();
      $('#contenido').show();
      aparece(user); // se envia el parametro user a la funcion aparece
      console.log('Existe usuario activo');
      var displayName = user.displayName;
      var email = user.email;
      // console.log('Correo verificado: ' + user.emailVerified);
      // var emailVerified = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
      // No user is signed in.
      console.log('No existe usuario activo');
      $('#contenido').hide();
      $('#main').show();
      $('#btnLogIn').click(ingresar);
      $('#btnSignIn').click(registrar);
    }
  });
}
observador(); // se ejecuta cuando se carga la documento


// Registro de nuevos usuarios*/
function registrar() {
  console.log('diste click en Ingresar');
  let email2 = document.getElementById('email2').value;
  let password2 = document.getElementById('password2').value;
  console.log(email2);
  console.log(password2);
  firebase.auth().createUserWithEmailAndPassword(email2, password2)
    .then(function() {
      // verificarEmail()
    })
    .catch(function(error) { // promesa catch, si la autentificacion no ocurre catch ejecuta funcion con parametro e, donde se guardo 2 errores en variables
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(errorCode);
      // console.log(errorMessage);
      alert(error.code);
    });
};

// Ingreso usuarios o logueo
function ingresar() {
  console.log('diste click en Ingresar');
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  console.log(email);
  console.log(password);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert(error.code);
    });
};
/* Funcion para desloguearse */
function cerrar() {
  // se envia el parametro user a la funcion aparece
  firebase.auth().signOut() // Cierra sesion con firebase, toma 2 parametros then y catch
    .then(function() { // (respuesta positiva)
      // Sign-out successful.
      console.log('Sesión cerrada');
      alert('Su sesion ha cerrado');
    }).catch(function(error) {// (respuesta negativa)/error : parametro
      // An error happened.
      console.log(error);
    });
}
/* $('#btnLogOut').click(cerrar); //   clase, ya que hay 2 btns para desloguearse movil y desktop---- > fallo de esta forma
$('#btnLogOut2').click(cerrar); */

/* funcion para usuarios logueados */
function aparece(user) { // parametro user recibido desde el observador
  var user = user;
  var contenido = document.getElementById('contenido');
  /* Comillas especiales nos permiten hacer template donde podemos escribir codigo html en el codigo javascript*/
  contenido.innerHTML = `
      <section>
      <nav class="red darken-1">
        <div class="nav-wrapper container">
          <a href="#" class="brand-logo">
            <img class="logo logo-nav" src="assets/IMG/marvel.png" alt="Marvel">
          </a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a class="user" href="#">Bienvenido, ${user.email}</a></li> 
              <li><a onclick="cerrar()" href="#">Log out</a></li>    
            </ul>
            <ul class="side-nav" id="mobile-demo">
              <li><a class="user" href="#">Bienvenido, ${user.email}</a></li>
              <li><a onclick="cerrar()" href="#">Log out</a></li>
            </ul>
        </div>
      </nav>
      <div class="row">
        <div class="col-s-12">
          <input id="input-Text" type="text" name="" value="">
          <button id="btn-search" class="waves-effect waves-light btn grey darken-4 white-text"type="button" name="button">Buscar</button>
        </div>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col-lg-12 imgMarvel"></div>
        <div class="col-lg-12 col-lg-offset-4 text-center">
          <div class="marvelDate grey darken-4"></div>
        </div>
      </div>
    </section>
      `;
}

