import { CellChargeStatus } from "../models";

export const actionTypes = {
  ADD_CHARGE_CELL: 'ADD_CHARGE_CELL'
}

export const addChargedCell = (row: number, column: number, chargeStatus: CellChargeStatus) => ({
  type: actionTypes.ADD_CHARGE_CELL,
  key: `${row}.${column}`,
  chargeStatus: chargeStatus
});