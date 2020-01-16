
export enum CellChargeStatus {
  Untouched,
  Missed,
  Beaten
}

export interface ShipType {
  size: number;
  count: number;
}

export interface ShipPosition {
  ship: string;
  positions: [number, number][]
}

export interface ShipPositionInStrings {
  ship: string, positions: string[]
}

export type ShipTypes = {
  [shipKey: string]: ShipType
}

export type ShipLayout = ShipPosition[];

export type CellCharges = { [key: string]: CellChargeStatus };