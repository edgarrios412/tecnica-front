import style from './Nav.module.css'
import logo from "../../../assets/logo.png" 
import namelogo from "../../../assets/namelogo.png"
import {AiOutlineSearch} from "react-icons/ai"
import {FaUserCircle} from "react-icons/fa"
import {Link} from "react-router-dom"

const Nav = () => {
  return(
    <nav className={style.nav}>
      <Link className={style.noLink} to="/"><div className={style.branding}>
      <img className={style.logo} src={logo}></img>
      <img className={style.nameLogo} src={namelogo} style={{height:"20px"}}></img>
      {/* <p>Good<strong>Book</strong></p> */}
      </div></Link>
      {/* <div className={style.inputContainer}>
      <span className={style.iconLupa}><AiOutlineSearch/></span>
      <input className={style.input} placeholder='¿Que estás buscando?'/>
      </div> */}
      <ul className={style.ul}>
        <Link className={style.noLink} to="/"><li className={style.liBook}>Inicio</li></Link>
        <Link className={style.noLink} to="/new"><li className={style.liBook}>{window.innerWidth < 500 ? "Crear":"Subir libro"}</li></Link>
        <div className={style.profileUser}>
        {/* <img src="https://api.dicebear.com/5.x/avataaars/svg?seed=invitado" className={style.liProfile}/> */}
        <FaUserCircle className={style.iconUser}/>
        <p className={style.nameUser}>Invitado</p>
        </div>
      </ul>
    </nav>
  )
};

export default Nav