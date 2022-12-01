import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getProducts,deleteProductsThunk} from '../../store/products/thunks';
import { Link } from 'react-router-dom';
import styles from "./productRecurso.module.css";

const Products = () => {
     const productsSelector = useSelector((state) => state.products);
     const dispatch = useDispatch();

     useEffect(() => {
        dispatch(getProducts());
     }, [dispatch]);

     function handleClick(id){
        dispatch(deleteProductsThunk(id));
      }

     if (productsSelector.isLoading) return <h3>Cargando...enlace..</h3>

  return (
        <div>     
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price USD</th>
                        <th>Stock</th>
                        <th>Category</th>                        
                    </tr>
                </thead>
                <tbody>
                    {productsSelector.data.map((product) => {
                        return (
                            
                        <tr key={product.id}>
                            <td> 
                            <input //input name
                                type="text" 
                                placeholder={product.name}
                               
                            ></input>
                            </td>
                            <td>
                            <input //input description
                                type="text" 
                                placeholder={product.description}
                               
                            ></input>
                            </td> 
                            <td>
                            <input //input price
                                type="text" 
                                placeholder={product.price}
                               
                            ></input>
                            </td>  
                            <td>
                            <input //input stock
                                type="text" 
                                placeholder={product.stock}
                               
                            ></input>
                            </td>  
                            <td>
                            <input //input category
                                type="text" 
                                placeholder={product.category}
                                
                            ></input>
                            </td>                    
                              
                            <td><Link to={`/edit/${product._id}`}><button className={styles.editar}>Editar</button></Link></td>
                            <td><button onClick={() => handleClick(product._id)} className={styles.delete}>Eliminar</button></td>
                        </tr>                                       
                        );
                    }
                    )}
                </tbody>
                <Link  className='btn-add' to={"/add"}><button className='btn-add'>Agregar Producto</button></Link>
            </table>      
        
        </div>
  )
}

export default Products