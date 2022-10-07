const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const joke = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((err) => err.message);

  console.log(joke);
};

fetchJoke();
