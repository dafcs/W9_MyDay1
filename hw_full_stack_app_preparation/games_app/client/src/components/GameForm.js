import { useState } from 'react'
import './GameForm.css'

const GameForm = ({ createGame }) => {

  const [name, setName] = useState('')
  const [playingTime, setPlayingTime] = useState(0)
  const [minNumPlayers, setMinNumPlayers] = useState(0)
  const [maxNumPlayers, setMaxNumPlayers] = useState(0)

  const handleNameChange = event => setName(event.target.value)
  const handlePlayingTimeChange = event => setPlayingTime(event.target.value)
  const handleMinNumPlayersChange = event => setMinNumPlayers(event.target.value)
  const handleMaxNumPlayersChange = event => setMaxNumPlayers(event.target.value)
  
  const handleSubmit = event => {
    event.preventDefault()
    const game = {
      name,
      playingTime,
      players: {
        min: minNumPlayers,
        max: maxNumPlayers
      }
    }
    createGame(game)
    setName('')
    setPlayingTime(0)
    setMinNumPlayers(0)
    setMaxNumPlayers(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={handleNameChange} 
        required
      />

      <label htmlFor="playingTime">Playing Time:</label>
      <input 
        type="number" 
        id="playingTime" 
        value={playingTime} 
        onChange={handlePlayingTimeChange} 
        required
      />

      <label htmlFor="minNumPlayers">Min Players:</label>
      <input 
        type="number" 
        id="minNumPlayers" 
        value={minNumPlayers} 
        onChange={handleMinNumPlayersChange} 
        required
      />

      <label htmlFor="maxNumPlayers">Max Players:</label>
      <input 
        type="number" 
        id="maxNumPlayers" 
        value={maxNumPlayers} 
        onChange={handleMaxNumPlayersChange} 
        required
      />

      <input type="submit" name="submit" value="Save"/>
    </form>
  )
}

export default GameForm