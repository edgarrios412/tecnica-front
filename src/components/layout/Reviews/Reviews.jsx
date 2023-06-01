import style from "./Reviews.module.css";
import RatingStars from 'react-rating-stars-component';

const Reviews = () => {
  return (
    <div className={style.reviewsContainer}>
      <h2 className={style.titleSection}>Nuestros lectores opinaron</h2>
      <div className={style.reviews}>
        <div className={style.review}>
          <div className={style.reviewHeader}>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=anonimo" className={style.imgProfile}></img>
            <div className={style.userData}>
              <p className={style.userName}>Anonimo</p>
              <RatingStars
            count={5}
            // value={4}
            size={18}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
            </div>
          </div>
          <p className={style.textReview}>El libro es un asco, no lo compraria por nada del mundo inutiles, prefiero comprar una casa antes que esa porqueria</p>
        </div>
        <div className={style.review}>
          <div className={style.reviewHeader}>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=anonimo" className={style.imgProfile}></img>
            <div className={style.userData}>
              <p className={style.userName}>Anonimo</p>
              <RatingStars
            count={5}
            // value={4}
            size={18}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
            </div>
          </div>
          <p className={style.textReview}>El libro es un asco, no lo compraria por nada del mundo inutiles, prefiero comprar una casa antes que esa porqueria</p>
        </div>
        <div className={style.review}>
          <div className={style.reviewHeader}>
            <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=anonimo" className={style.imgProfile}></img>
            <div className={style.userData}>
              <p className={style.userName}>Anonimo</p>
              <RatingStars
            count={5}
            // value={4}
            size={18}
            // onChange={handleRatingChange}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fas fa-star"></i>}
          />
            </div>
          </div>
          <p className={style.textReview}>El libro es un asco, no lo compraria por nada del mundo inutiles, prefiero comprar una casa antes que esa porqueria</p>
        </div>
      </div>
      <button className={style.myReview}>Quiero dejar mi opinión</button>
    </div>
  );
};

export default Reviews;
