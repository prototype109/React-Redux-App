import React, { useState } from 'react';
import { search } from '../actions';
import { connect } from 'react-redux';

const SearchForm = props => {
    const [anime, setAnime] = useState('');

    const animeInput = e => {
        setAnime(e.target.value);
    }

    const submitAnime = e => {
        e.preventDefault();
        props.search(anime);
        setAnime('');
    }

    return(
        <form onSubmit={submitAnime}>
            <input type='text' value={anime} onChange={animeInput}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default connect(null, {search})(SearchForm);