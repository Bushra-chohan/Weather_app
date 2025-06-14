import {React, useState} from 'react'
import '../css/Search.css'

function Search({onSearch}) {

  // Local state to store user input from the text field
  const [inputValue, setInputValue] =useState('')

  // Handle form submission
  const submitBtn = (e) => {
    e.preventDefault()
    if (inputValue.trim()){
      onSearch(inputValue) // Trigger search only if input is not empty
    }
  }

  return (
    <div >
      <form className='search' action="" onSubmit={submitBtn}>
        <div>
          <i className="fas fa-map-marker-alt"></i>
          <input type="text" placeholder="Search city" onChange={(e) => setInputValue(e.target.value)}/>
        </div>

        <button>Search</button>
      </form>
    </div>
  )
}

export default Search