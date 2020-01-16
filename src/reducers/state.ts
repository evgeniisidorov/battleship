import { CellChargeStatus } from '../models'

export interface AppState {
  charges: {
    [cellKeys: string]: CellChargeStatus
  }
}