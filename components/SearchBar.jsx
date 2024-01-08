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
      
    </form>
  )
}

export default SearchBar
