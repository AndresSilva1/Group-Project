/** @format */

let search = document.getElementById("apiSearch");
let searchBtn = document.getElementById("apiBtn");

const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${search.value}`;

function fetchUrl() {
  fetch(url)
    .then(function (response) {
      return response.json;
    })
    .then(function (data) {
      console.log(data);
    });
}

searchBtn.addEventListener("click", fetchUrl);
