import React, { PureComponent } from 'react';
import Counter from './Counter.js';
import Star from './Star.js';


//PureComponent checks to see whether render is necessary or not - use when you have performance issues.

//To use destructuring in classes, you have to add an object as a variable and assign it to this.props.
class Player extends PureComponent {
  render() {
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore,
      isHighScore
    } = this.props;

    console.log(name + ' rendered');
    return (
      <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
      <Star isHighScore={isHighScore}
      />

      { name}
      </span>

      <Counter
      score={score}
      index={index}
      changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
