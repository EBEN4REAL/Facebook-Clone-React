import React, {useState, useEffect}  from 'react'
import './Feed.css';
import StoryReel from './StoryReel/storyReel';
import MessageSender from './MessageSender/MessageSender.js'
import Post from './Posts/Post';
import db from '../firebase';

const Feed =  () =>  {
    const [posts, setPosts] = useState()

    useEffect(() => {
        db.collection('posts')
        .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
            console.log(snapshot.docs);
            const posts = snapshot.docs.map((doc) => {
                const obj = {
                    id: doc.id,
                    data: doc.data()
                }
                return obj
            })
            setPosts(posts)
        })
    }, [posts])

    console.log(posts);
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender  />
                {posts ? 
                  posts.map(post => (
                    <Post 
                        key={post.data.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        username={post.data.username}
                        image={post.data.image}
                        timestamp = {post.data.timestamp}
                    />
                )) : 
                null 
            }
               
        </div>
    )
}

export default Feed;