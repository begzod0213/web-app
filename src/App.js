import { useEffect } from 'react';
import './App.css';

import Card from './Components/Card/Card';



const {getData}= require("./db/db.js");
const foods =getData();
const tele = window.Telegram.WebApp
function App() {

useEffect(()=>{
  tele.ready();
})

  return( 
  <>
 <h1 className='heading'>Order food</h1>

  <div className='cards__container'>
{foods.map(food =>{
  return <Card food={food} key={food.id}/>
}) }  
</div>
</>
  );
}

export default App;