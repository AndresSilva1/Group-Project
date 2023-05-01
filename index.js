/** @format */

let search = document.querySelector("#input-search");
let searchBtn = document.querySelector("#submit-search");
let suggestions = document.querySelector("#suggestions");
let displaySuggestions = document.querySelector("#display-suggestions");
let suggestionData = [];

// Declare API variables
const timestamp = ts;
const apiKey = publicKey;
const hash = hashVal;

// Create listener for when api button is clicked
searchBtn.addEventListener("click", getData);
// Create listener for when searches are being typed
search.addEventListener("keyup", searchSuggestion);

async function searchSuggestion() {
  clearSuggestions();
  if (search.value.length <= 3) return false;
  let url = getSuggestionUrl();
  fetchSuggestions(url);
  showSuggestions();
}

function getSuggestionUrl() {
  let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${search.value.trim()}`;
  return url;
}

function showSuggestions() {
  suggestionData.forEach((element) => {
    let hero = element.name;
    let d = document.createElement("div");

    d.style.cursor = "pointer";
    let len = search.value.length;
    let heroText =
      "<b>" + hero.substring(0, len) + "</b>" + hero.substring(len);
    d.innerHTML = heroText;
    d.setAttribute("onclick", "selectSuggestion('" + hero + "')");
    suggestions.appendChild(d);
  });
}

function selectSuggestion(hero) {
  clearSuggestions();
  search.value = hero;
}

function getData() {
  //
  clearSuggestions();
  // Parameterize API url
  let url = getAPIUrl();
  console.log(url);
  // Get API data
  fetchData(url);
  //
  //setHTML(apiData);
}

// Clear search suggestions
function clearSuggestions() {
  suggestions.innerHTML = "";
}

function getAPIUrl() {
  let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&name=${search.value.trim()}`;
  return url;
}

function fetchData(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.data["results"];
    })
    .then(function (results) {
      setHTML(results);
    });
}

function fetchSuggestions(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.data["results"];
    })
    .then(function (results) {
      suggestionData = results;
    });
}

function setHTML(data) {
  console.log(data);
  data.forEach((element) => {
    // Display hero name
    document.querySelector("#heroName").textContent = element.name;
    // Display hero description
    document.querySelector("#heroDescription").textContent =
      element.description;
    // Display hero thumbnail
    let thumbnail =
      element["thumbnail"]["path"] + "." + element["thumbnail"]["extension"];
    document.querySelector("#heroImage").setAttribute("src", thumbnail);
  });
  return;
}

window.onload = getData();
