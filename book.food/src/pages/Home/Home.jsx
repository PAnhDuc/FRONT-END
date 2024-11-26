import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExloreMenu from '../../components/exploreMenu/ExploreMenu'
import FoodDisplay from '../../components/fooddisplay/FoodDisplay'



export const Home = () => {

const [category,setCategogy] = useState("All");


  return (
    <div>
      <Header/>
      <ExloreMenu category={category} setCategogy={setCategogy}/>
    <FoodDisplay category={category}/>
    </div>
  )
}
