import React, { useEffect, useState } from 'react'
import './ItemStore.css'
import AddToCard from '../AddToCardButton/AddToCard'
import CardQuantity from '../CardQuantityButton/CardQuantity'
import { useSelector } from 'react-redux'



const ItemStore = (props) => {

  const count = useSelector(state=>state.card.count)
  const cardInitReducer = useSelector(state=>state.card.cardInitReducer)



  return (
    <div className="item">
      <div className="image">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="content">
        <div className="name">
          <h3>{props.name}</h3>
        </div>
        <div className="price">
          {props.price}
        </div>
      </div>
      <div className="store-btn" >
        {       
          cardInitReducer.find((it)=>it.id===props.id)?<CardQuantity id={props.id} item={props} />:
          <AddToCard item={props} id={props.id} />
         }

      </div>
    </div>
  )
}

export default ItemStore