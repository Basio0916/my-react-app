import _ from 'lodash'
import {READ_EVENTS} from '../actions' // index.jsならばフォルダの指定だけでOK

export default (events={}, action)=>{
    switch(action.type){
        case READ_EVENTS:
            // そのままのデータでは扱いにくいため変換して返す
            return _.mapKeys(action.response.data, 'id');
        default:    // 初期時に呼ばれるので、stateをそのままreturn
            return events;
    }
}