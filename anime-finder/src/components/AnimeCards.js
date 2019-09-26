import React from 'react';
import { connect } from 'react-redux';
import AnimeCard from './AnimeCard';

const AnimeCards = props => {
    return(
        props.error ? <h1>Anime appears to not exist</h1> :
        props.fetching ? <h1>Fetching Anime...</h1> :
        <div>
            {props.list.map(anime => {
                return <AnimeCard key={anime.mal_id} anime={anime} />
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return{
        list: state.animeList,
        error: state.error,
        fetching: state.isFetching
    }
}

export default connect(mapStateToProps, {})(AnimeCards);