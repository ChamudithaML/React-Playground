import React, { useEffect, useState } from 'react'

function Games() {

  const [games, setGames] = useState([{}])

  useEffect(
    () => {
      fetch("/games")
        .then(response => response.json()).then(data => setGames(data))
        .catch(err => console.log("Couldn't fetch data", err))
    }, []
  );

  return (
    <div>
      {games.map(
        (game, index) => <p key={index}>{game.title}</p>
      )}
    </div>
  )
}

export default Games;
