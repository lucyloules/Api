
/* Ingreso usuarios o logueo*/
function ingresar() {
  console.log('diste click en Ingresar');
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  // console.log(email);
  // console.log(password); 
  if (email === '' || password === '') {
    alert('Debe Ingresar datos');
  }
  else {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
  }


}
/* Registro de nuevos usuarios*/
function registrar() {
  // console.log('diste click en Ingresar');
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // console.log(email);
  // console.log(password);
  if (email === '' || password === '') {
    alert('Debe Ingresar datos');
  }
  else {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function() {
        // verificarEmail()
      })
      .catch(function(error) { // promesa catch, si la autentificacion no ocurre catch ejecuta una funcion con parametro e, donde e guardo 2 errores en variables
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
  }


}