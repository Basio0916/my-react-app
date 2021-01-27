import _ from 'lodash'
import {READ_EVENTS, CREATE_EVENT, DELETE_EVENT, READ_EVENT} from '../actions' // index.jsならばフォルダの指定だけでOK

export default (events={}, action)=>{
    switch(action.type){
        case READ_EVENTS:
            console.log(action.response.data);
            // そのままのデータでは扱いにくいため変換して返す
            return _.mapKeys(action.response.data, 'id');
        case CREATE_EVENT:
            return events;
        case DELETE_EVENT:
            delete events[action.id];
            return {...events};
        case READ_EVENT:
            console.log(action.response.data);
            const data = action.response.data;
            return {...events, [data.id]: data};
        default:    // 初期時に呼ばれるので、stateをそのままreturn
            return events;
    }
}