let dataArray = [];
let searchBtn = document.getElementById("apiBtn");
let suggestionContainer = document.querySelector("#suggestionContainer");
searchBtn.addEventListener("click", fetchUrl);
let searchEnter = document.getElementById("apiSearch");
searchEnter.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fetchUrl();
  }
});
const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];
function fetchUrl() {
  let searchHero = document.getElementById("apiSearch");
  let searchP = searchHero.value;
  let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${searchP}`;
  console.log(url);
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      dataArray = data.data["results"];
    });
}
function clearSuggestions() {
  document.querySelector("#suggestionContainer").innerHTML = "";
}
// Predictive api search
apiSearch.addEventListener("keyup", async function () {
  clearSuggestions();
  console.log(apiSearch.value);
  if (apiSearch.value.length <= 3) {
    return false;
  }
  fetchUrl();
  dataArray.forEach((suggestion) => {
    let hero = suggestion.name;
    console.log(hero);
    let d = document.createElement("div");
    d.innerHTML = "<p>" + hero + "</p>";
    searchEnter.appendChild(d);
  });
  return;
});
document.querySelector(".weather").textContent = dataArray["temperature"];