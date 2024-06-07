import { useEffect, useState } from "react";

import { SideSugestion } from "../cmps/SideSugestion";
import { StoryList } from "../cmps/StoryList";
import { useSelector } from "react-redux";
import { loadStories } from "../store/actions/story.actions";
import { StoryDetails } from "../cmps/StoryDetails";



export function HomePage() {
  const [story, setStory] = useState(null);


const stories = useSelector((storeState) => storeState.storyModule.stories);
  const user = useSelector((userSate) => userSate.userModule.user);

  
  const [emojie, setEmojiPicker] = useState(null);
  const [selected, setSelected] = useState(true);


  useEffect(() => {
    onLoadStories();
  }, []);

  function onLoadStories() {
    loadStories();
  }

  function onCloseStory(){
    setStory(null)
  }

  function onOpenStory(story){
    setStory(story)
  }
  
  
  return (
    <div className="home-page">
  
      {story && <StoryDetails   selected={selected} setSelected={setSelected} setEmojiPicker={setEmojiPicker} story={story} user={user} onCloseStory={onCloseStory}/>}
   
      <div>
        {/* <Friends /> */}
        <StoryList  stories={stories} user={user} onOpenStory={onOpenStory} />
      </div>
      <div className="side-sugestion">
      <SideSugestion/>
      </div>
    </div>
  );
}
