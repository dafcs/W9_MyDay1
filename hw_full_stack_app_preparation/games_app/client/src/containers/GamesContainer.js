import { useState, useEffect } from 'react'
import GameForm from "../components/GameForm"
import GameGrid from "../components/GameGrid"
import GamesService from '../services/GamesService'

const GamesContainer = () => {

  const [games, setGames] = useState([])

  useEffect(() => {
    GamesService.getGames()
      .then(games => setGames(games))
  }, [])

  const createGame = newGame => {
    GamesService.postGame(newGame)
      .then(savedGame => setGames([...games, savedGame]))
  }

  const deleteGame = idToDelete => {
    GamesService.deleteGame(idToDelete)
      .then(() => {
        setGames(games.filter(game => game._id !== idToDelete))
      })
  }

  return (
    <>
      <GameForm createGame={createGame} />
      <GameGrid games={games} deleteGame={deleteGame} />
    </>
  )
}

export default GamesContainer