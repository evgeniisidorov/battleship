import React from 'react';
import { ShipLayout, CellCharges, CellChargeStatus } from '../models';

export interface IBattleFieldProps {
  layout: ShipLayout,
  cellCharges: CellCharges
}

export const BattleField: React.FC<IBattleFieldProps> = (props) => {
  const { cellCharges } = props;

  return <div>
    <h2>BattleField</h2>
    <div>
      {
        Array.from(Array(10).keys()).map(
          (x, row) => {
            return <div key={row} style={{ display: 'flex', flexDirection: 'row' }}>{Array.from(Array(10).keys()).map((x, column) => {
              const status = cellCharges.get(`${row}.${column}`);
              const message = status ? status === CellChargeStatus.Missed ? 'm' : 'B' : '.';

              return <div
                key={column}
                style={{ width: 15, height: 15 }}
                onClick={() => alert(`${row}.${column}`)}
              >{message}</div>
            })}</div>
          })
      }
    </div>
  </div>;
}