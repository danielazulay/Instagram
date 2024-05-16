// import {  useSelector } from 'react-redux'
import { Story } from "./Story"

export function StoryList({stories,user,onOpenStory}){

    return(
        <section className="story-list">
        
        {stories && stories.map((story) => {
     
            return <Story story={story} user={user} key={story._id} onOpenStory={onOpenStory} />
        })}
        </section>
    )
}