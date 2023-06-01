import axios from "axios"
export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const FIND_RECIPES = "FIND_RECIPES";
export const FILTER_RECIPES = "FILTER_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const PAGINATION = "PAGINATION";
export const ORDER_BY = "ORDER_BY";
export const SET_PAGE = "SET_PAGE";
export const SET_LOGGED = "SET_LOGGED";
export const USER_LOGGED = "USER_LOGGED";
export const FILTER_RECIPES_ING = "FILTER_RECIPES_ING";


export const userLogged = ({id, name, username}) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGGED, payload: {id, name, username}})
    }
}

export const setPage = (page) => {
    return (dispatch) => {
        dispatch({ type: SET_PAGE, payload: page})
    }
}

export const setLogged = (bool) => {
    return (dispatch) => {
        dispatch({ type: SET_LOGGED, payload: bool})
    }
}

export const getRecipes = (n) => {
    return (dispatch) => {
        axios.get(`/recipes/all`)
        .then(data => dispatch({ type: GET_RECIPES, payload: [data.data[0], data.data[1]]}))
    }
}

export const getDiets = () => {
    return (dispatch) => {
        dispatch({ type: GET_DIETS})
    }
}


export const filterRecipes = (filter) => {
    return (dispatch) => {
       dispatch({type: FILTER_RECIPES, payload: filter})
    }
}

export const filterRecipesByIng = (filter) => {
    return (dispatch) => {
       dispatch({type: FILTER_RECIPES_ING, payload: filter})
    }
}

export const paginationRecipes = (page) => {
    return (dispatch) => {
       dispatch({type: PAGINATION, payload: page})
    }
}

export const orderBy = (by) => {
    return (dispatch) => {
       dispatch({type: ORDER_BY, payload: by})
    }
}

export const findRecipe = (title) => {
    return (dispatch) => {
        axios.get(`/recipes?name=${title}`)
        .then(data => dispatch({type: FIND_RECIPES, payload: data.data}))
     }
}