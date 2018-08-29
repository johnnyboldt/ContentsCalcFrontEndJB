import * as React from 'react';
import ItemInput from '../components/ItemInput';
import { Item } from "../models/ItemsStore";

export interface ItemInputContainerProps {
    itemList: any;
}

const addItem = (name: string, value: number, category: string, itemList: any): void => {
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
