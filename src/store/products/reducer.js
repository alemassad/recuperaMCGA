import {GET_PRODUCTS_FULLFILLED,
        GET_PRODUCTS_LOADING,
        GET_PRODUCTS_REJECTED, 

        SAVE_PRODUCTS_FULLFILLED,
        SAVE_PRODUCTS_LOADING,
        SAVE_PRODUCTS_REJECTED,

        EDIT_PRODUCTS_REJECTED,
        EDIT_PRODUCTS_LOADING,
        EDIT_PRODUCTS_FULLFILLED,

        DELETE_PRODUCTS_FULLFILLED,
        DELETE_PRODUCTS_LOADING,
        DELETE_PRODUCTS_REJECTED
       } from './types';

 const INITIAL_STATE = {
   data: [],
   isLoading: false,
   isError: false 
 };

 const productsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
    
      //obtener Productos
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
      case GET_PRODUCTS_REJECTED: 
        return {
          ...state,
          isError: true,
          isLoading: false
        }
     
       //agregar products
      case SAVE_PRODUCTS_FULLFILLED:
        return{
            ...state,
            data: action.payload,
            isError: false,
        };
      case SAVE_PRODUCTS_LOADING:
        return{
            ...state,
            isLoading: action.payload,
        };
      case SAVE_PRODUCTS_REJECTED:
        return{
            ...state,
            isError: true,
            isLoading: false,
        };
        //Borrar product
      case DELETE_PRODUCTS_FULLFILLED:
          return{
              ...state,
              data: state.data.filter(x => x.id !== action.payload),
              isError: false,
          };

      case DELETE_PRODUCTS_LOADING:
          return{
              ...state,
              isLoading: action.payload,
          };

      case DELETE_PRODUCTS_REJECTED:
          return{
              ...state,
              isError: true,
              isLoading: false,
          };

       //Editar products 
      case EDIT_PRODUCTS_FULLFILLED:
        return{
            ...state,
            data: state.data.map((product)=>{
                if(product._id === action.payload._id){
                    return action.payload;
                }
                return product;
            }),
            isError: false,
        };
      case EDIT_PRODUCTS_LOADING:
        return{
            ...state,
            isLoading: action.payload,
        };
      case EDIT_PRODUCTS_REJECTED:
        return{
            ...state,
            isError: true,
            isLoading: false,
        };

      default:
        return state;
   }
 };

 export default productsReducer;