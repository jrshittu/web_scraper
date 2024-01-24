"use client"
import React from 'react'
import { useState } from 'react'

const SearchBar = () => {

    const [searchPrompt, setSearchPrompt] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchPrompt)
      }

  return (

    <form
        className="flex flex-wrap gap-4 mt-12"
        onSubmit={handleSubmit}
    >

      <input type='text' placeholder='Enter the web url here' className='searchbar-input' 
        value={searchPrompt}
        onChange={e => setSearchPrompt(e.target.value)}
      />

      <button type='submit' className='searchbar-btn'>
        Submit
      </button>
    </form>
  )
}

export default SearchBar
