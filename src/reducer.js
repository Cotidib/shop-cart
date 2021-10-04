const reducer = (state,action) => {
    if(action.type === 'REMOVE'){
        let newcart = state.cart.filter((item)=> item.id !== action.payload)
        return {...state, cart:newcart}
    }
    else if(action.type === 'INCREASE')
    {
        let newcart = state.cart.map((item)=>{
            if(item.id === action.payload)
            {
                return {...item,amount:item.amount + 1}
            }
            return item;
        });
        return {...state,cart:newcart}
    }
    else if(action.type === 'DECREASE')
    {
        let newcart = state.cart.map((item)=>{
            if(item.id === action.payload)
            {
                return {...item,amount:item.amount - 1}
            }
            return item;
        }).filter((item)=> item.amount > 0);
        return {...state,cart:newcart}
    }
    else 
    {
        return state
    }
    
}

export default reducer;