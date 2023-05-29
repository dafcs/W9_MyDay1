import GameCard from './GameCard'
import './GameGrid.css'

const GameGrid = ({ games, deleteGame }) => {
  return (
    <div className="game-wrapper">
      {games.map(game => {
        return (
          <GameCard 
            key={game._id} 
            game={game} 
            deleteGame={deleteGame}
          />
        )
      })}
    </div>
  )
}

export default GameGrid