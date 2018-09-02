import { observer } from 'mobx-react';
import * as React from 'react';
import { ListGroupItem, Panel } from 'react-bootstrap';
import '../css/ItemsList.css';
import { API_URL } from '../Globals';
import Category from './Category';

export interface ItemsListProps {
    itemList: any;
}

const RESTDeleteItem = (index: number, category: string, itemList: any): void => {
    const payload = {'name': itemList[category][index].name, 'value': itemList[category][index].value, 'category': category, 'operation': 'delete' };
    fetch(API_URL, {
     body: JSON.stringify(payload),
     headers: {'Accept': 'application/json','Content-Type':'application/json'},
     method: 'post',
     mode: 'no-cors' // Required to prevent auth error since front and back end on different urls/servers. Also can't delete without cors so using post as a hack
    });
};

const deleteItem = (index: number, category: string, itemList: any): void => {
    RESTDeleteItem(index, category, itemList);
    itemList.delete(index, category);
};

export const ItemsList = ({itemList}: ItemsListProps) => {
    const handleDelete = (index: number, category: string) => deleteItem(index, category, itemList);
    return (
        <Panel className="items-list">
            <ListGroupItem className="categories">
                <Category name={'Electronics'} total={itemList.totalElectronicsValue} items={itemList.electronicsItems} handleDelete={handleDelete}/>
                <Category name={'Clothing'} total={itemList.totalClothingValue} items={itemList.clothingItems} handleDelete={handleDelete}/>
                <Category name={'Kitchen'} total={itemList.totalKitchenValue} items={itemList.kitchenItems} handleDelete={handleDelete}/>
                <Category name={'Misc'} total={itemList.totalMiscValue} items={itemList.miscItems} handleDelete={handleDelete}/>
            </ListGroupItem>
            <ListGroupItem className="total">
                <div>Total</div>
                <div className="total-value">{`$${itemList.totalValue}`}</div>
            </ListGroupItem>
        </Panel>
    )
}

    

export default observer(ItemsList);
