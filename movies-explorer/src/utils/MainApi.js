export const BASE_URL = 'https://api.kuznecov.nomoredomainsrocks.ru';

function checkRespone(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
}

export function register(password, email, name) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password: password, email: email, name: name }),
  }).then(checkRespone);
}

export function authorize(password, email) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password: password, email: email }),
  }).then(checkRespone);
}

export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  }).then(checkRespone);
}

export function setUserInfo(name, email) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: localStorage.getItem('jwt'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then(checkRespone);
}

export function createMovie(movie) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: localStorage.getItem('jwt'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration.toString(),
        year: movie.year,
        description: movie.description,
        image: movie.image.url,
        trailer: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: movie.image.formats.thumbnail.url,
        movieId: movie.id
    }),
  }).then(checkRespone);
}

export function getSavedMovies() {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      authorization: localStorage.getItem('jwt'),
      'Content-Type': 'application/json',
    },
  }).then(checkRespone);
}

export function deleteMovie(ID) {
  return fetch(`${BASE_URL}/movies/${ID}`, {
    method: 'DELETE',
    headers: {
      authorization: localStorage.getItem('jwt'),
      'Content-Type': 'application/json',
    },
  }).then(checkRespone);
}
