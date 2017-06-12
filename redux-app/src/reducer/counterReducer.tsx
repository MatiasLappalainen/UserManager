import * as _ from "lodash"

interface defaultType {
    count: number;   
}


const defaultState: defaultType = {count: 0};
const counterReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return _.assignIn({}, state, { count: state.count+ 1 });
        case 'DECREMENT':
            return _.assignIn({}, state, { count: state.count- 1 });
        default:
            return state
    }
}

export default counterReducer;