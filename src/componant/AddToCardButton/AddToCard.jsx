
import './AddToCard.css'
import { useDispatch, useSelector } from 'react-redux'


let itemlist=[]

const AddToCard = (props) => {
  itemlist.push(props.item)
 
  const cardList = useSelector(state=>state.card.cardInitReducer)
  const dispatch = useDispatch()
  return (
     
    <button className="store-button" onClick={()=>{
            for(let i=0; i<itemlist.length;i++){
              
              if(itemlist[i].id===props.id){               
                  cardList.push(itemlist[i])
                  dispatch(
                    {type:"PUSH"}
                  )
                  break
              }
            }

            
            
    }}>
      
    Add To Card
    </button>
  )
}

export default AddToCard