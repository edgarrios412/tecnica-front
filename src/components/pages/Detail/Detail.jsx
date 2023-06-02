import Nav from '../../layout/Nav/Nav';
import style from './Detail.module.css'
import libro from "../../../assets/libro1.jpg"
import RatingStars from 'react-rating-stars-component';
import {BiUser} from "react-icons/bi"
import Reviews from '../../layout/Reviews/Reviews';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
 
const Detail = () => {
  const {id} = useParams()
  const [book, setBook] = useState()
  useEffect(() => {
    axios.get(`book/${id}`)
    .then(data => setBook(data.data))
  },[])
  return(
    <>
      <Nav/>
      { book ? <div className={style.bookDetail}>
        <img src={libro} className={style.imgBook}/>
        <div className={style.bookResume}>
        <h2 className={style.bookTitle}>{book.title}</h2>
        <div className={style.authorContainer}>
          <img className={style.imgAuthor} src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${book.created}`}/>
          <div className={style.authorData}>
          <b className={style.nameAuthor}>{book.created}</b>
          <button className={style.buttonMoreBooks}>Mas libros del autor</button>
          </div>
        </div>
        <div className={style.ratingContainer}>
        <Rating style={{ maxWidth: 120, color:"red" }} value={3} />
          <p className={style.cantReview}><BiUser className={style.iconUser}/> <span className={style.cant}>6</span></p>
        </div>
        <p className={style.descBook}>{book.summary}</p>
        {/* <div className={style.}> */}
        <div className={style.tagContainer}>
        <p className={style.tag}>Idioma</p>
        <p className={style.tagValue}>{book.lang}</p>
        </div>
        <div className={style.tagContainer}>
        <p className={style.tag}>Generos</p>
        {book.genres.map( g => <p className={style.tagValue}>{g.name}</p>)}
        </div>
        <div className={style.tagContainer}>
        <p className={style.tag}>Publicado</p>
        <p className={style.tagValue}>{book.date}</p>
        </div>
        {/* </div> */}
        <div className={style.buttonsContainer}>
          <button className={style.button}>Leer ahora</button>
          <button className={style.button2}>Editar libro</button>
        </div>
        </div>
      </div>:<div className={style.loadingContainer}></div>}
      <Reviews/>
    </>
  )
};

export default Detail