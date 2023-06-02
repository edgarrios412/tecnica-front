import axios from "axios"
export const GET_BOOKS = "GET_BOOKS";
export const GET_GENRES = "GET_GENRES";
export const FIND_BOOKS = "FIND_BOOKS";
export const FILTER_BOOKS = "FILTER_BOOKS";
export const ORDER_BY = "ORDER_BY";

export const getBooks = () => {
    return (dispatch) => {
        axios.get(`/book/all`)
        .then(data => dispatch({ type: GET_BOOKS, payload: data.data}))
    }
}

export const getGenres = () => {
    return (dispatch) => {
        dispatch({ type: GET_GENRES})
    }
}


export const filterBooks = (name, filter) => {
    return (dispatch) => {
       dispatch({type: FILTER_BOOKS, payload: [name, filter]})
    }
}

export const findBooks = (key) => {
    return (dispatch) => {
       dispatch({type: FIND_BOOKS, payload: key})
    }
}

export const orderBy = (by) => {
    return (dispatch) => {
       dispatch({type: ORDER_BY, payload: by})
    }
}
