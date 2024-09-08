import { FaHeart } from "react-icons/fa";

function Favorite({ art, basket }) {


  const filteredProduct = art.filter((product) =>
    basket.includes(product.id)
  )


  return (
    <>
      {
        filteredProduct.length ? <>{
          filteredProduct.map((item, i) => {
            return (
              <>
                <div key={i} className="fav--container bg-orange-300 flex items-center justify-center flex-col">
                  <div className="fav-content--container rounded-md bg-cherry p-4 m-4">
                    <div className="fav-img--container w-1/3 mx-auto my-auto flex items-center justify-center">
                      <img className="w-full rounded-sm" src={item.image} />
                    </div>
                    <div className="fav-name--container p-2">
                      <h2 className="text-orange-300 font-bold hover:text-orange-50 duration-300">{item.title}</h2>
                      <span className="text-orange-400 font-normal">{item.category}</span>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }</> : <div className="empty--container bg-orange-300 h-screen p-4 flex flex-col items-center justify-center">
          <h2 className="p-4 text-orange-500 text-4xl font-bold bg-cherry">There is still no product !</h2>
          <p className="p-4 text-orange-500 m-2 text-4xl font-bold bg-cherry">Please click on a HEART <div className="flex items-center justify-center pt-4"><FaHeart /></div> mark to add a product to this list </p>
        </div>
      }
    </>
  )
}

export default Favorite