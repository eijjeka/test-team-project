import './sass/main.scss';
import debounce from 'lodash.debounce';
import apiService from './fetchApi';
import compiledTemplate from './heandlebars/card.hbs';

const refs = {
  input: document.querySelector('.input'),
  container: document.querySelector('.card-container'),
  error: document.querySelector('.request__result'),
};

const newApiService = new apiService();

function onInput(event) {
  refs.error.style.opacity = 0;
  let value = event.target.value.trim();
  if (value === '') {
    refs.error.style.opacity = 1;
  }

  refs.container.innerHTML = '';
  newApiService.searchName = value;

  newApiService.fetchArticles().then(({ results }) => {
    refs.container.insertAdjacentHTML('beforeend', compiledTemplate(results));
  });
}

//   console.log(value);
//   const API_KEY = 'cd00d8c55831cbeec8ccdad1db16d6d2';
//   axios
//     .get(
//       `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`,
//     )
//     .then(function (response) {
//       // handle success
//       console.log(response);
//     });

refs.input.addEventListener('input', debounce(onInput, 500));
