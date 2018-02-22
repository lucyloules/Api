$(document).ready(function() {
  /* Api marvel*/
  let inputText = document.getElementById('input-text');
  let btnSearch = document.getElementById('btn-search');
  let searchedForText;


  /* btnSearch.addEventListener('click', function() {
    $('.marvelDate').empty();
    $('.imgMarvel').empty();
    fetch('http://gateway.marvel.com/v1/public/comics?apikey=a60bd159889749a73669c0be9f91ce67&ts=9&hash=45cbdbeb188c66926f8b050dde897f1b')
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        let content = [];
        for (let i = 0; i < data.data.results.length; i++) {
          content.push(data.data.results[i].title);
        }
        console.log(content);
        $('.marvelDate').append('<h5>' + content + '</h5>');
      });
  }); */
  function buscar() {
    $('.marvelDate').empty();
    $('.imgMarvel').empty();
    fetch('http://gateway.marvel.com/v1/public/comics?apikey=a60bd159889749a73669c0be9f91ce67&ts=9&hash=45cbdbeb188c66926f8b050dde897f1b')
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        let content = [];
        for (let i = 0; i < data.data.results.length; i++) {
          content.push(data.data.results[i].title);
        }
        console.log(content);
        $('.marvelDate').append('<h5>' + content + '</h5>');
      });
  }
});
/* fghjklñ{fghjklñfghjkl   sacarrrrrrrrrr  } */