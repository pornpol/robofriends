import React from 'react'

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                type='search'
                className='pa3 ba b--green bg-lightest-blue'
                placeholder='Search Robot'
                onChange={searchChange}>
            </input>
        </div>
    )
}

export default SearchBox;