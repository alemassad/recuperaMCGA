import { GET_PRODUCTS_FULLFILLED, GET_PRODUCTS_LOADING, DELETE_PRODUCTS_REJECTED,  DELETE_PRODUCTS_FULLFILLED } from './types';

 const INITIAL_STATE = {
   data: [],
   isLoading: false,
   isError: false 
 };

 const productsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case GET_PRODUCTS_FULLFILLED:
       return {
         ...state,
         data: action.payload,
         isError: false,
       };

      case GET_PRODUCTS_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        }

      case DELETE_PRODUCTS_REJECTED: 
        return {
          ...state,
          isError: true,
          isLoading: false
        }

     case DELETE_PRODUCTS_FULLFILLED:
       return {
         ...state,
         data: state.data.filter((item) => item.id !== action.payload),
       };

     default:
       return state;
   }
 };

 export default productsReducer;