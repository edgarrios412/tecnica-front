import { useState } from 'react';
import style from './Modal.module.css'
import axios from 'axios';
 
const Modal = ({fn, url}) => {
  const [form, setForm] = useState()
  const [img, setImg] = useState(null)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const sendReview = () => fn(form)
  
  return(
    <>
    { url ? <div className={style.background}>
    <div className={style.modalContainer}>
      <h3 onClick={fn}>ingresa el URL de tu imagen</h3>
      <h4>Recuerda que tu opinion está visible para todo el mundo, ten cuidado con lo que dices</h4>
      <input name="image" onChange={(e) => setImg(e.target.value)}></input>
      <button onClick={() => fn(img)}>Enviar</button>
    </div>
  </div>:
    <div className={style.background}>
      <div className={style.modalContainer}>
        <h3 onClick={fn}>Nos encantaria saber tu opinion</h3>
        <h4>Recuerda que tu opinion está visible para todo el mundo, ten cuidado con lo que dices</h4>
        <input name="name" onChange={handleChange}></input>
        <input name="content" onChange={handleChange}></input>
        <input name="rating" onChange={handleChange}></input>
        <button onClick={sendReview}>Enviar</button>
      </div>
    </div>}
    </>
  )
};

export default Modal