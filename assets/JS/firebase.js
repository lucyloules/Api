$(document).ready(() => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $('#main').hide();
      $('#contenido').show();
    } else {
      $('#contenido').hide();
      $('#login-btn').click(ingresar);
      $('#btnSignIn').click(registrar);
    }
  }); // firebase
});

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
  // console.log('diste click en Ingresar');
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  // console.log(email);
  // console.log(password);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(errorCode);
      // console.log(errorMessage);
      alert(error.code);
    });
};