import React  from 'react'
import './Feed.css';
import StoryReel from './StoryReel/storyReel';
import MessageSender from './MessageSender/MessageSender.js'
import Post from './Posts/Post';
import pics from '../img/Eben.jpg';

const Feed =  () =>  {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender  />

            <Post
                profilePic={pics}
                message="somemessagfe"
                timestamp="time stamps"
                image="https://scontent.flos1-1.fna.fbcdn.net/v/t1.0-1/p200x200/95178777_3427251147304672_3694810496159973376_n.jpg?_nc_cat=1&_nc_sid=1eb0c7&_nc_eui2=AeHxK5PVJFTSmb-dmEg7NMT319ztYFZxOhjX3O1gVnE6GJw5Bfsr5EPRKtX3U8FGfVXmFHsjgckTZQ9mZ9H6j5Bi&_nc_ohc=v82z82kQnWoAX-AUjwd&_nc_ht=scontent.flos1-1.fna&tp=6&oh=0eb52fc299dd6138a28f6d015729d380&oe=5F6EA054"
                username="Eben"
            />
            <Post
                profilePic={pics}
                message="somemessagfe"
                timestamp="time stamps"
                image=""
                username="Josh"
            />
        </div>
    )
}

export default Feed;