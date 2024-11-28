import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExloreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">Chose from a diverse menu feating a delectable array of dishes. Our mission is to satify your cravings and elevate your dining experience, one delicious meal at a time. </p>
      <div className="explore-meu-list">
         {menu_list.map(()=>{
            return (
              <div bnCLick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                <p>{item.menu_name}</p>
              </div>

            )
         })}
      </div>
      <hr />
    </div>
  );
};

export default ExloreMenu;
