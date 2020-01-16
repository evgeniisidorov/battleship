import React from 'react';
import { ShipTypes } from '../models';

export interface IShipListItem {
  shipType: string;
  size: number
}

export const ShipListItem: React.FC<IShipListItem> = props => {
  const { shipType, size } = props;
  return <li className="shiplist-item">
    <div className={`shiplist-item__image ${shipType}`} />
    {Array.from(Array(size).keys()).map(x => <span className="shiplist-item__counter" />)}
  </li>
}

export interface IShipListProps {
  shipTypes: ShipTypes
}

export const ShipList: React.FC<IShipListProps> = props => {
  const { shipTypes } = props;
  return <ul className="shiplist">
    {Object.entries(shipTypes).map(x => <ShipListItem key={x[0]} shipType={x[0]} size={x[1].size} />)}
  </ul>;
}