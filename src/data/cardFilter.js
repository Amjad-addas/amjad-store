function cardIelement(card=[],product=[]){
    let cardContent=[]
    for(let i=0;i<product.length;i++){
        if(card.find((il)=>il.id===product[i].id))
        cardContent.push(product[i]) 
    }
    return {len:cardContent.length,card:cardContent}

}

export default cardIelement