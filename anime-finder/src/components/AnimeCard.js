import React from 'react';

const AnimeCard = props => {
    return( <div>
                <a href={props.anime.url} target='_blank'>
                    <img src={props.anime.image_url} alt='Anime Img'/>
                    <h1>{props.anime.title}</h1>
                </a>
            </div>);
}

export default AnimeCard;