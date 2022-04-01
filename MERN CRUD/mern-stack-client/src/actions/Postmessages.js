// Action for retrieving all records. [4]

import api from "./api.js";

export const ACTION_TYPES ={
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchall = () => dispatch => { // exports fetchall command towards all modules.
    api.Postmessage().fetchAll()
    .then(res => {
        dispatch({
            type:ACTION_TYPES.FETCH_ALL,
            payload: res.data
    }) 
    })
    .catch(err => console.log())
    
}