import { Link } from "../../General/Link/Link"
import { FaBars } from "react-icons/fa"
import { useRef } from "react"

export function Navbar(){
  const navRef= useRef(null);

 const showNavbar = () => {
  navRef.current.classList.toggle("responsive-nav")
 }

  return(
    <header>
      <nav ref={navRef} className="navbar responsive-nav">
        <div className="navbar-link-box navbar-link-box-one">
          <Link href="#heading-main" text="Главная" className="nav-link"></Link>
        </div>
        <div className="navbar-link-box navbar-link-box-two">
          <Link href="#heading-services" text="Услуги" className="nav-link"></Link>
        </div>
        <div className="navbar-link-box navbar-link-box-three">
          <Link href="#heading-members" text="Команда" className="nav-link"></Link>
        </div>
        <div className="navbar-link-box navbar-link-box-four">
          <Link href="#heading-contacts" text="Контакты" className="nav-link"></Link>
        </div>
      </nav>
      <button onClick={showNavbar} className="nav-btn nav-open-btn">
        <FaBars/>
      </button>
    </header>
  )
}