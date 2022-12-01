import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {editProductThunk} from "../../store/products/thunks";
import styles from "./editproduct.module.css"

export default function EditProduct() {
    const [submited, setSubmited] = useState(false);
    const productsSelector = useSelector((state)=> state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const product = productsSelector.data.filter((product) => {
    const id = window.location.pathname.split("/")[2];
    return product._id === id;
    })[0];

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            category: product.category,
        },
    });

  const onSubmit = data => {
    data._id = product._id;
    console.log(data);
    dispatch(editProductThunk(data));
    setSubmited(true);    
  };

  if(productsSelector.isLoading){
    return(
        <h2 className={styles.loading}>Cargando...</h2>
    )
  }  

  if(submited && productsSelector.data){
    navigate("/Products");
  }

  return (
    <div className={styles.conteiner}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Actualizar</h2>
        <label>Nombre</label>
        <input type={"text"} {...register("name",{required: true, maxLength:20})}/>
        {errors.name && <span className={styles.error}>Ingrese un nombre válido</span>}

        <label>Descripcion</label>
        <textarea cols="10" rows="3" type={"textarea"} {...register("description",{maxLength: 100})}></textarea>
        {errors.description && <span className={styles.error}>Ingrese una descripcion válida</span>}

        <label>Precio</label>
        <input type={"number"} {...register("price",{required:true, min: 0})}/>
        {errors.price && <span className={styles.error}>Ingrese un precio válido</span>}

        <label>Stock</label>
        <input type={"number"} {...register("stock",{required:true, min: 0})}/>
        {errors.stock && <span className={styles.error}>Ingrese un numero válido</span>}

        <label>Categoria</label>
        <select {...register("category")}>
          <option value="computers">Computadora</option>
          <option value="phones">Celulares</option>
          <option value="accesories">Accesorios</option>
        </select>

        <button className={styles.btnActualizar} type="submit">Actualizar</button>
      </form>
    </div>
  )
}