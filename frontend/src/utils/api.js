class Api {
  constructor({url}) {
    this._url = url;
  }
  sendAnswers({questions, answers}) {
    return fetch(`${this._url}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        questions: questions,
        answers: answers
      })
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
      });
  }
}

const api = new Api ({url: 'http://localhost:3000'});

export default api;
