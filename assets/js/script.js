/** @format */

let searchBtn = document.getElementById("apiBtn");
searchBtn.addEventListener("click", fetchUrl);

const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

function fetchUrl() {
  let searchHero = document.getElementById("apiSearch");
  let searchP = searchHero.value;
  let url2 = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${searchP}`;
  console.log(url2);
  fetch(url2)
    .then(function (response) {
      return response.json;
    })
    .then(function (data) {
      console.log(data);
    });
}
