import React  from 'react'
import './Story.css';
import {Avatar} from '@material-ui/core';

interface StoryProps {
    image?: String, 
    profileSrc?: any, 
    title?: String
}

const Story  =  ({image, profileSrc, title }: StoryProps) =>  {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
           <Avatar src={profileSrc} className="story__avatar" />
           <h4>{title}</h4>
        </div>
    )
}

export default Story;
