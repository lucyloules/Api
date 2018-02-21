$(document).ready(function() {
  /* Firebase*/
  // Ingreso usuarios o logueo
  function ingresar() {
    console.log('diste click en Ingresar');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // console.log(email);
    // console.log(password);
    if (email === '' || password === '') {
      alert('Debe Ingresar datos');
    } else {
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
  // Registro de nuevos usuarios*/
  function registrar() {
  // console.log('diste click en Ingresar');
    var email = document.getElementById('email2').value;
    var password = document.getElementById('password2').value;
    // console.log(email);
    // console.log(password);
    if (email === '' || password === '') {
      alert('Debe Ingresar datos');
    } else {
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
  /* función que observa la sesion activa de un usuario*/
  function observador() {
    // Si existe un cambio de usuario, se ejecuta un if y caso contrario ejecuta un else
    firebase.auth()
      .onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
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
        }
      });
  }
  observador(); // se ejecuta cuando se carga la practica

  /* Contenido para usuarios logueados*/
  function aparece(user) { // parametro user recibido desde el observador
    var user = user;
    var contenido = document.getElementById('contenido');
    if (user.emailVerified) {
      /* Comillas especiales nos permiten hacer template donde podemos escribir codigo html en el codigo javascript*/
      contenido.innerHTML = `
      <p>Bienvenido</p>  
      <button onclick="cerrar()">Cerrar sesión</button>
      `;
    }
    // contenido.innerHTML = 'prueba del perfil usuario';
  }
  /* Funcion para desloguearse*/
  function cerrar() {
    firebase.auth().signOut() // Cierra sesion desde firebase, toma 2 parametros then y catch
      .then(function() { // (respuesta positiva)
        // Sign-out successful.
        // console.log('Sesión cerrada');
        alert('Su sesion ha cerrado');
      }).catch(function(error) {// (respuesta negativa)/error : parametro
        // An error happened.
        console.log(error);
      });
  }
  // let btnSignout = document.getElementById('btnSigOut');
  // btnSignout.addEventListener('click', cerrar);
  
  /* Api marvel */
  let inputText = document.getElementById('input-text');
  let btnSearch = document.getElementById('btn-search');
  let searchedForText;
 
  btnSearch.addEventListener('click', function() {
    $('.marvelDate').empty();
    $('.imgMarvel').empty();
    fetch('http://gateway.marvel.com/v1/public/comics?apikey=a60bd159889749a73669c0be9f91ce67&ts=9&hash=45cbdbeb188c66926f8b050dde897f1b')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        let title = data.results.title;
        let description = data.results.variantDescription;
        let results = [];

        for (let i = 0; i < data.results.length; i++) {
          results.push(data.results[i].data.results.title);
        }
        console.log(results);
      });
  });
});
