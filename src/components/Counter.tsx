import React from 'react';

export interface ICounterProps {
  firstPlayerPoints: number;
  secondPlayerPoints: number;
}

export const Counter: React.FC<ICounterProps> = (props) => {
  const { firstPlayerPoints, secondPlayerPoints } = props;
  return <div className="counter">
    <div className="counter-player">
      <span className="counter-player__number">{firstPlayerPoints}</span>
      <div className="counter-player__divider" />
      <span className="counter-player__name">Player 1</span>
    </div>
    <div className="counter-player">
      <span className="counter-player__number">{secondPlayerPoints}</span>
      <div className="counter-player__divider" />
      <span className="counter-player__name">Player 2</span>
    </div>
  </div>
}