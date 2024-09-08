import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function Detail() {

  // Hooks
  const [product, setProduct] = useState({})
  const params = useParams()

  // variables
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      <div className="detail--container bg-cherry">
        <div className="img--container w-1/2 my-0 mx-auto p-4">
          <img className="w-full rounded-md" src={product.image} />
        </div>
        <div className="art-detail--container">
          <h2 className="artist--container text-orange-400 p-2">{product.category}</h2>
          <h1 className="name--container font-bold text-orange-300 p-4">{product.title}</h1>
          <p className="description--container p-4 text-orange-400">{product.description}</p>
          <p className="price--container text-5xl p-5 text-orange-300">{product.price} $</p>
        </div>
        <div className="add-cart--container">
          <button className="add--container m-6 duration-300 bg-orange-300 text-orange-700 hover:bg-orange-700 hover:text-orange-300 hover:border-red-500">Add To Cart</button>
        </div>
      </div>
    </>
  )
}

export default Detail;