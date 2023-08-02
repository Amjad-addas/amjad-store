import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'
import cardIelement from '../../data/cardFilter'
const Navbar = () => {
    const productIlement = useSelector(state=>state.product.productInitState)
    const cardCount = useSelector(state=>state.card.count)
    const cardlist = useSelector(state=>state.card.cardInitReducer)
    

  return (
    <div className="navbar" style={{
        position:"sticky" , top:"0"}}>
        <div className="nav-container">
            <ul className="nav-links">
                <li className='nav-li'>
                    <a href="/">Home</a>
                </li>
                <li className='nav-li'> 
                    <a href="#/store">Store</a>
                </li>
                <li className='nav-li'>
                    <a href="#/about">About</a>
                </li>
            </ul>
            <div className="card">
                <button className='nav-btn' onClick={
                    function(){
                        const card = document.getElementById("card-list")
                        if(card.style.display==='block'){
                            card.style.display='none'
                        }
                        else{
                            card.style.display='block'
                        }

                    }

                }>
                    card
                </button>
                <span className='nav-span'>{
                        cardIelement(cardlist,productIlement).len
                
                }</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar