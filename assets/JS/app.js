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
