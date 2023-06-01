import Nav from '../../layout/Nav/Nav';
import style from './Create.module.css'
import libro from "../../../assets/libro1.jpg" 
import {AiOutlineCloudUpload} from "react-icons/ai"
import { useState } from 'react';

const Create = () => {
  const [img, setImg] = useState(null);
  const [user, setUser] = useState(null)
  const uploadImg = (e) => {
    setImg("https://marketplace.canva.com/EAFC9kjhVO4/2/0/1003w/canva-portada-y-contraportada-de-libro-narraci%C3%B3n-moderna-negro-y-blanco-suMrBhSTQIc.jpg")
  }

  const changeUser = (e) => {
    setUser(e.target.value)
  }

  return(
    <>
    <Nav/>
    <div className={style.bookDetail}>
        { img ? <img src={img} className={style.imgBook} onClick={() => setImg(null)}/> :
        <div className={style.noImgBook} onClick={uploadImg}>
          <AiOutlineCloudUpload className={style.iconUpload}/>
          <p className={style.textUpload}>Sube la portada de tu libro</p>
        </div>}
        <div className={style.bookResume}>
        <input className={style.bookTitle} placeholder='Titulo del libro'></input>
        <div className={style.authorContainer}>
          <img className={style.imgAuthor} src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${user}`}/>
          <div className={style.authorData}>
          <input onChange={changeUser} className={style.nameAuthor} placeholder='Autor'></input>
          {/* <button className={style.buttonMoreBooks}>Mas libros del autor</button> */}
          </div>
        </div>
        <textarea className={style.descBook} placeholder='Escribe la descripción del libro'></textarea>
        {/* <div className={style.}> */}
        <div className={style.tagContainer}>
        <p className={style.tag}>Idioma</p>
        <input className={style.tagValue} placeholder='Ingresa el idioma del libro'></input>
        </div>
        <div className={style.tagContainer}>
        <p className={style.tag}>Generos</p>
        <input className={style.tagValue} placeholder='Ingresa los generos'></input>
        </div>
        <div className={style.tagContainer}>
        <p className={style.tag}>Publicado</p>
        <input className={style.tagValue} placeholder='Ingresa la fecha DD/MM/AA'></input>
        </div>
        {/* </div> */}
        <div className={style.buttonsContainer}>
          <button className={style.button}>Subir libro</button>
          {/* <button className={style.button2}>Editar libro</button> */}
        </div>
        </div>
      </div>
    </>
  )
};

export default Create