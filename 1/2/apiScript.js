// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const jokeDiv = document.getElementById('jokeContainer');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  const resolved = fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data.joke);

  return resolved;
};

window.onload = async () => {
  const joke = await fetchJoke();
  jokeDiv.innerHTML = joke;
};
