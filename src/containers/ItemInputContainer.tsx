import * as React from 'react';
import ItemInput from '../components/ItemInput';
import { Item } from "../models/ItemsStore";

export interface ItemInputContainerProps {
    itemList: any;
}
// const API = 'https://hn.algolia.com/api/v1/search?query=';

const addItem = (name: string, value: number, category: string, itemList: any): void => {
  // todo: move this into method and add error checking. Add similiar call for delete
  const formData = new FormData();
  formData.append('name', '123');
  formData.append('value', value.toString());
  formData.append('category', category);
  fetch('http://localhost:51840/api/values', {
    body: JSON.stringify({ name: 'test@test.com', value: 'Test123!', category: 'password' }),
   // headers: {'Content-Type':'application/json'},
   headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
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
