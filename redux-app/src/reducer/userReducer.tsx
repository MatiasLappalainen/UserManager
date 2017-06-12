import * as _ from "lodash"

export default function userReducer(state={
    data: {
        users: {
          id: null,
          name: null  
        }
    },
    fetching: false,
    fetched: false,
    posting: false,
    posted: false,
    deleting: false,
    deleted: false,
    error: null
}, action: any) {
    switch(action.type){
        case 'FETCH_USERS':
        return _.assignIn({}, state, {fetching: true});
        case 'FETCH_ERROR':
        return  _.assignIn({} ,state, {fetching:false, error: action.payload});
        case 'FETCH_FULLFILLED':
        return _.assignIn({}, state, {fetching: false, fetched: true, data: action.data}); 
        case 'POST_DATA': 
        return _.assignIn({}, state, {posting: true})
        case '':
        return _.assignIn({}, state, {posting: false ,posted: true, data: action.data})
        case 'DELETING_DATA':
        return _.assignIn({}, state, {deleting: true,delete: action.item})
        case 'DATA_DELETED': 
        return _.assignIn({}, state, {deleted: true, deleting: false, data: action.data});
        default:
        return state;
    }
}