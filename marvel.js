/** @format */

let dataArray = [];
let chosenHero = "";
let chosenHeroID = "";
let desc = "";
let pic = "";
let searchBtn = document.querySelector("#APIButton");
let displaySuggestions = document.querySelector("#displaySuggestions");
searchBtn.addEventListener("click", getData);
let searchEnter = document.querySelector("#apiSearch");
let suggestions = document.querySelector("#suggestions");
let localStorage;

searchEnter.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getData();
  }
});

const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

async function getData() {
  let url = getUrlAPI();
  console.log(url);
  // Clear existing suggestions
  clearSuggestions();
  fetchUrl(url);
  setAPIData();
}

function getUrlAPI() {
  let searchHero = document.getElementById("apiSearch");
  let searchP = searchHero.value.trim();
  // Account for spaces
  searchP = searchP.replaceAll(" ", "%20");
  let url = `https://gateway.marvel.com:443/v1/public/characters?${chosenHeroID}&ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}`;

  // let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${searchP}`;
  console.log(url);
  // Check for blank input
  if (searchP.length <= 0) {
    alert("Input cannot be blank.");
  }
  return url;
}

function getUrlSuggestion() {
  let searchHero = document.getElementById("apiSearch");
  let searchP = searchHero.value.trim();
  // Account for spaces
  searchP = searchP.replaceAll(" ", "%20");
  let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${searchP}`;
  console.log(url);
  // Check for blank input
  if (searchP.length <= 0) {
    alert("Input cannot be blank.");
  }
  return url;
}

function clearSuggestions() {
  suggestions.innerHTML = "";
}

async function fetchUrl(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      dataArray = data.data["results"];
    });
}

// Predictive api search
apiSearch.addEventListener("keyup", async function () {
  clearSuggestions();
  if (apiSearch.value.length < 3) {
    clearSuggestions();
    return false;
  }

  let url = getUrlSuggestion();
  fetchUrl(url);

  dataArray.forEach((suggestion) => {
    let heroSug = suggestion.name;
    let d = document.createElement("div");
    d.style.cursor = "pointer";
    d.setAttribute("id", toString(suggestion.id));
    d.setAttribute("onclick", "displayHero('" + heroSug + "')");
    d.innerHTML = "<p>" + heroSug + "</p>";

    document.querySelector("#suggestions").appendChild(d);
  });

  return;
});

function displayHero(hero, id) {
  console.log(hero, id);
  searchEnter.value = hero;
  chosenHero = hero;
  chosenHeroID = id;
  clearSuggestions();
  getData();
  return;
}

function setAPIData() {
  document.querySelector("#heroName").textContent = chosenHero;
  document.querySelector("#heroDescription").innerHTML = "<p>" + desc + "</p>";
  document.querySelector("#heroImage").setAttribute("src", pic);
  return;
}

function onLoad() {
  // Default value when page opens
  searchEnter.value = "Thor";
  getData();
}

window.addEventListener("load", onLoad);
