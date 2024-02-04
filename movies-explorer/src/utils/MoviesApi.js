const url = 'https://api.nomoreparties.co/beatfilm-movies';

function request(options) {
  return fetch(url, options).then((res) => handleRespone(res));
}

function handleRespone(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
}

export function getMovies() {
  return request({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
