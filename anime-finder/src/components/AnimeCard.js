import React from 'react';
import styled from 'styled-components';


const AnimeCard = props => {

    const Title = styled.h1`
        max-width: 200px;
    `;

    const Link = styled.a`
        text-decoration: none;
        color: black
    `;

    const shortenTitle = () => {
        const cutString = props.anime.title;
        if(cutString.length >= 22)
            return cutString.substring(0, 22) + '...';
        
        return cutString;
    }

    return( <div>
                <Link href={props.anime.url} target='_blank'>
                    <img src={props.anime.image_url} alt='Anime Img'/>
                    <Title>{shortenTitle()}</Title>
                </Link>
            </div>);
}

export default AnimeCard;