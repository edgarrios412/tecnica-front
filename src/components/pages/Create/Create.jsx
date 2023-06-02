import Nav from '../../layout/Nav/Nav';
import style from './Create.module.css'
import libro from "../../../assets/libro1.jpg" 
import {AiOutlineCloudUpload} from "react-icons/ai"
import { useState } from 'react';
import axios from "axios"

import Select from 'react-select';

const Create = () => {
  const [img, setImg] = useState(null);
  const [user, setUser] = useState("Shakespeere");

  const lang = [
    { value: '1', label: 'Español' },
    { value: '2', label: 'Ingles' },
    { value: '3', label: 'Frances' }
  ]

  const genres = [
    { value: '1', label: 'Accion' },
    { value: '2', label: 'Comedia' },
    { value: '3', label: 'Romance' },
    { value: '4', label: 'Adultos' }
  ]

  const uploadImg = (e) => {
    setImg("https://marketplace.canva.com/EAFC9kjhVO4/2/0/1003w/canva-portada-y-contraportada-de-libro-narraci%C3%B3n-moderna-negro-y-blanco-suMrBhSTQIc.jpg")
  }

  const [form, setForm] = useState({
    // genre:[1,2],
    image:"https://marketplace.canva.com/EAFC9kjhVO4/2/0/1003w/canva-portada-y-contraportada-de-libro-narraci%C3%B3n-moderna-negro-y-blanco-suMrBhSTQIc.jpg"
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeLang = (e) => {
    // const l = e.map(i => Number(i.value))
    setForm({
      ...form,
      lang: e
    })
  }

  const changeGenre = (e) => {
    // const genre = e.map(i => Number(i.value))
    setForm({
      ...form,
      genres: e
      })
  }

  const submit = () => {
    console.log(form)
    axios.post("/book", form)
    alert("Enviado")
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
        <input className={style.bookTitle} onChange={handleChange} name="title" placeholder='Titulo del libro'></input>
        <div className={style.authorContainer}>
          <img className={style.imgAuthor} src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${user}`}/>
          <div className={style.authorData}>
          <input onChange={(e) => {changeUser(e); handleChange(e)}} name="created" className={style.nameAuthor} placeholder='Autor'></input>
          </div>
        </div>
        <textarea className={style.descBook} onChange={handleChange} name="summary" placeholder='Escribe la descripción del libro'></textarea>
        <div className={style.tagContainer}>
        <p className={style.tag}>Idioma</p>
        <Select name="lang" onChange={handleChangeLang} value={form.lang} options={lang}/>
        {/* <input className={style.tagValue} onChange={handleChange} name="lang" placeholder='Ingresa el idioma del libro'></input> */}
        </div>
        <div className={style.tagContainer}>
        <p className={style.tag}>Generos</p>
        <Select
        onChange={changeGenre}
        value={form.genres}
    isMulti
    name="colors"
    options={genres}
    // className="basic-multi-select"
    classNamePrefix="select"
  />
        {/* <input className={style.tagValue} placeholder='Ingresa los generos'></input> */}
        </div>
        <div className={style.tagContainer}>
        <p className={style.tag}>Publicado</p>
        <input type="date" className={style.tagValue} onChange={handleChange} name="date" placeholder='Ingresa la fecha DD/MM/AA'></input>
        </div>
        <div className={style.buttonsContainer}>
          <button className={style.button} onClick={submit}>Subir libro</button>
        </div>
        </div>
      </div>
    </>
  )
};

export default Create