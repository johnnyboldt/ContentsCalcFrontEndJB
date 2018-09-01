import * as React from 'react';
import ItemInput from '../components/ItemInput';
import { Item } from "../models/ItemsStore";

export interface ItemInputContainerProps {
    itemList: any;
}
 const API_URL = 'http://localhost:52395/api/values';

const addItem = (name: string, value: number, category: string, itemList: any): void => {
    itemList.add(
        Item.create({
            name,
            value,
        }),
        category,
    );
    
      const payload = { 'name': name, 'value': value, 'category': category, 'operation': 'add'};
      fetch(API_URL, {
      body: JSON.stringify(payload),
      headers: {'Accept': 'application/json','Content-Type':'application/json'},
      method: 'post',
      mode: 'no-cors' // Required to prevent auth error since front and back end on different urls/servers
  });
};

export const ItemInputContainer = ({itemList}: ItemInputContainerProps) => {
    const handleAdd = (name: string, value: number, category: string) => addItem(name, value, category, itemList);
    return (
        <ItemInput handleAdd={handleAdd} />
    );
}

export default ItemInputContainer;
