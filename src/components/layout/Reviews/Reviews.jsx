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
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    style:{
      margin:"0px 100px",
    }
  };

  return (
    <div className={style.reviewsContainer}>
      <h2 className={style.titleSection}>Nuestros lectores opinaron</h2>
      <div className={style.reviews}>
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
      <Modal/>
    </div>
  );
};

export default Reviews;
