const INIT_STATE={
    numOfItem:10,
    buyitem:0
}

const BrownieReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case "BUY_BROWNIE":
            return{
                ...state,
                numOfItem:state.numOfItem-1,
                buyitem:state.buyitem+1
            }
        default:
           return state

    }
}
export default BrownieReducer;