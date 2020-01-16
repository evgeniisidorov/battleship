import React from 'react';
import { ShipLayout, ShipTypes, CellChargeStatus, CellCharges } from '../models';
import { ICounterProps, Counter } from './Counter';
import { ShipList } from './ShipList';
import { BattleField } from './BattleField';

interface Data {
  shipTypes: ShipTypes,
  layout: ShipLayout
}

const mockData: Data = {
  "shipTypes": {
    "carrier": { "size": 5, "count": 1 },
    "battleship": { "size": 4, "count": 1 },
    "cruiser": { "size": 3, "count": 1 },
    "submarine": { "size": 3, "count": 1 },
    "destroyer": { "size": 2, "count": 1 }
  },
  "layout": [
    { "ship": "carrier", "positions": [[2, 9], [3, 9], [4, 9], [5, 9], [6, 9]] },
    { "ship": "battleship", "positions": [[5, 2], [5, 3], [5, 4], [5, 5]] },
    { "ship": "cruiser", "positions": [[8, 1], [8, 2], [8, 3]] },
    { "ship": "submarine", "positions": [[3, 0], [3, 1], [3, 2]] },
    { "ship": "destroyer", "positions": [[0, 0], [1, 0]] }
  ]
}

const App: React.FC = () => {
  const { shipTypes, layout } = mockData;
  const counterProps: ICounterProps = { firstPlayerPoints: 0, secondPlayerPoints: 0 }
  const cellCharges: CellCharges = new Map<string, CellChargeStatus>();
  cellCharges.set('1.2', CellChargeStatus.Beaten);
  cellCharges.set('3.4', CellChargeStatus.Missed);

  return (
    <div className="App">
      <Counter {...counterProps} />
      <ShipList shipTypes={shipTypes} />
      <BattleField layout={layout} cellCharges={cellCharges} />
    </div>
  );
}

export default App;
