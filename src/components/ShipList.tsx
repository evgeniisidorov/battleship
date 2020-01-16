import React from 'react';
import { ShipTypes } from '../models';

export interface IShipListProps {
  shipTypes: ShipTypes
}

export const ShipList: React.FC<IShipListProps> = (props) => {
  const { shipTypes } = props;
  return <ul className="shiplist">{Object.entries(shipTypes).map(x => <li key={x[0]}>{`${x[0]} -- ${x[1].count}`}</li>)}</ul>;
}