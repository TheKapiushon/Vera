import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Options from "../Options";
import CardBody from "../CardBody";
import Navbar from "../Navbar"
import Favorite from "../Favorite";


function Card({ art }) {

  // Hooks
  const search = useRef()
  const navigate = useNavigate()
  const [basket, setBasket] = useState([])
  const [get, setGet] = useState([])
  const [favState, setFavState] = useState(false)
  let [checkBox, setCheckBox] = useState([])

  // Variables
  let comps = art.map((item) => item.category)
  const companies = [...new Set(comps)]

  // functions
  const handleNavigate = (id) => {
    navigate(`/${id}`)
  }

  const handleFavorite = (productId) => {

    if (basket.includes(productId)) {
      setBasket((prev) => {
        return prev.filter((product) => product !== productId)
      })
    } else {
      setBasket(prev => [...prev, productId])
    }
  }

  const handleFilter = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckBox((prev) => [...prev, value])
    } else {
      setCheckBox((prev) => {
        return prev.filter((item) => item !== value)
      })
    }

  }

  const handleSearch = () => {
    const value = search.current.value;
    const productsTitle = art.map((product) => {
      return product.title;
    })
    const searchedProducts = productsTitle.filter((product) => {
      return product.search(value) > -1;
    })

    if (searchedProducts.length) {
      const searched = art.filter((product) =>
        searchedProducts.includes(product.title)
      );
      setGet(searched);
    }
  }

  // Filter useEffect
  useEffect(() => {


    if (checkBox.length) {
      const filtered = art.filter((product) =>
        checkBox.includes(product.category)
      )
      setGet(filtered)
    } else {
      setGet("")
    }

  }, [checkBox])


  return (
    <>
      {
        favState ? <Favorite
          basket={basket}
          art={art}
        /> : <>
          <Options
            onFilter={handleFilter}
            onSearch={handleSearch}
            companies={companies}
            search={search}
          />
          <div className="card--container bg-orange-300 p-4">
            <>
              {
                !get.length ? art.map((item, i) => {
                  return (
                    <CardBody
                      setBasket={setBasket}
                      basket={basket}
                      item={item}
                      i={i}
                      onNavigate={handleNavigate}
                      onFavorite={handleFavorite}
                    />
                  )
                }) : get.map((item, i) => {
                  return (
                    <CardBody
                      setBasket={setBasket}
                      basket={basket}
                      item={item}
                      i={i}
                      onNavigate={handleNavigate}
                      onFavorite={handleFavorite}
                    />
                  )
                })
              }
            </>
          </div>
        </>
      }
      <Navbar setFavState={setFavState} />
    </>
  )
}

export default Card