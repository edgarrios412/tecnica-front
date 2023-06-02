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
    bestBooks:[],
    search:"",
    order:false,
  };
  
  const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case GET_BOOKS:{
        const librosPromedio = payload.map(libro => {
          if(libro.reviews.length == 0){
            return {
              ...libro,
              promedio: 0
            };
          }
          const totalReviews = libro.reviews.length;
          const sumRating = libro.reviews.reduce((acumulado, review) => acumulado + review.rating, 0);
          const promedio = sumRating / totalReviews;
          return {
            ...libro,
            promedio: promedio
          };
        });
        return{
          ...state,
          books: librosPromedio,
          allBooks: librosPromedio,
          bestBooks: librosPromedio.sort((libroA, libroB) => libroB.promedio - libroA.promedio)
        }
      }
      case FIND_BOOKS:{
        const arr = [...state.books.filter(book => book.title.toLowerCase().includes(payload.toLowerCase())), ...state.books.filter(book => book.created.toLowerCase().includes(payload.toLowerCase()))]
        const sinrepe = [...new Set(arr)]
        return{
          ...state,
          books: payload.length > 0 ? sinrepe
          : state.allBooks,
          search:payload
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
        switch(payload[0]){
        case "rating":{
        if(payload[1] === "asc"){
        return{
          ...state,
          books: state.allBooks.sort((libroA, libroB) => libroB.promedio - libroA.promedio),
          order:false,
        }
        }
        if(payload[1] === "desc"){
          return{
            ...state,
            books: [],
            books: state.allBooks.sort((libroA, libroB) => libroA.promedio - libroB.promedio).slice(0,state.allBooks.length),
            order:true,
          }
        }
        return{
          ...state,
          books: state.allBooks
        }
        }
        case "date":{
          const registrosOrdenados = state.allBooks.slice().sort((a, b) => {
            if (payload[1] === 'asc') {
              return new Date(b.createdAt) - new Date(a.createdAt);
            } else {
              return new Date(a.createdAt) - new Date(b.createdAt);
            }
          });
          return{
            ...state,
            books: registrosOrdenados
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
  