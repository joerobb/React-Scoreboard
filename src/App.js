import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Player from './Player.js';
import AddPlayerForm from './AddPlayerForm.js'


class App extends Component {

state = {
  players: [
    {
     name: "Guil",
     score: 0,
     id: 1
   },
   {
     name: "Treasure",
     score: 0,
     id: 2
   },
   {
     name: "Ashley",
     score: 0,
     id: 3
   },
   {
     name: "James",
     score: 0,
     id: 4
   }
  ]
};

// player ID Counter

prevPlayerId = 4;

//get High score function

getHighScore = () => {
  const scores = this.state.players.map( p => p.score );
  const highScore = Math.max(...scores);

  if (highScore) {
    return highScore;
  }
  return null;
}



//Here we create a function in the App Component. We then pass it to the Player
//Component using Props so the player component can access it.
handleScoreChange = (index, delta) => {
  this.setState( prevState => ({
    score: prevState.players[index].score += delta
  }));
}

//This function will takes all of the current players in state using a spread operator
//and the adds a new player (passed from the form and score and id)

handleAddPlayer = (name) => {
this.setState( prevState => {
  return {
    players: [
      ...this.state.players,
      {
        name,
        score: 0,
        id: this.prevPlayerId += 1
      }
    ]
  };
});
}

handleRemovePlayer = (id) => {
  this.setState(prevState => {
    return {
    players: prevState.players.filter(p => p.id !== id )
  };
    });
}


  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
    <Header
        title="scoreboard"
        players={this.state.players}
    />

    {this.state.players.map( (player, index) =>
    <Player
      name={player.name}
      score={player.score}
      id={player.id}
      key={player.id.toString()}
      index={index}
      changeScore={this.handleScoreChange}
      removePlayer={this.handleRemovePlayer}
      isHighScore={highScore === player.score} //is a players score prop equal to the highest score?
    />
  )}
  <AddPlayerForm
   addPlayer={this.handleAddPlayer}
    />
  </div>
    );
  }
}






ReactDOM.render(
<App  />,
document.getElementById('root')
);

export default App;
