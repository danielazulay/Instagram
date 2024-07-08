// import {  useSelector } from 'react-redux'
import { Story } from "./Story"

export function StoryList({menu,handleMenuEdit,friendSave,checkFriend,stories,user,onOpenStory}){

    return(
        <section className="story-list">
        
        {stories && stories.filter((storie)=>user.following.includes(storie.by._id)|| user._id ===  storie.by._id).map((story) => {
     
            return <Story menu={menu} handleMenuEdit={handleMenuEdit} friendSave={friendSave} checkFriend={checkFriend} story={story} user={user} key={story._id} onOpenStory={onOpenStory} />
        })}

                
        {/* {stories && stories.map((story) => {
     
     return <Story menu={menu} handleMenuEdit={handleMenuEdit} friendSave={friendSave} checkFriend={checkFriend} story={story} user={user} key={story._id} onOpenStory={onOpenStory} />
 })} */}
        </section>
    )
}