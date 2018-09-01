import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ItemsList from './components/ItemsList';
import ItemInputContainer from './containers/ItemInputContainer';
import './css/App.css';
 import { Item } from "./models/ItemsStore";
import { ItemList } from "./models/ItemsStore";

const itemList = ItemList.create()
const API_URL = 'http://localhost:52395/api/values';

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
     fetch(API_URL)
     .then(response => response.json())
     .then(data => {
       data.map((item:any) => 
        itemList.add(
          Item.create({
              name: item.name,
              value: item.value === "0" ? 0 : parseFloat(item.value), // todo fix 0 error
          }),
          item.category,
        )
  )})
    }
}

export default App;
