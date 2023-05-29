const TeaList = ({ teas }) => {
  return (
    <div id="tea-list">
      <h2>All the teas!</h2>
      <ul>
        {teas.map(tea => {
          return (
            <li key={tea.name}>{tea.name} by {tea.brand}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default TeaList