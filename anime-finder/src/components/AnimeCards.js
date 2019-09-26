import React from 'react';
import { connect } from 'react-redux';
import AnimeCard from './AnimeCard';

const AnimeCards = props => {
    console.log('ANIME_LIST: ', props.list);
    return(
        <div>
            {props.list.map(anime => {
                return <AnimeCard key={anime.mal_id} anime={anime} />
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return{
        list: state.animeList
    }
}

export default connect(mapStateToProps, {})(AnimeCards);