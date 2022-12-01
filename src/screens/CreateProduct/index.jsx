import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {saveProductThunk} from "../../store/products/thunks";
import styles from "./createproduct.module.css"

export default function CreateProduct() {
  const stateProducts = useSelector((state)=> state.products);
  const [submited, setSubmited] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    dispatch(saveProductThunk(data));
    setSubmited(true);
  };

  if(stateProducts.isLoading){
    return(
        <h2 className={styles.loading}>Cargando...</h2>
    )
  }
  if(submited && stateProducts.data){
    navigate("/");
  }  

  return (
    <div className={styles.conteiner}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Product</h2>
        <label>Name</label>

        <input type={"text"} {...register("name",{required: true, maxLength:50})}/>
        {errors.name && <span className={styles.error}>Ingrese un nombre válido</span>}

        <label>Description</label>
        <textarea cols="5" rows="3" type={"textarea"} {...register("description",{maxLength: 100})}></textarea>
        {errors.description && <span className={styles.error}>Ingrese una descripcion válida</span>}

        <label>Price</label>
        <input type={"number"} {...register("price",{ required:true, min: 1})}/>
        {errors.price && <span className={styles.error}>Ingrese un precio válido</span>}

        <label>Stock</label>
        <input type={"number"} {...register("stock",{ required:true, min: 0})}/>
        {errors.stock && <span className={styles.error}>Ingresar un número válido</span>}

        <label>Category</label>
        <select {...register("category")}>
          <option value="computers">Computadora</option>
          <option value="phones">Celulares</option>
          <option value="accesories">Accesorios</option>          
        </select>

        <button className={styles.btnAdd} type="submit">Crear</button>
      </form>
    </div>
  )
}