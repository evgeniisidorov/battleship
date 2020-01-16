import React from 'react';
import { ShipTypes, CellChargeStatus, CellCharges, ShipPositionInStrings } from '../models';
import { ICounterProps, Counter } from './Counter';
import { ShipList } from './ShipList';
import { BattleField } from './BattleField';
import { addChargedCell } from '../actions';
import { connect } from 'react-redux';

interface IAppProps {
  charges: CellCharges;
  shipTypes: ShipTypes;
  chargeCell: any;
  layout: ShipPositionInStrings[]
}

const App: React.FC<IAppProps> = (props) => {
  const { charges, chargeCell, shipTypes, layout } = props;

  const firstPlayerPoints = Object.values(charges).filter(x => x === CellChargeStatus.Beaten).length;
  const secondPlayerPoints = Object.values(charges).filter(x => x === CellChargeStatus.Missed).length;
  const counterProps: ICounterProps = { firstPlayerPoints,  secondPlayerPoints}

  return (
    <div className="app">
      <Counter {...counterProps} />
      <ShipList shipTypes={shipTypes} />
      <BattleField layout={layout} cellCharges={charges} chargeCell={chargeCell} />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    charges: Object.assign({}, state.chargeReducer.charges),
    shipTypes: Object.assign({}, state.layoutReducer.shipTypes),
    layout: Object.assign([], state.layoutReducer.layout),
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    chargeCell: (row: number, column: number, chargeStatus: CellChargeStatus) => dispatch(addChargedCell(row, column, chargeStatus))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
