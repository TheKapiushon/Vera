import { FaHeart } from "react-icons/fa";


function CardBody({ item, i, onNavigate, onFavorite, basket }) {

  return (
    <div key={i} className="card--content bg-cherry rounded-md flex items-center justify-between h-40 my-4">
      <div className="img--container w-1/3 p-2 my-0 mx-auto">
        <img className="w-1/2 h-1/4" src={item.image} />
      </div>
      <div className="detail--container w-1/2 p-2 text-left">
        <span className="artist--container text-orange-400 py-10">{item.category}</span>
        <h2 onClick={() => onNavigate(item.id)} className="name--container text-orange-300 font- text-sm hover:text-orange-100 duration-300 h-8 overflow-hidden">{item.title}</h2>
        <h3 className="create--container text-orange-400"> Rate:  |  {item.rating.rate}  |</h3>
        <p className="price--container text-orange-300 font-normal"> Price:    {item.price}  $</p>
      </div>
      <div className="fav--container p-4">
        <FaHeart onClick={() => { onFavorite(item.id) }} className={`${basket.includes(item.id) ? "text-sky-600" : ""} text-xl text-orange-300 hover:text-orange-400 duration-700`} />
      </div>
    </div>
  )
}

export default CardBody