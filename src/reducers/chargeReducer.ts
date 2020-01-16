import { actionTypes } from '../actions';
import { CellCharges } from '../models';

export type ChargeState = { charges:  CellCharges }

export const chargeReducer = (state: ChargeState = { charges: {} }, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_CHARGE_CELL: {
            const newState = Object.assign({}, state);
            newState.charges[`${action.key}`] = action.chargeStatus;
            return newState;
        }
        default:
            return state;
    }
}