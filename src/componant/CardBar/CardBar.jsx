import { useSelector } from 'react-redux'
import cardIelement from '../../data/cardFilter'
import './cardbar.css'

const CardBar = () => {
  const count = useSelector(state=>state.card.count)
  const productIlement = useSelector(state=>state.product.productInitState)
  const cardlist = useSelector(state=>state.card.cardInitReducer)
  return (
    <div className="card-list" id='card-list'>
      { cardlist.length===0?<h2 className='empty'>Card Is Empty</h2>:
        cardIelement(cardlist,productIlement).card.map((item)=>(
          <div className="item-card-list">
          <div className="image-card-list">
            <img src={item.imgUrl} alt="" />
          </div>
          <div className="content-card-list">
            <div className="name-item">
              <h3>{item.name}</h3>
            </div>
            <div className="price-item">
              {item.price}
            </div>
          </div>
                    <div className="count-item-list">
            <div className="total-price-item">
              total price  {(cardlist.filter((fi)=>fi.id===item.id).length)*item.price}
            </div>
            <div className="count-item ">
              
                <span>{cardlist.filter((fi)=>fi.id===item.id).length}</span> items
            </div>
          </div>
        </div>
        ))
      }

    </div>
    )
}

export default CardBar