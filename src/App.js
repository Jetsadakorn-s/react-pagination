import logo from './logo.svg';
import './App.css';
import FoodComponent from './component/food_component';
import { useState } from 'react';
import MenuData from './data/MenuData';

function App() {
  const [foodData ,setFoodData] = useState(MenuData)
  return (
    <div>
      <h1>Food Card | Pagination</h1>
      <FoodComponent/>
    </div>
    );
}

export default App;
