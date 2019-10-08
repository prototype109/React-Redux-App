import React from 'react';
import { connect } from 'react-redux';
import AnimeCard from './AnimeCard';
import styled from 'styled-components';

const AnimeCards = props => {

    const AnimeWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    `;

    return(
        props.error ? <h1>Anime appears to not exist</h1> :
        props.fetching ? <h1>Fetching Anime...</h1> :
        <AnimeWrapper>
            {props.list.map(anime => {
                return <AnimeCard key={anime.mal_id} anime={anime} />
            })}
        </AnimeWrapper>
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