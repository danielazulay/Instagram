import { useEffect, useState } from "react";

import { SideSugestion } from "../cmps/SideSugestion";
import { StoryList } from "../cmps/StoryList";
import { useSelector } from "react-redux";
import { loadStories } from "../store/actions/story.actions";
import { StoryDetails } from "../cmps/StoryDetails";
import { storyService } from "../services/story.service";
import { UpdateUSer } from "../store/actions/user.actions";
import { userService } from "../services/user.service";

export function HomePage() {
  const stories = useSelector((storeState) => storeState.storyModule.stories);
  const user = useSelector((userSate) => userSate.userModule.user);

  const [storyId, setStoryId] = useState(null);
  const [emojie, setEmojiPicker] = useState(null);
  const [selected, setSelected] = useState(false);
  const [btnFriend,setBtnFriend] = useState()
  useEffect( () => {
    storyService.generateStories();
     onLoadStories();
     
  }, []);

  function friendSave(friend_id){

    let index = user.following.indexOf(friend_id)

    if(-1 !== index){
    user.following.splice(index,1);
    setBtnFriend(false)

    }else{
  
      user.following.push(friend_id);
      setBtnFriend(true)
    }

    userService.updateLocalUserFields(user)


    UpdateUSer(user);
  }

  function onLoadStories() {
    loadStories();
  }

  function onCloseStory() {
    setStoryId(null);
  }

  function onOpenStory(story) {
    setStoryId(story);
  }

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
        <SideSugestion  friendSave={friendSave} btnFriend={btnFriend}/>
      </div>
    </div>

  );
}
