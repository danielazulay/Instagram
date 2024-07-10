// import {  useSelector } from 'react-redux'
import { Story } from "./Story"

export function StoryList({friendSave,checkFriend,stories,user}){

    return(
        <section className="story-list">
        
        {stories && stories.filter((storie)=>user.following.includes(storie.by._id)|| user._id ===  storie.by._id).map((story) => {
     
            return <Story friendSave={friendSave} checkFriend={checkFriend} story={story} user={user} key={story._id} />
        })}

        </section>
    )
}