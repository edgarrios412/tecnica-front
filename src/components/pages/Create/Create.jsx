import Nav from '../../layout/Nav/Nav';
import style from './Create.module.css'
import libro from "../../../assets/libro1.jpg" 
import {AiOutlineCloudUpload} from "react-icons/ai"
import { useEffect, useState } from 'react';
import axios from "axios"
import Modal from "../../layout/Modal/Modal"
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import { getBooks } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const Create = () => {
  const [img, setImg] = useState(null);
  const [user, setUser] = useState("Shakespeere");
  const [modal, setModal] = useState(false)
  const {id} = useParams()

  const [book, setBook] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if(id){
      axios.get(`book/${id}`)
      .then(data => {setBook(data.data);setImg(data.data.image)})
    }
  },[])

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

  const [form, setForm] = useState({
    image:img
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

  const changeModal = (url) => {
    setModal(false)
    // alert(url)
    setImg(url)
    setForm({
      ...form,
      image:url
    })
  }

  const deleteBook = () => {
    axios.delete(`/book/${id}`)
    .then(() => alert("Eliminado"))
    axios.get("/book/all")
    .then(data => dispatch(getBooks(data.data)))
  }

  const updateBook = () => {
    console.log(form)
    axios.put(`/book/${id}`, form)
    .then(() => alert("Editado"))
  }

  return(
    <>
    { modal && <Modal fn={changeModal} url={true}/>}
    <Nav/>
    { id ? <div className={style.bookDetail}>
        { img ? <img src={img} className={style.imgBook} onClick={() => setImg(null)}/> :
        <div className={style.noImgBook} onClick={() => setModal(true)}>
          <AiOutlineCloudUpload className={style.iconUpload}/>
          <p className={style.textUpload}>Sube la portada de tu libro</p>
        </div>}
        <div className={style.bookResume}>
        <input className={style.bookTitle} onChange={handleChange} name="title" placeholder={book?.title}></input>
        <div className={style.authorContainer}>
          <img className={style.imgAuthor} src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${user}`}/>
          <div className={style.authorData}>
          <input onChange={(e) => {changeUser(e); handleChange(e)}} name="created" className={style.nameAuthor} placeholder={book?.created}></input>
          </div>
        </div>
        <textarea className={style.descBook} onChange={handleChange} name="summary" placeholder={book?.summary}></textarea>
        <div className={style.tagContainer}>
        <p className={style.tag}>Idioma</p>
        <Select name="lang" onChange={handleChangeLang} value={book?.lang} options={lang}/>
        {/* <input className={style.tagValue} onChange={handleChange} name="lang" placeholder='Ingresa el idioma del libro'></input> */}
        </div>
        <div className={style.tagContainer}>
        <p className={style.tag}>Generos</p>
        <Select
        onChange={changeGenre}
        value={book?.genres}
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
          <button className={style.button} onClick={updateBook}>Guardar cambios</button>
          <button className={style.buttonDelete} onClick={deleteBook}>Borrar libro</button>
        </div>
        </div>
    </div> : <div className={style.bookDetail}>
        { form.image ? <img src={form.image} className={style.imgBook} onClick={() => setImg(null)}/> :
        <div className={style.noImgBook} onClick={() => setModal(true)}>
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
    </div>}
    </>
  )
};

export default Create