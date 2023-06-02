import {
    GET_BOOKS,
    FILTER_BOOKS,
    ORDER_BY,
    FIND_BOOKS
  } from "./actions";
  
  const initialState = {
    books: [],
    page: 1,
    allBooks:[],
  };
  
  const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case GET_BOOKS:{
        return{
          ...state,
          books: payload,
          allBooks: payload
        }
      }
      case FIND_BOOKS:{
        const arr = [...state.books.filter(book => book.title.toLowerCase().includes(payload.toLowerCase())), ...state.books.filter(book => book.created.toLowerCase().includes(payload.toLowerCase()))]
        const sinrepe = [...new Set(arr)]
        return{
          ...state,
          books: payload.length > 0 ? sinrepe
          : state.allBooks
        }
      }
      case FILTER_BOOKS: {
        if(payload[1] === "all"){
          return {
            ...state,
            books: [...state.allBooks],
          };
        }
        if(payload[0] == "lang"){
          return{
            ...state,
            books: state.allBooks.filter(b => b.lang.toLowerCase() == payload[1].toLowerCase()),
          }
        }
        if(payload[0] == "genre"){
        return {
          ...state,
          books: state.allBooks.filter(book => book.genres.filter(b => b.name.toLowerCase() == payload[1].toLowerCase()).length),
        };
        }
        return {
          ...state,
          books: [...state.allBooks],
        };
      }
      case ORDER_BY:{
        switch(payload){
        case "rating":{
        if(state.order === "asc"){
        return{
          ...state,
          filterRecipes: state.filterRecipes.sort((x, y) => x.title.localeCompare(y.title)),
          order: "desc"
        }
        }else{
          return{
            ...state,
            filterRecipes: state.filterRecipes.sort((x, y) => y.title.localeCompare(x.title)),
            order: "asc"
          }
        }
        }
        case "date":{
          console.log(state.filterRecipes)
          if(state.health === "mayor"){
            return{
              ...state,
              filterRecipes: state.filterRecipes.sort((x, y) => x.healthScore - y.healthScore),
              health: "menor"
            }
            }else{
              return{
                ...state,
                filterRecipes: state.filterRecipes.sort((x, y) => y.healthScore - x.healthScore),
                health: "mayor"
              }
            }
          }
        case "created":{
          if(state.created === "user"){
            return{
              ...state,
              filterRecipes: state.filterRecipes.sort((x, y) => x.created.localeCompare(y.created)),
              created: "api"
            }
            }else{
              return{
                ...state,
                filterRecipes: state.filterRecipes.sort((x, y) => y.created.localeCompare(x.created)),
                created: "user"
              }
            }
        }
        default:{break;}
      }break;
    }
      default:{
        return {
          ...state,
        };
      }
    }
  };
  
  export default reducer;
  