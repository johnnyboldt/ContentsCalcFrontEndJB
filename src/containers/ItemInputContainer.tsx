import * as React from 'react';
import ItemInput from '../components/ItemInput';
import { Item } from "../models/ItemsStore";

export interface ItemInputContainerProps {
    itemList: any;
}
 const API_URL = 'http://localhost:52395/api/values';

const addItem = (name: string, value: number, category: string, itemList: any): void => {
  // todo: move this into method and add error checking. Add similiar call for delete
  const payload = { 'name': name, 'value': value, 'category': category };
  fetch('http://localhost:52395/api/values', {
   body: JSON.stringify(payload),
   headers: {'Accept': 'application/json','Content-Type':'application/json'},
   method: 'post',
   mode: 'no-cors' // Required to prevent some weird error
  });

    itemList.add(
        Item.create({
            name,
            value,
        }),
        category,
    );
};

export const ItemInputContainer = ({itemList}: ItemInputContainerProps) => {
    const handleAdd = (name: string, value: number, category: string) => addItem(name, value, category, itemList);
    return (
        <ItemInput handleAdd={handleAdd} />
    );
}

export default ItemInputContainer;
