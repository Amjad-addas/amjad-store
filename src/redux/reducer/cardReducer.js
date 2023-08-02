 
const cardInitReducer  = []

const cardReducer=(state ={cardInitReducer , count:0,} , action ,)=>{
    switch(action.type){
        case "PUSH":
            return {...state , count:state.count+1}
        default:
            return state
    }
    
}
export default cardReducer