import { useEffect, useState } from 'react'
import BiscuitList from '../components/BiscuitList'
import TeaList from '../components/TeaList'
import TeaBiscuitForm from '../components/TeaBiscuitForm'

const TeasContainer = () => {

  const [teas, setTeas] = useState([])
  const [biscuits, setBiscuits] = useState([])

  useEffect(() => {
    fetchTeas()
    fetchBiscuits()
  }, [])

  const fetchTeas = () => {
    fetch('http://localhost:9000/api/teas')
      .then(response => response.json())
      .then(teas => setTeas(teas));
  }

  const fetchBiscuits = () => {
    fetch('http://localhost:9000/api/biscuits')
      .then(response => response.json())
      .then(biscuits => setBiscuits(biscuits));
  }

  const handleTeaSubmit = newTea => {
    fetch('http://localhost:9000/api/teas', {
      method: 'POST',
      body: JSON.stringify(newTea),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => fetchTeas())
  }

  const handleBiscuitSubmit = newBiscuit => {
    fetch('http://localhost:9000/api/biscuits', {
      method: 'POST',
      body: JSON.stringify(newBiscuit),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => fetchBiscuits())
  }

  return (
    <>
      <TeaBiscuitForm 
        onTeaSubmit={handleTeaSubmit}
        onBiscuitSubmit={handleBiscuitSubmit}
      />
      <TeaList teas={teas} />
      <BiscuitList biscuits={biscuits} />
    </>
  )
}

export default TeasContainer

