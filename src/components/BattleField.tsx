import React from 'react';
import { CellCharges, CellChargeStatus, ShipPositionInStrings } from '../models';

export interface IBattleFieldCell {
  status: CellChargeStatus;
  onClick: any;
}

export const BattleFieldCell: React.FC<IBattleFieldCell> = props => {
  const { onClick, status } = props;
  const chargeStatusClassName = status ? status === CellChargeStatus.Missed ? 'battlefield-cell--miss' : 'battlefield-cell--hit' : '';
  return <div
    className={`battlefield-cell ${chargeStatusClassName}`}
    onClick={onClick}
  />;
}

export interface IBattleFieldProps {
  layout: ShipPositionInStrings[],
  cellCharges: CellCharges,
  chargeCell: any
}

export const BattleField: React.FC<IBattleFieldProps> = props => {
  const { cellCharges, chargeCell, layout } = props;

  return <div className="battlefield">
    <div className="battlefield-container">
      {
        Array.from(Array(10).keys()).map(
          (x, row) => {
            return Array.from(Array(10).keys()).map((x, column) => {

              const status = cellCharges[`${row}.${column}`];
              const doesCellHaveShip = layout && layout.map(x => x.positions.includes(`${row}.${column}`)).includes(true);

              const message = status ? status === CellChargeStatus.Missed ? 'm' : 'B' : '.';

              return <BattleFieldCell key={`${row}.${column}`}
                status={status}
                onClick={() => !status && chargeCell(row, column, doesCellHaveShip ? 2 : 1)}
              />;
            })
          })
      }
    </div>
  </div>;
}