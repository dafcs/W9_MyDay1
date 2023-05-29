import './GameCard.css'

const GameCard = ({ game, deleteGame }) => {

  const handleDeleteClick = () => {
    deleteGame(game._id)
  }

  const numOfPlayers = game.players.min === game.players.max ?
                       game.players.min :
                       `${game.players.min} - ${game.players.max}`

  return (
    <div className="game-card">
      <h3>{game.name}</h3>
      <p>Playing time: {game.playingTime}</p>
      <p>Players: {numOfPlayers}</p>
      <button 
        type="button" 
        className="delete-btn" 
        onClick={handleDeleteClick}
      >
      </button>
    </div>
  )
}

export default GameCard