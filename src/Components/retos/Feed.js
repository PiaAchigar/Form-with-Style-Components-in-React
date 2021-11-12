import React from 'react'
import FeedCardComp from './FeedCardComp'
import { FeedCard } from '../../Elements/retos/StylesFeedCard'

const Feed = (props) => {
    return (
        <FeedCard>
            <FeedCardComp url={props.url} titulo={props.titulo} desc={props.desc} posted={props.posted} img={props.img}/>                     
        </FeedCard> 
    )
}

export default Feed
