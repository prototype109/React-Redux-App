import React from 'react';

const AnimeCard = props => {
    return( <div>
                <img src={props.anime.image_url} alt='Anime Img'/>
                <h1>{props.anime.title}</h1>
            </div>);
}

export default AnimeCard;