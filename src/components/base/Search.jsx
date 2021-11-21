import React, { useState } from 'react'

export const Search = ({ cb }) => {
  const [value, setValue] = useState('')

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      hanleSubmit()
    }
  }
  const hanleSubmit = () => {
    cb(value)
  }
  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          id='searh-fiels'
          placeholder='search'
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className='btn'
          style={{ position: 'absolute', top: 0, right: 0 }}
          onClick={hanleSubmit}
        >
          search
        </button>
      </div>
    </div>
  )
}
