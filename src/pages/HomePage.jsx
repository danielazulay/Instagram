import { useEffect, useState } from "react";


import { SideSugestion } from "../cmps/SideSugestion";
import { StoryList } from "../cmps/StoryList";
import { useSelector } from "react-redux";
import { loadStories } from "../store/actions/story.actions";
import { StoryDetails } from "../cmps/StoryDetails";
import { UpdateFriend, UpdateUSer, loadFriends } from "../store/actions/user.actions";


export function HomePage() {
  const stories = useSelector((storeState) => storeState.storyModule.stories);
  const user = useSelector((userSate) => userSate.userModule.user);
  const friends = useSelector((userSate) => userSate.userModule.users);
  const [storyId, setStoryId] = useState(null);
  const [emojie, setEmojiPicker] = useState(null);
  const [selected, setSelected] = useState(false);


  useEffect(  () => {
   
     onLoadStories();
     onLoadFriends()
     
  }, [stories]);

  

  function friendSave(friend_id){

    let index = user.following.indexOf(friend_id)
    let friend = friends.filter((el)=>friend_id ===el._id )[0]
    
    if(-1 !== index){
    user.following.splice(index,1);
    let userIndex =   friend.followers.indexOf(user._id)

    friend.followers.splice(userIndex,1);
    }else{
  
      user.following.push(friend_id);
      friend.followers.push(user._id)

    }
 
    UpdateFriend(friend);
    UpdateUSer(user);
  }

  function checkFriend(id){
    return user.following.indexOf(id) !== -1 ? true : false
}

  // function friendSave(friend_id){

  //   let index = user.following.indexOf(friend_id)

  //   if(-1 !== index){
  //   user.following.splice(index,1);
  //   setBtnFriend(false)

  //   }else{
  
  //     user.following.push(friend_id);
  //     setBtnFriend(true)
  //   }

  //   userService.updateLocalUserFields(user)


  //   UpdateUSer(user);
  // }

  function onLoadStories() {
    loadStories();
  }

  function onLoadFriends() {
    loadFriends()
  }

  function onCloseStory() {
    setStoryId(null);
  }

  function onOpenStory(story) {
    setStoryId(story);
  }

  if(!stories) return <>...loading</>
  return (

    <div className="home-page">
         
      {storyId && (
        <StoryDetails
          storyId={storyId}
          selected={selected}
          setSelected={setSelected}
          setEmojiPicker={setEmojiPicker}
          user={user}
          onCloseStory={onCloseStory}
        />
      )}
      {/* {story && <StoryDetails   selected={selected} setSelected={setSelected} setEmojiPicker={setEmojiPicker} story={story} user={user} onCloseStory={onCloseStory}/>} */}

      <div className="story-list">
        <StoryList stories={stories} user={user} onOpenStory={onOpenStory} />
      </div>
      <div className="side-sugestion">
        <SideSugestion  friendSave={friendSave} checkFriend={checkFriend}/>
      </div> 
    </div>

  );
}
