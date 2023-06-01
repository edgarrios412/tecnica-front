import style from './Home.module.css'
import Nav from "../../layout/Nav/Nav"
import RatingStars from 'react-rating-stars-component';
import {Link} from "react-router-dom"

import libro1 from "../../../assets/libro1.jpg"
import libro2 from "../../../assets/libro2.jpg"
import libro4 from "../../../assets/libro4.jpg"
import Pagination from '../../layout/Pagination/Pagination';

const Home = () => {
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
          <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
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
      <p className={style.filtro}>Genero</p>
      <p className={style.filtro}>Idioma</p>
      <p className={style.filtro}>Clasificación</p>
      <p className={style.filtro}>Relevancia</p>
      <p className={style.filtro}>Fecha de publicacion</p>
      {/* <p className={style.filtro}>Categoria</p> */}
      </div>
      <div className={style.busquedasContainer}>
      <div className={style.books}>
        <div className={style.book}>
        <img src={libro1} className={style.bookImg}></img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>Las cronicas de narnia</h4>
            <h5 className={style.bookAuthor}>Por Vicente Armando</h5>
            <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          </div>
        </div>
        <div className={style.book}>
        <img src={libro1} className={style.bookImg}></img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>Las cronicas de narnia</h4>
            <h5 className={style.bookAuthor}>Por Vicente Armando</h5>
            <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          </div>
        </div>
        <div className={style.book}>
        <img src={libro1} className={style.bookImg}></img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>Las cronicas de narnia</h4>
            <h5 className={style.bookAuthor}>Por Vicente Armando</h5>
            <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          </div>
        </div>
        <div className={style.book}>
        <img src={libro1} className={style.bookImg}></img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>Las cronicas de narnia</h4>
            <h5 className={style.bookAuthor}>Por Vicente Armando</h5>
            <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          </div>
        </div>
        <div className={style.book}>
        <img src={libro1} className={style.bookImg}></img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>Las cronicas de narnia</h4>
            <h5 className={style.bookAuthor}>Por Vicente Armando</h5>
            <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          </div>
        </div>
        <div className={style.book}>
          <img src={libro1} className={style.bookImg}></img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>Las cronicas de narnia y sus cuatro elefantes</h4>
            <h5 className={style.bookAuthor}>Por Vicente Armando</h5>
            <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          </div>
        </div>
        <div className={style.book}>
          <img src={libro1} className={style.bookImg}></img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>Las cronicas de narnia y sus cuatro elefantes</h4>
            <h5 className={style.bookAuthor}>Por Vicente Armando</h5>
            <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          </div>
        </div>
        <div className={style.book}>
          <img src={libro1} className={style.bookImg}></img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>Las cronicas de narnia y sus cuatro elefantes</h4>
            <h5 className={style.bookAuthor}>Por Vicente Armando</h5>
            <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          </div>
        </div>
        <div className={style.book}>
        <img src={libro1} className={style.bookImg}></img>
          <div className={style.bookInfo}>
            <h4 className={style.bookTitle}>Las cronicas de narnia</h4>
            <h5 className={style.bookAuthor}>Por Vicente Armando</h5>
            <RatingStars
            count={5}
            // value={4}
            size={20}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
          </div>
        </div>
      </div>
      {/* <div className={style.filtroContainer}></div> */}
      </div>
      <div className={style.pagination}>
      <button className={style.buttonMoreBooks}>Cargar más</button>
      </div>
    </>
  )
};

export default Home