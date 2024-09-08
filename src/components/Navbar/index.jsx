import { FaHome, FaHeart, FaUser, FaCartArrowDown } from "react-icons/fa";

function Navbar({ setFavState }) {

  const handleFav = () => {
    setFavState(true)
  }

  const handleShop = () => {
    setFavState(false)
  }

  return (
    <>
      <nav className="nav--container flex items-center justify-evenly bg-cherry sticky left-0 bottom-0 border-t-2 border-red-950">
        <button className="text-orange-300 hover:text-orange-400 duration-300 text-4xl p-3" href="#"><FaHome /></button>
        <button onClick={handleShop} className="text-orange-300 hover:text-orange-400 duration-300 text-4xl p-3" href="#"><FaCartArrowDown /></button>
        <button onClick={handleFav} className="text-orange-300 hover:text-orange-400 duration-300 text-4xl p-3" href="#"><FaHeart /></button>
        <button className="text-orange-300 hover:text-orange-400 duration-300 text-4xl p-3" href="#"><FaUser /></button>
      </nav>
    </>
  )
}

export default Navbar