import Nav from '../../layout/Nav/Nav';
import style from './Detail.module.css'
import libro from "../../../assets/libro1.jpg"
import RatingStars from 'react-rating-stars-component';
import {BiUser} from "react-icons/bi"
import Reviews from '../../layout/Reviews/Reviews';
 
const Detail = () => {
  return(
    <>
      <Nav/>
      <div className={style.bookDetail}>
        <img src={libro} className={style.imgBook}/>
        <div className={style.bookResume}>
        <h2 className={style.bookTitle}>Hasta que el verano se acabe</h2>
        <div className={style.authorContainer}>
          <img className={style.imgAuthor} src="https://api.dicebear.com/5.x/avataaars/svg?seed=connor hamilton"/>
          <div className={style.authorData}>
          <b className={style.nameAuthor}>Connor Hamilton</b>
          <button className={style.buttonMoreBooks}>Mas libros del autor</button>
          </div>
        </div>
        <div className={style.ratingContainer}>
        <RatingStars
            count={5}
            // value={4}
            size={24}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          <p className={style.cantReview}><BiUser className={style.iconUser}/> <span className={style.cant}>6</span></p>
        </div>
        <p className={style.descBook}>Novela rural que evoca al caribe como personaje legendario. Carácter popular, su respeto casi periodístico por el habla y las costumbres de los caribe. Sin embargo, desde el principio mismo del texto se percibe que no estamos ante un retrato localista o una exhaltación ingenua de un tipo social. El relato es moderno por su construcción y ritmo, por su tratamiento de los personajes, por la yuxtaposición de las escenas y por su descripción de la «épica» política. Los personajes parecen extrañamente implicados en los conflictos de su tiempo y a la vez distantes, obedeciendo a impulsos interiores que contrastan con una realidad de fondo.</p>
        {/* <div className={style.}> */}
        <div className={style.tagContainer}>
        <p className={style.tag}>Idioma</p>
        <p className={style.tagValue}>Castellano</p>
        </div>
        <div className={style.tagContainer}>
        <p className={style.tag}>Generos</p>
        <p className={style.tagValue}>Accion</p>
        <p className={style.tagValue}>Comedia</p>
        <p className={style.tagValue}>Romance</p>
        </div>
        <div className={style.tagContainer}>
        <p className={style.tag}>Publicado</p>
        <p className={style.tagValue}>15/05/2005</p>
        </div>
        {/* </div> */}
        <div className={style.buttonsContainer}>
          <button className={style.button}>Leer ahora</button>
          <button className={style.button2}>Editar libro</button>
        </div>
        </div>
      </div>
      <Reviews/>
    </>
  )
};

export default Detail