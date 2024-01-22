"use client"
import React from 'react'

const SearchBar = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const searchTerm = e.target.elements.searchTerm.value
        console.log(searchTerm)
      }

  return (

    <form
        className="flex flex-wrap gap-4 mt-12"
        onSubmit={handleSubmit}
    >
      <input type='text' placeholder='Enter the web url here' className='searchbar-input' />
      <button type='submit' className='searchbar-btn'>
        Submit
      </button>
    </form>
  )
}

export default SearchBar
