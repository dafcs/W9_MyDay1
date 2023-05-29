const baseURL = 'http://localhost:9000/api/games/'

 const GamesService = {
  getGames() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  postGame(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteGame(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}

export default GamesService