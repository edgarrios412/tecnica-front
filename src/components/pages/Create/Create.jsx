import Nav from '../../layout/Nav/Nav';
import style from './Create.module.css'
import libro from "../../../assets/libro1.jpg" 
import {AiOutlineCloudUpload} from "react-icons/ai"
import { useEffect, useState } from 'react';
import axios from "axios"
import Modal from "../../layout/Modal/Modal"
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import { getBooks } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import {toast, Toaster} from "react-hot-toast"
import validation from './validation';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import { useRef } from 'react';

const Create = () => {
  const [img, setImg] = useState(null);
  const [user, setUser] = useState("Shakespeere");
  const [modal, setModal] = useState(false)
  const {id} = useParams()


  const [book, setBook] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [sms, setSms] = useState(false)

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
    image:img,
    title:"",
    genres:[],
    created:"",
    date:"",
    lang:"",
    summary:""
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
    if(Object.entries(validation(form)).length == 0){
      console.log(validation(form))
      axios.post("/book", form)
      .then(() => toast.success('Libro creado exitosamente'),() => toast.error('Ha ocurrido un error'))
    }else{
      setSms(true)
      toast.error('Debes llenar el formulario')
    }
    // setTimeout(() =>navigate("/"),2000)
  }

  const changeUser = (e) => {
    setUser(e.target.value)
  }

  const changeModal = (url) => {
    setModal(false)
    setImg(url)
    setForm({
      ...form,
      image:url
    })
  }

  const deleteBook = () => {
    axios.delete(`/book/${id}`)
    .then(() => toast.success('Libro eliminado exitosamente'))
    axios.get("/book/all")
    .then(data => dispatch(getBooks(data.data)))
    setTimeout(() => navigate("/"),2000)
  }

  const updateBook = () => {
    axios.put(`/book/${id}`, form)
    .then(() => toast.success('Libro editado exitosamente'))
  }

  return(
    <>
    { modal && <Modal fn={changeModal} url={true}/>}
    <Nav/>
    <Toaster
  position="top-center"
  reverseOrder={true}
/>
<Tooltip id="my-tooltip" />
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
        { form.image ? <img src={form.image} id="image" className={style.imgBook} onClick={() => setImg(null)}/> :
        <div className={style.noImgBook} id="noimage" onClick={() => setModal(true)}>
          <AiOutlineCloudUpload className={style.iconUpload}/>
          <p className={style.textUpload}>Sube la portada de tu libro</p>
        </div>}
        <Tooltip anchorSelect="#noimage" place='top' content={validation(form).image} isOpen={sms}/>
        <Tooltip anchorSelect="#image" place='top' content={validation(form).image} isOpen={sms}/>
        <div className={style.bookResume}>
        {/* <a id="title"> */}
          <input id="title" className={style.bookTitle} onChange={handleChange} name="title" placeholder='Titulo del libro'></input>
        {/* </a> */}
        <Tooltip anchorSelect="#title" content={validation(form).title} isOpen={sms}/>
        <div className={style.authorContainer}>
          <img className={style.imgAuthor} src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${user}`}/>
          <div className={style.authorData}>
          <input id="created" onChange={(e) => {changeUser(e); handleChange(e)}} name="created" className={style.nameAuthor} placeholder='Autor'></input>
          <Tooltip anchorSelect="#created" place='top' content={validation(form).created} isOpen={sms}/>
          </div>
        </div>
        {/* <a id="summary"> */}
        <textarea className={style.descBook} id='summary' onChange={handleChange} name="summary" placeholder='Escribe la descripción del libro'></textarea>
        {/* </a> */}
        <Tooltip anchorSelect="#summary" place='top' content={validation(form).summary} isOpen={sms}/>
        <div className={style.tagContainer}>
        <p id="lang" className={style.tag}>Idioma</p>
        {/* <a id="lang">} */}
        <Select name="lang" onChange={handleChangeLang} value={form.lang} options={lang}/>
        {/* </a> */}
        <Tooltip anchorSelect="#lang" content={validation(form).lang} isOpen={sms}/>
        {/* <input className={style.tagValue} onChange={handleChange} name="lang" placeholder='Ingresa el idioma del libro'></input> */}
        </div>
        <div className={style.tagContainer}>
        {/* <a id="genres"> */}
        <p id="genres" className={style.tag}>Generos</p>
        {/* </a> */}
        <Select
        onChange={changeGenre}
        value={form.genres}
    isMulti
    name="colors"
    options={genres}
    // className="basic-multi-select"
    classNamePrefix="select"
  />
        <Tooltip anchorSelect="#genres" content={validation(form).genres} isOpen={sms}/>
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