// import {  useSelector } from 'react-redux'
import { Story } from "./Story"

export function StoryList({selected,setSelected,setEmojiPicker,stories,user,onOpenStory}){

    return(
        <section className="story-list">
        
        {stories && stories.map((story) => {
     
            return <Story selected={selected} setSelected={setSelected} setEmojiPicker={setEmojiPicker} story={story} user={user} key={story._id} onOpenStory={onOpenStory} />
        })}
        </section>
    )
}