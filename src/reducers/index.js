// アプリケーション内のReducerを結合するモジュール
import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import events from './events'

export default combineReducers({events, form}) // storeで利用される
// export default combineReducers({foo, bar, buz}) // 複数状態を管理したい場合はこのように書く