// import {  useSelector } from 'react-redux'
import { Story } from "./Story"

export function StoryList({stories}){

    return(
        <section className="story-list">
        
        {stories && stories.map((story) => {
            return <Story story={story} key={story._id} />
        })}
        </section>
    )
}