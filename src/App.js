import './App.css';
import FoodComponent from './component/food_component';
import { useEffect, useState } from 'react';
import MenuData from './data/MenuData';

function App() {
  const [foodData ,setFoodData] = useState(MenuData)
  const [dataInPage ,setDataInPage] = useState([])
  const [page ,setPage] = useState(0)

  const pagination = (allFood) => {
    const foodPerPage = 5
    const pages = Math.ceil(MenuData.length / foodPerPage)
    console.log(`pages : ${pages}`)

    const newfood = Array.from({length:pages},(data,index) => {
      const start = index * foodPerPage
      return MenuData.slice(start,start+foodPerPage)
    })
    return newfood
  }

const handlePage = (index) => {
  setPage(index)
}

useEffect(()=>{
  const paginate = pagination()
  setDataInPage(paginate)
  setFoodData(paginate[page])
},[page])

  return (
    <div>
      <h1>Food Card | Pagination</h1>
      <div className='container'>
        {foodData.map((data,index)=>{
          return<FoodComponent key={index} {...data}/>
        })}
      </div>
      <div className='pagination-container'>
        {dataInPage.map((data,index)=>{
          return(
            <button 
            key={index} 
            onClick={()=>handlePage(index)} 
            className={`page-btn ${index === page? "active-btn" : null}`}>
              {index+1}
            </button>
          )
        })}
      </div>
    </div>
    );
}

export default App;
