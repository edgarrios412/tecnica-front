import style from "./Reviews.module.css";
import RatingStars from 'react-rating-stars-component';
import { Rating } from '@smastrom/react-rating'
import axios from "axios";
import Modal from "../Modal/Modal";

const Reviews = ({reviews, fn}) => {

  // const sendReview = async () => {
  //   await axios.post("/review", {
  //     name:"David",
  //     content:"Te amo mi vida",
  //     rating:5,
  //     bookId:1
  //   })
  //   fn()
  // }

  return (
    <div className={style.reviewsContainer}>
      <h2 className={style.titleSection}>Nuestros lectores opinaron</h2>
      <div className={style.reviews}>
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
      </div>
      <button className={style.myReview} onClick={fn}>Quiero dejar mi opinión</button>
      <Modal/>
    </div>
  );
};

export default Reviews;
