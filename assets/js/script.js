/** @format */

//let ts = String(Date().timeIntervalSince1970);
let search = document.getElementById("apiSearch");
let searchBtn = document.getElementById("apiBtn");
let ts = new Date().getTime();

const [timestamp, apiKey, privKey, hashValue] = [
  ts,
  publicKey,
  privateKey,
  hashVal,
];
let stringToHash = timestamp + apiKey + privKey;
let hash = md5(stringToHash);

let url2 = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${search.value}`;

const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${search.value}`;

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
