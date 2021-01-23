import {INCREMENT, DECREMENT} from '../actions' // index.jsならばフォルダの指定だけでOK

const initialState = {value: 0}

export default (state=initialState, action)=>{
    switch(action.type){
        case INCREMENT:
            return {value : state.value + 1};
        case DECREMENT:
            return {value : state.value - 1}
        default:    // 初期時に呼ばれるので、stateをそのままreturn
            return state;
    }
}