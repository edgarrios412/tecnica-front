import style from './Nav.module.css'
 
const Nav = () => {
  return(
    <nav className={style.nav}>
      <input className={style.input} placeholder='¿Que estás buscando?'/>
      <ul className={style.ul}>
        <li className={style.li}>Inicio</li>
        <li className={style.li}>Crear</li>
        <li className={style.li}>Perfil</li>
      </ul>
    </nav>
  )
};

export default Nav