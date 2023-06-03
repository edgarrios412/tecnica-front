import { useState } from 'react';
import style from './Modal.module.css'
import { Rating } from '@smastrom/react-rating'
import {Tooltip} from "react-tooltip"
import validation from './validation';
 
const Modal = ({fn, url}) => {
  const [rating, setRating] = useState(0)
  const [sms, setSms] = useState(false)
  const [form, setForm] = useState({
    rating: rating
  })
  const [img, setImg] = useState(null)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleRatingChange = (e) => {
    setRating(e)
    setForm({
      ...form,
      rating:e
    })
  }
  const sendReview = () => {
    if(Object.entries(validation(form)).length == 0){
    fn(form)
    }else{
      setSms(true)
    }
  }
  
  return(
    <>
    { url ? <div className={style.background}>
    <div className={style.modalContainerUrl}>
      <h3 onClick={fn} className={style.titleModal}>Ingresa la URL</h3>
      <input name="image" className={style.input} onChange={(e) => setImg(e.target.value)}></input>
      <button onClick={() => fn(img)} className={style.button}>Aceptar</button>
      <h4 className={style.disclaimerUrl}>Coloca imagenes coherentes, evita ser sancionado</h4>
    </div>
  </div>:
    <div className={style.background}>
      <div className={style.modalContainer}>
        <h3 className={style.titleModal}>Nos encantaria saber tu opinion</h3>
        <input name="name" id="name" onChange={handleChange} className={style.input} placeholder='¿Como te llamas?'></input>
        <Tooltip anchorSelect="#name" place='bottom' content={validation(form).name} isOpen={sms}/>
        <textarea id="content" className={style.content} placeholder="Cuentanos tu opinion del libro" name="content" onChange={handleChange}></textarea>
        <Tooltip anchorSelect="#content" place='bottom' content={validation(form).content} isOpen={sms}/>
        <Rating className={style.rating} name="rating" onChange={handleRatingChange} value={rating} />
        <button onClick={sendReview} className={style.button}>Enviar</button>
        <h4 className={style.disclaimer}>Recuerda que tu opinion está visible para todo el mundo, ten cuidado con lo que dices</h4>
      </div>
    </div>}
    </>
  )
};

export default Modal