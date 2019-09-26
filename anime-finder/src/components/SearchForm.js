import React, { useState } from 'react';

const SearchForm = () => {
    const [anime, setAnime] = useState('');

    const animeInput = e => {
        setAnime(e.target.value);
    }

    const submitAnime = e => {
        e.preventDefault();
    }

    return(
        <form onSubmit={submitAnime}>
            <input type='text' value={anime} onChange={animeInput}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SearchForm;