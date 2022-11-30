import {
    deleteProductsRejected,
    getProductsLoading,
    getProductsFullfilled
} from './actions'

//Listar products
export const getProducts = () => async (dispatch) => {
    try {
        dispatch(getProductsLoading(true));
        const response = await fetch('https://mcga-2022-backend-tau.vercel.app/api/products');
        const productsResponse = await response.json();

        if (response.status !== 200) throw new Error('Error');
        dispatch(getProductsFullfilled(productsResponse));
        dispatch(getProductsLoading(false));
    } catch (error) {
        dispatch(deleteProductsRejected());
    }
}
