import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ItemsList from './components/ItemsList';
import ItemInputContainer from './containers/ItemInputContainer';
import './css/App.css';
import { ItemList } from "./models/ItemsStore";


const itemList = ItemList.create()

class App extends React.PureComponent {
  public render() {
    return (
      <Jumbotron className="App">
        <ItemsList itemList={itemList} />
        <ItemInputContainer itemList={itemList} />
      </Jumbotron>
    );
  }
}

export default App;
