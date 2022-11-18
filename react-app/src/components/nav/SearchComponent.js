import React from 'react';
import { useEffect, useState } from 'react';
import { createSearch, getSearch } from '../../store/search';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './search.css'

const SearchBar = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [error,setError] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('what is search', search)
        let params ={
            search
        }
        console.log('what is paramse', params)
        let error = []
        if(search.length < 3){
            error.push('Search must atleast 3 characters')
        }
        if(search.length > 100){
            error.push('Search cannot be longer than 100 characters')
        }
        if(!search){
            error.push('Not enough characters')
        }
            setError()

            dispatch(createSearch(params))
            console.log('after dispatch on click')
            setSearch('')
            return history.push('/searchProducts')

    }



    return (
        <div className='searchWrapper'>
            <form className='searchForm' onSubmit={handleSubmit}>
                {error && (
                    <ul className='errorMap'>
                        {error.map((error, i) => {
                            <li key={i}>
                                {error}
                            </li>
                        })}
                    </ul>
                )}
                <div className='formWrapper'>
                    <div className='searchfieldWrapper'>
                        <input placeholder='Search for anything' type='text' value={search}
                        onChange = {(e) => setSearch(e.target.value)} required/>
                    </div>
                    <div className='buttonWrapper'>
                        <button className='searchButton' type='submit'>Search Logo</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
