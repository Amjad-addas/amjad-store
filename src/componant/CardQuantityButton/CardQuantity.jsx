import React from 'react'
import './CardQuntity.css'
import { useDispatch, useSelector } from 'react-redux'

const CardQuantity = (props) => {
  let itemlist=[]
  const cardlist = useSelector(state=>state.card.cardInitReducer)
  itemlist.push(props.item)
  const dispatch = useDispatch()
  return (
    <div className="quantity-btn">
        <div className="card-content">
            <button className="minus" onClick={
                              ()=>{
                                for(let i=0; i<itemlist.length;i++){
                            
                                  if(itemlist[i].id===props.id){               
                                      cardlist.pop(itemlist[i])
                                      dispatch(
                                        {type:"PUSH"}
                                      )
                                      break
                                  }
                                }
                              }
            }>-</button> 
            <h4> {cardlist.filter((fi)=>fi.id===props.id).length} </h4>   
            <button className="plus" onClick={
                ()=>{
                  for(let i=0; i<itemlist.length;i++){
              
                    if(itemlist[i].id===props.id){               
                        cardlist.push(itemlist[i])
                        dispatch(
                          {type:"PUSH"}
                        )
                        break
                    }
                  }
                }
              
            }>+</button>
        </div>
        <div className="remove">
            <button className="remove-button" onClick={
              ()=>{
                const len=cardlist.filter((fi)=>fi.id===props.id).length
                for(let i=0;i<len;i++){
                  for(let i=0; i<itemlist.length;i++){
                            
                    if(itemlist[i].id===props.id){               
                        cardlist.pop(itemlist[i])
                        dispatch(
                          {type:"PUSH"}
                        )
                        break
                    }
                  }
                    
                    
                }
                }
              }
            >
                Remove
            </button>
        </div>
    </div>
  )
}

export default CardQuantity