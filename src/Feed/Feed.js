import React  from 'react'
import './Feed.css';
import StoryReel from './StoryReel/storyReel';
import MessageSender from './MessageSender/MessageSender.js'

const Feed =  () =>  {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender  />
        </div>
    )
}

export default Feed;