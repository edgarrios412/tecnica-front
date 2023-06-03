import style from "./Reviews.module.css";
import RatingStars from 'react-rating-stars-component';
import { Rating } from '@smastrom/react-rating'
import axios from "axios";
import Modal from "../Modal/Modal";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = ({reviews, fn}) => {

  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    style:{
      margin:"0px 100px",
    }
  };

  if (window.innerWidth < 600) {
    settings.slidesToShow = 1;
  } else if (window.innerWidth < 900) {
    settings.slidesToShow = 2;
  } else if (window.innerWidth > 900) {
    settings.slidesToShow = 3;
  }

  return (
    <div className={style.reviewsContainer}>
      <h2 className={style.titleSection}>Nuestros lectores opinaron</h2>
      <div className={style.reviews}>
      { reviews?.length == 0 && <h2 className={style.notReview}>Aún no hay reseñas, sé el primero</h2>}
      { reviews?.length < 4 &&
        reviews.map( r => 
        <div className={style.review}>
          <div className={style.reviewHeader}>
            <img src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${r.name}`} className={style.imgProfile}></img>
            <div className={style.userData}>
              <p className={style.userName}>{r.name}</p>
              <Rating readOnly style={{ maxWidth:80 }} value={r.rating}/>
            </div>
          </div>
          <p className={style.textReview}>{r.content}</p>
      </div>)}
      </div>
      {reviews?.length >= 4 && <Slider {...settings}>
        { reviews &&
        reviews.map( r => <div className={style.review}>
          <div className={style.reviewHeader}>
            <img src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${r.name}`} className={style.imgProfile}></img>
            <div className={style.userData}>
              <p className={style.userName}>{r.name}</p>
              <Rating readOnly style={{ maxWidth:80 }} value={r.rating}/>
            </div>
          </div>
          <p className={style.textReview}>{r.content}</p>
        </div>)}
        </Slider>}
      <button className={style.myReview} onClick={fn}>Quiero dejar mi opinión</button>
    </div>
  );
};

export default Reviews;
