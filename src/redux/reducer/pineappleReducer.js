const INIT_STATE={
    numOfItem:10,
    buyitem:0
}

const PineappleReducer=(state=INIT_STATE,action)=>{
        switch(action.type){
            case "BUY_PINEAPPLE":
                return{
                    ...state,
                    numOfItem:state.numOfItem-1,
                    buyitem:state.buyitem+1
                }
            default :
                return state
        }
}

export default PineappleReducer