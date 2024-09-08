import { FaBars } from "react-icons/fa";
import veraLogo from '../../../public/Vera.png'

function Header() {

  return (
    <>
      <header className="header--container sticky left-0 top-0 shadow-red-950 shadow-md w-full bg-cherry flex items-center justify-between p-4">
        <div className="nav--container w-1/2">
          <FaBars className="text-xl text-orange-300 hover:text-orange-400 duration-300" />
        </div>
        <div className="brand--container w-1/3">
          <img className="w-full" src={veraLogo} />
        </div>
      </header>
    </>
  )
}

export default Header;