import { SAVE_PRODUCTS_FULLFILLED, 
        SAVE_PRODUCTS_LOADING, 
        SAVE_PRODUCTS_REJECTED,

        DELETE_PRODUCTS_FULLFILLED,
        DELETE_PRODUCTS_LOADING,
        DELETE_PRODUCTS_REJECTED,

        GET_PRODUCTS_FULLFILLED,
        GET_PRODUCTS_LOADING,
        GET_PRODUCTS_REJECTED,

        POST_PRODUCTS_LOADING,
        POST_PRODUCTS_FULLFILLED,
        POST_PRODUCTS_REJECTED,

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
export const saveProductsRejected = () => {
  return {
    type: SAVE_PRODUCTS_REJECTED,
  };
};

//Borrar data
export const deleteProductsFullfilled = (id) => {
    return {
        type: DELETE_PRODUCTS_FULLFILLED,
        payload: id
    };
  }
export const deleteProductsLoading = () => {
  return {
    type: DELETE_PRODUCTS_LOADING
  };
}; 
export const deleteProductsRejected = (error) => {
  return {
    type: DELETE_PRODUCTS_REJECTED,
    payload: error
  };
};

//Obtener data
export const getProductsLoading = () => {
  return {
    type: GET_PRODUCTS_LOADING
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

// Post data
export const postProductsLoading = () => {
  return {
    type: POST_PRODUCTS_LOADING
  };
};
export const postProductsFullfilled = (data) => {
  return {
    type: POST_PRODUCTS_FULLFILLED,
    payload: data
  };
};
export const postProductsRejected = (error) => {
  return {
    type: POST_PRODUCTS_REJECTED,
    payload: error
  };
};
//Editar data
export const editProductsLoading = () => {
  return {
    type: EDIT_PRODUCTS_LOADING
  };
};
export const editProductsFullfilled = (data) => {
  return {
    type: EDIT_PRODUCTS_FULLFILLED,
    payload: data
  };
};
export const editProductsRejected = (error) => {
  return {
    type: EDIT_PRODUCTS_REJECTED,
    payload: error
  };
};