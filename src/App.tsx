import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ItemsList from './components/ItemsList';
import ItemInputContainer from './containers/ItemInputContainer';
import './css/App.css';
import { API_URL } from './Globals';
import { Item } from "./models/ItemsStore";
import { ItemList } from "./models/ItemsStore";

const itemList = ItemList.create()

const GetItems = (): void => {
  fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    data.map((item:any) => 
     itemList.add(
       Item.create({
           name: item.name,
           value: parseFloat(item.value),
       }),
       item.category,
     )
   )})
};

class App extends React.PureComponent {
  public render() {
    return (
      <Jumbotron className="App">
        <ItemsList itemList={itemList} />
        <ItemInputContainer itemList={itemList} />
      </Jumbotron>
    );
  }
  
  public componentDidMount() {
    GetItems();
    }
}

export default App;
