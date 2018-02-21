$(document).ready(function(){
/*Firebase*/
// Ingreso usuarios o logueo
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
// Registro de nuevos usuarios*/
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

/*Api marvel*/
let inputText = document.getElementById('input-text');
let btnSearch = document.getElementById('btn-search');
let searchedForText;

btnSearch.addEventListener('click',function(){
	$('.marvelDate').empty();
	/*$('.imgMarvel').empty();*/
	fetch('http://gateway.marvel.com/v1/public/comics?apikey=a60bd159889749a73669c0be9f91ce67&ts=9&hash=45cbdbeb188c66926f8b050dde897f1b')
  .then (function(response){

    return response.json();
  })
  .then(function(data){
    console.log(data);
    let content = [];
    let iD=[];


    for(let i = 0; i < data.data.results.length; i++){
     content.push(data.data.results[i].title);
   }
   console.log(content);
   for (var i = 0; i < data.data.results.length; i++) {
     iD.push(data.data.results[i].id);
   }
   console.log(iD);

   $('.marvelDate').append('<h6>' + content + '</h6>');

 });
});
});
