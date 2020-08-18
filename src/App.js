import React from 'react';
import './App.css';
import {ProductTable} from './ProductTable.js';
let products=[
  {price :250,name:'nikeAir',category:'clothes'},
  {price :550,name:'four',category:'electronics'},
  {price :300,name:'smartwatch',category:'electronics'}
];
function App() {
  return (
    <div className="App">
      <center>
     <ProductTable products={products}/>
     </center>
    </div>
  );
}

export default App;
