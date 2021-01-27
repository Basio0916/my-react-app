import _ from 'lodash'
import {READ_EVENTS, CREATE_EVENT, DELETE_EVENT, READ_EVENT, UPDATE_EVENT} from '../actions' // index.jsならばフォルダの指定だけでOK

export default (events={}, action)=>{
    switch(action.type){
        case READ_EVENTS:
            // そのままのデータでは扱いにくいため変換して返す
            return _.mapKeys(action.response.data, 'id');
        case DELETE_EVENT:
            delete events[action.id];
            return {...events};
        case READ_EVENT:
        case CREATE_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data;
            return {...events, [data.id]: data};
        default:    // 初期時に呼ばれるので、stateをそのままreturn
            return events;
    }
}