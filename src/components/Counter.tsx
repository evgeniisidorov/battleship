import React from 'react';

export interface ICounterProps {
  firstPlayerPoints: number;
  secondPlayerPoints: number;
}

export const Counter: React.FC<ICounterProps> = (props) => {
  const { firstPlayerPoints, secondPlayerPoints } = props;
  return <div>
    <span>
      {`Player 1 -- ${firstPlayerPoints}`}
    </span>
    <br />
    <span>
      {`Player 2 -- ${secondPlayerPoints}`}
    </span>
  </div>
}