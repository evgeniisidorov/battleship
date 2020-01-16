import React from 'react';
import { ShipLayout, CellCharges, CellChargeStatus, ShipPositionInStrings } from '../models';

export interface IBattleFieldProps {
  layout: ShipPositionInStrings[],
  cellCharges: CellCharges,
  chargeCell: any
}

export const BattleField: React.FC<IBattleFieldProps> = (props) => {
  const { cellCharges, chargeCell, layout } = props;

  return <div>
    <h2>BattleField</h2>
    <div>
      {
        Array.from(Array(10).keys()).map(
          (x, row) => {
            return <div key={row} style={{ display: 'flex', flexDirection: 'row' }}>{Array.from(Array(10).keys()).map((x, column) => {
              
              const status = cellCharges[`${row}.${column}`];
              console.log(layout);
              const doesCellHaveShip = layout && layout.map(x => x.positions.includes(`${row}.${column}`)).includes(true);


              const message = status ? status === CellChargeStatus.Missed ? 'm' : 'B' : '.';

              return <div
                key={column}
                style={{ width: 15, height: 15 }}
                onClick={() => !status && chargeCell(row, column, doesCellHaveShip ? 2 : 1)}
              >{message}</div>
            })}</div>
          })
      }
    </div>
  </div>;
}