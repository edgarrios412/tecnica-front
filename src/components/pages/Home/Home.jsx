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
import { useEffect, useState } from 'react';
import {filterBooks, findBooks, getBooks, orderBy} from "../../../redux/actions"
import axios from "axios"
import {AiOutlineSearch} from "react-icons/ai"
import {MdOutlineClear} from "react-icons/md"
import {motion} from "framer-motion"

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books)
  const search = useSelector(state => state.search)
  const bestBooks = useSelector(state => state.bestBooks)
  const [width, setWidth] = useState()
  const container = {
    hidden:{opacity:0},
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.2
      }
    }
  }
  
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    style:{
      margin:"0px 50px",
    }
  };
  if (window.innerWidth < 850) {
    settings.slidesToShow = 1;
  } else if (window.innerWidth < 1200) {
    settings.slidesToShow = 2;
  } else if (window.innerWidth > 1200) {
    settings.slidesToShow = 3;
  }
  const handleSize = () => {
    setWidth(window.innerWidth)
    if(width <= 1000){
      // settings.slidesToShow = 1
      // console.log(settings)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleSize)

    return()=> {
      window.removeEventListener("resize", handleSize)
    }
  })

  const colors = ["#d5edb9","#c4bdf3","#fbe8a4","#ffc198","#fac9dc"]


  const itemAnimado = {
    hidden:{ opacity:0, scale:0},
    show:{opacity:1, scale:1}
  }

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

  const orderBooks = (e) => {
    dispatch(orderBy(e.target.name, e.target.value))
  }

  return(
    <>
      <Nav/>
      <h2 className={style.titleSection}>Para ti</h2>
        <Slider {...settings}>
        {bestBooks?.slice(0,5).map( (book,index) => <Link className={style.noLink} to={`/book/${book.id}`}><div style={{backgroundColor:colors[index]}} className={style.bookPremium}>
          <img src={book.image} className={style.imgBookPremium}></img>
          <div className={style.detailBookPremium}>
          <h3 className={style.titleBookPremium}>{book.title}</h3>
          <div className={style.autorBookPremium}>por {book.created}</div>
          <Rating style={{ maxWidth: 90, marginTop:"10px" }} readOnly value={book.promedio} />
          {/* <div className={style.visitors}>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=yina" className={style.imgProfile}></img>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=david" className={style.imgProfile}></img>
            <div className={style.morePerson}>+38</div>
          </div> */}
          </div>
        </div></Link>)}
        </Slider>
      <div className={style.filtros}>
      <h2 className={style.titleSection}>Busquedas</h2>
      <div className={style.inputContainer}>
      <span className={style.iconLupa}><AiOutlineSearch/></span>
      <input onChange={onInputChange} value={search} className={style.input} placeholder='¿Que estás buscando?'/>
      </div>
      <div className={style.containerFilter}>
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
      </div>
      <div className={style.containerFilter}>
      <select name="rating" className={style.filtro} onChange={orderBooks}>
        <option value="asc" selected>Mas relevantes</option>
        <option value="desc">Menos relevantes</option>
      </select>
      <select name="date" className={style.filtro} onChange={orderBooks}>
        <option selected>Fecha</option>
        <option value="asc">Mas recientes</option>
        <option value="desc">Mas antiguos</option>
      </select>
      </div>
      <button value="all" onClick={changeFilter} className={style.clear}>{window.innerWidth > 1300 ? <MdOutlineClear className={style.clearIcon}/> : <p className={style.titleClear}>Limpiar filtros</p>}</button>
      {/* <p className={style.filtro}>Categoria</p> */}
      </div>
      <div className={style.busquedasContainer}>
      <motion.ul className={style.books}
      variants={container}
      initial="hidden"
      animate="show"
      >
        {books.length ? books.map( book => { 
          return(<Link className={style.noLink} to={`/book/${book.id}`} ><motion.li variants={itemAnimado} className={style.book}>
        <motion.img layoutId={book.id} src={book.image} className={style.bookImg}></motion.img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>{book.title}</h4>
            <h5 className={style.bookAuthor}>por {book.created}</h5>
            <Rating readOnly style={{ maxWidth:80, marginTop:"-5px" }} value={book.reviews?.length == 0 ? 0 : book.reviews.reduce((ac, el) => {
  return ac + el.rating;
}, 0)/book.reviews.length}/>
          </div>
        </motion.li></Link>)}):
        <h1 className={style.notFound}>No encontramos ningun resultado{":("}</h1>
        }
      </motion.ul>
      </div>
      { books.length >= 10 && <div className={style.pagination}>
      <button className={style.buttonMoreBooks}>Cargar más</button>
      </div>}
    </>
  )
};

export default Home