import {
    getProductsRejected,
    getProductsLoading,
    getProductsFullfilled,
    
    saveProductsFullfilled,
    saveProductsLoading,
    saveProductsRejected,

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
        dispatch(getProductsRejected());
    }
}
//Agregar products
export const saveProductThunk = (product) => async (dispatch) => {
    try{
        dispatch(saveProductsLoading(true));
        const response = await fetch('https://mcga-2022-backend-git-master-julianv97.vercel.app/api/products/add',{
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        const productsResponse = await response.json();
        if(response.status !==200) throw new Error('Error');
        dispatch(saveProductsFullfilled(productsResponse));
        dispatch(saveProductsLoading(false));
        dispatch(saveProductsFullfilled());
    }catch (error){
        dispatch(saveProductsRejected());
    }
}
