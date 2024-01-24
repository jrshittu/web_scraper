"use client"
import React from 'react'
import { useState } from 'react'

const isValidAmazonUrl = (url) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;
    
    if (hostname.includes('amazon') ||
        hostname.includes('amazon.com') ||
        hostname.includes('amazon.')
    ) {
      return true;
    }

  } catch (error) {
    return false;
  }

  return false;
}

const SearchBar = () => {

    const [searchPrompt, setSearchPrompt] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValidUrl = isValidAmazonUrl(searchPrompt);
        alert(isValidUrl ? "Valid URL" : "Invalid URL");
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
