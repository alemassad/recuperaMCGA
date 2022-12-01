import { SAVE_PRODUCTS_FULLFILLED, 
        SAVE_PRODUCTS_LOADING, 
        SAVE_PRODUCTS_REJECTED,

        DELETE_PRODUCTS_FULLFILLED,
        DELETE_PRODUCTS_LOADING,
        DELETE_PRODUCTS_REJECTED,

        GET_PRODUCTS_FULLFILLED,
        GET_PRODUCTS_LOADING,
        GET_PRODUCTS_REJECTED,

        EDIT_PRODUCTS_LOADING,
        EDIT_PRODUCTS_FULLFILLED,
        EDIT_PRODUCTS_REJECTED      
      } from './types';

//Agregar data
export const saveProductsFullfilled = (data) => {
  return {
    type: SAVE_PRODUCTS_FULLFILLED,
    payload: data,
  };
};
export const saveProductsLoading  = (isLoading) => {
  return {
    type: SAVE_PRODUCTS_LOADING,
    payload: isLoading,
  };
};
export const saveProductsRejected = (error) => {
  return {
    type: SAVE_PRODUCTS_REJECTED,
    payload: error
  };
};

//Borrar data
export const deleteProductsFullfilled = (id) => {
    return {
        type: DELETE_PRODUCTS_FULLFILLED,
        payload: id
    };
  }
export const deleteProductsLoading = (isLoading) => {
  return {
    type: DELETE_PRODUCTS_LOADING,
    payload: isLoading,
  };
}; 
export const deleteProductsRejected = (error) => {
  return {
    type: DELETE_PRODUCTS_REJECTED,
    payload: error
  };
};

//Obtener data
export const getProductsLoading = (isLoading) => {
  return {
    type: GET_PRODUCTS_LOADING,
    payload: isLoading,
  };
};
export const getProductsFullfilled = (data) => {
  return {
    type: GET_PRODUCTS_FULLFILLED,
    payload: data
  };
};
export const getProductsRejected = (error) => {
  return {
    type: GET_PRODUCTS_REJECTED,
    payload: error
  };
};

//Editar data
export const editProductsLoading = (isLoading) => {
  return {
    type: EDIT_PRODUCTS_LOADING,
    payload: isLoading
  };
};
export const editProductsFullfilled = (data) => {
  return {
    type: EDIT_PRODUCTS_FULLFILLED,
    payload: data
  };
};
export const editProductsRejected = () => {
  return {
    type: EDIT_PRODUCTS_REJECTED    
  };
};