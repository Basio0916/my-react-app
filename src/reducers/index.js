// アプリケーション内のReducerを結合するモジュール
import {combineReducers} from 'redux'
import events from './events'

export default combineReducers({events}) // storeで利用される
// export default combineReducers({foo, bar, buz}) // 複数状態を管理したい場合はこのように書く