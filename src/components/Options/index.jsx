import { useState } from "react";


function Options({ onSearch, search, onFilter, companies }) {

  // Hooks
  const [state, setState] = useState(false)

  // functions
  const handleCategory = () => {
    setState(true)
  }

  return (
    <>
      <div className="option--container bg-cherry">
      <h2 className="text-left pl-4 pt-4 font-bold text-orange-300">Search Product :</h2>
        <div className="input--container flex items-center flex-row">
          <input onChange={onSearch} ref={search} className="p-3 m-4 text-orange-900 rounded-md bg-orange-300 placeholder:text-orange-800" type="text" placeholder="Search What You Want..." />
        </div>
        <h2 className="text-left pl-4 pt-4 font-bold text-orange-300">Filter Products :</h2>
        <div className="filter-option--container p-4 flex items-baseline justify-evenly flex-col">
          {
            state ? companies.map((item, i) => {
              return (
                <>
                  <div className="filter--container text-orange-300">
                    <label key={i} htmlFor={i}>
                      <input onChange={() => onFilter(event)} type="checkbox" key={i} value={item} id={i} />
                      {item}
                    </label>
                  </div>
                </>
              )
            }) : <button className=" duration-300 bg-orange-300 text-orange-700 hover:bg-orange-700 hover:text-orange-300 hover:border-red-500" onClick={handleCategory}>Show Filters</button>
          }
        </div>
      </div>
    </>
  )
}

export default Options;