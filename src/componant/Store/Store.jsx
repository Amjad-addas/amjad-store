import React from 'react'
import items from '../../data/items.json'
import ItemStore from '../ItemStore/ItemStore'
import './Store.css'
const Store = () => {
  return (
    <div className="store-container">
      <h1> Store </h1>
      <div className="store-row">
          {
           items.map((item)=>(
            <div key={item.id} className='items-container'> 
                <ItemStore id={item.id}  {...item}/>
            </div>
           ))  
          }
      </div>
    </div>
  )
}

export default Store