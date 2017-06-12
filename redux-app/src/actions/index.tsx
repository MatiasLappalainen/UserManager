import axios from 'axios';

export const onIncrement = () =>{
    return {
        type: 'INCREMENT'
    }
}

export const onDecrement = () => {
    return {
        type: 'DECREMENT'
        
    }
}

export const getData = (json: any) => {
    return {
    type: 'FETCH_FULLFILLED',
    data: json
}
}

export const deletedData = (json: any) => {
    return {
        type: 'DATA_DELETED',
        data: json,
    }
}

export const postData = (json: any) => {
    return {
        type: 'POST_DATA',
        data: json
    }
}

export const postUser = (name: String, id: any, country: string, state: string) => {
    var idM = id;
    return (dispatch: any) => {
        dispatch({type: 'POSTING_DATA'})
        axios.post('http://localhost:3004/users/', {
            name: name,
            id: idM++,
            country,
            state

        })
        .then((response) => {
            dispatch(postData(response))
        })
        .catch((error) => {
            dispatch({type: 'ERROR', payload: error});
        })
    }
}

export const fetchDelete = (id: any) => {
    console.log(id);
    return (dispatch: any) => {
        dispatch({type: 'DELETING_DATA'})
        return axios({
            url: 'http://localhost:3004/users/' + id,
            timeout: 20000,
            method: 'delete',
            responseType: 'json'
        })
            .then((response) => {
                dispatch(deletedData(response.data))
        })
        .catch((error) => {
            dispatch({type: 'ERROR', payload: error})
        })
    }
}

export const fetchUser = () => {
    return (dispatch: any) => {
        dispatch({type: 'FETCH_USERS'})
        return axios({
            url: 'http://localhost:3004/users/',
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then((response) =>{
            dispatch(getData(response.data))
            
    })
    .catch((error) => {
        dispatch({type: 'ERROR', payload: error})
    })
    }
}