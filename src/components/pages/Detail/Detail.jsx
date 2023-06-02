import Nav from '../../layout/Nav/Nav';
import style from './Detail.module.css'
import libro from "../../../assets/libro1.jpg"
import RatingStars from 'react-rating-stars-component';
import {BiUser} from "react-icons/bi"
import Reviews from '../../layout/Reviews/Reviews';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from "../../layout/Modal/Modal"
import { useDispatch } from 'react-redux';
import { findBooks } from '../../../redux/actions';
import { getBooks } from '../../../redux/actions';
import {motion} from "framer-motion"
 
const Detail = () => {
  const {id} = useParams()
  const [book, setBook] = useState()
  const [reviews, setReviews] = useState(null)
  const [modal, setModal] = useState(false)
  const [rating, setRating] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`book/${id}`)
    .then(data => setBook(data.data))
    getReviews()
  },[])

  useEffect(() => {
    if(reviews){
      setRating(reviews?.length == 0 ? 0 : reviews.reduce((ac, el) => {
        return ac + el.rating;
      }, 0)/reviews.length)
    }
  },[reviews])

  const moreByAuthor = () => {
    navigate("/")
    dispatch(findBooks(book.created))

  }

  const getReviews = () => {
    axios.get(`review/${id}`)
    .then(data => setReviews(data.data))
  }

  const sendReview = async (form) => {
    setModal(false)
    await axios.post("/review", {...form, bookId:id})
    axios.get("/book/all")
    .then(data => dispatch(getBooks(data.data)))
    getReviews()
  }



  return(
    <>
      {modal && <Modal fn={sendReview}/>}
      <Nav/>
      { book ? <div className={style.bookDetail}>
        <motion.img layoutId={book.id} src={book.image} className={style.imgBook}/>
        <div className={style.bookResume}>
        <h2 className={style.bookTitle}>{book.title}</h2>
        <div className={style.authorContainer}>
          <img className={style.imgAuthor} src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${book.created}`}/>
          <div className={style.authorData}>
          <b className={style.nameAuthor}>{book.created}</b>
          <button className={style.buttonMoreBooks} onClick={moreByAuthor}>Mas libros del autor</button>
          </div>
        </div>
        <div className={style.ratingContainer}>
        <Rating style={{ maxWidth: 120, color:"red" }} readOnly value={rating} />
          <p className={style.cantReview}><BiUser className={style.iconUser}/> <span className={style.cant}>{reviews?.length}</span></p>
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
          <Link to={`/edit/${id}`} ><button className={style.button2}>Editar libro</button></Link>
        </div>
        </div>
      </div>:<div className={style.loadingContainer}></div>}
      <Reviews reviews={reviews} fn={() => setModal(true)}/>
    </>
  )
};

export default Detail