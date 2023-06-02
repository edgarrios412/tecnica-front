import style from './Home.module.css'
import Nav from "../../layout/Nav/Nav"
import RatingStars from 'react-rating-stars-component';
import {Link} from "react-router-dom"

import libro1 from "../../../assets/libro1.jpg"
import libro2 from "../../../assets/libro2.jpg"
import libro4 from "../../../assets/libro4.jpg"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {filterBooks, findBooks, getBooks} from "../../../redux/actions"
import axios from "axios"
import {AiOutlineSearch} from "react-icons/ai"
import {MdOutlineClear} from "react-icons/md"

const Home = () => {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books)
  const search = useSelector(state => state.search)
  const bestBooks = useSelector(state => state.bestBooks)

  useEffect(() => {
    if(!search.length){
    axios.get("/book/all")
    .then(data => dispatch(getBooks(data.data)))
    }
  },[])

  const onInputChange = (e) => {
    dispatch(findBooks(e.target.value))
  }

  const changeFilter = (e) => {
    dispatch(filterBooks(e.target.name,e.target.value))
  }

  return(
    <>
      <Nav/>
      <h2 className={style.titleSection}>Para ti</h2>
      <div className={style.sliderBooks}>
        <Link className={style.noLink} to="/book"><div className={style.bookPremium}>
          <img src={libro2} className={style.imgBookPremium}></img>
          <div className={style.detailBookPremium}>
          <h3 className={style.titleBookPremium}>El quinto infierno</h3>
          <div className={style.autorBookPremium}>por Vicente Fernandez</div>
          <Rating style={{ maxWidth: 90 }} readOnly value={3} />
          <div className={style.visitors}>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=yina" className={style.imgProfile}></img>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=david" className={style.imgProfile}></img>
            <div className={style.morePerson}>+38</div>
          </div>
          </div>
        </div></Link>
        <div className={style.bookPremium} style={{backgroundColor:"#ff7e93"}}>
          <img src={libro4} className={style.imgBookPremium}></img>
          <div className={style.detailBookPremium}>
          <h3 className={style.titleBookPremium}>La historia de Rondha</h3>
          <div className={style.autorBookPremium}>por Vicente Fernandez</div>
          <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          <div className={style.visitors}>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=anonimo" className={style.imgProfile}></img>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=marcela" className={style.imgProfile}></img>
            <div className={style.morePerson}>+38</div>
          </div>
          </div>
        </div>
        <div className={style.bookPremium} style={{backgroundColor:"#7ee7ff"}}>
          <img src={libro1} className={style.imgBookPremium}></img>
          <div className={style.detailBookPremium}>
          <h3 className={style.titleBookPremium}>El quinto infierno</h3>
          <div className={style.autorBookPremium}>por Vicente Fernandez</div>
          <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          <div className={style.visitors}>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=leidy" className={style.imgProfile}></img>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=fernando" className={style.imgProfile}></img>
            <div className={style.morePerson}>+38</div>
          </div>
          </div>
        </div>
      </div>
      <div className={style.filtros}>
      <h2 className={style.titleSection}>Busquedas</h2>
      <div className={style.inputContainer}>
      <span className={style.iconLupa}><AiOutlineSearch/></span>
      <input onChange={onInputChange} value={search} className={style.input} placeholder='¿Que estás buscando?'/>
      </div>
      <select name="genre" className={style.filtro} onChange={changeFilter}>
        <option value="all" selected>Genero</option>
        <option value="accion">Accion</option>
        <option value="comedia">Comedia</option>
        <option value="adultos">Drama</option>
      </select>
      <select name="lang" className={style.filtro} onChange={changeFilter}>
        <option value="all" selected>Idioma</option>
        <option value="español">Español</option>
        <option value="ingles">Ingles</option>
        <option value="frances">Frances</option>
      </select>
      {/* <p className={style.filtro}>Clasificación</p> */}
      <select className={style.filtro}>
        <option selected>Relevancia</option>
        <option>Mas relevantes</option>
        <option>Menos relevantes</option>
      </select>
      <select className={style.filtro}>
        <option selected>Fecha</option>
        <option>Mas recientes</option>
        <option>Mas antiguos</option>
      </select>
      <button value="all" onClick={changeFilter} className={style.clear}><MdOutlineClear className={style.clearIcon}/></button>
      {/* <p className={style.filtro}>Categoria</p> */}
      </div>
      <div className={style.busquedasContainer}>
      <div className={style.books}>
        { books.map( book => { 
          return(<Link className={style.noLink} to={`/book/${book.id}`} ><div className={style.book}>
        <img src={book.image} className={style.bookImg}></img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>{book.title}</h4>
            <h5 className={style.bookAuthor}>por {book.created}</h5>
            <Rating readOnly style={{ maxWidth:80, marginTop:"-5px" }} value={book.reviews?.length == 0 ? 0 : book.reviews.reduce((ac, el) => {
  return ac + el.rating;
}, 0)/book.reviews.length}/>
          </div>
        </div></Link>)})}
      </div>
      </div>
      { books.length >= 10 && <div className={style.pagination}>
      <button className={style.buttonMoreBooks}>Cargar más</button>
      </div>}
    </>
  )
};

export default Home