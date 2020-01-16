import React from 'react';
import { ShipLayout, ShipTypes, CellChargeStatus, CellCharges } from '../models';
import { ICounterProps, Counter } from './Counter';
import { ShipList } from './ShipList';
import { BattleField } from './BattleField';
import { addChargedCell } from '../actions';
import { connect } from 'react-redux';

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

interface IAppProps {
  charges: CellCharges;
  chargeCell: any
}

const App: React.FC<IAppProps> = (props) => {
  const { shipTypes, layout } = mockData;
  const counterProps: ICounterProps = { firstPlayerPoints: 0, secondPlayerPoints: 0 }
  const { charges, chargeCell } = props;

  console.log(charges);
  return (
    <div className="App">
      <Counter {...counterProps} />
      <ShipList shipTypes={shipTypes} />
      <BattleField layout={layout} cellCharges={charges} chargeCell={chargeCell} />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    charges: Object.assign({}, state.chargeReducer.charges)
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    chargeCell: (row: number, column: number, chargeStatus: CellChargeStatus) => dispatch(addChargedCell(row, column, chargeStatus))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
