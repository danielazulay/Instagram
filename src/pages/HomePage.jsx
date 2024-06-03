import { useEffect, useState } from "react";
import { Friends } from "../cmps/Friends";
import { SideSugestion } from "../cmps/SideSugestion";
import { StoryList } from "../cmps/StoryList";
import { useSelector } from "react-redux";
import { loadStories } from "../store/actions/story.actions";
import { StoryDetails } from "../cmps/StoryDetails";
import { Create } from "./Create";
import { SideMenu } from "../cmps/SideMenu";

export function HomePage() {
  const [story, setStory] = useState(null);


  const stories = useSelector((storeState) => storeState.storyModule.stories);
  const user = useSelector((userSate) => userSate.userModule.user);

  
  const [emojie, setEmojiPicker] = useState(null);
  const [selected, setSelected] = useState(true);
  const [create, setCreate] = useState(false);

function onCloseCreate(){
    setCreate((status)=>!status)
  }


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
    <SideMenu user={user} onCloseCreate={onCloseCreate} />
      {story && <StoryDetails   selected={selected} setSelected={setSelected} setEmojiPicker={setEmojiPicker} story={story} user={user} onCloseStory={onCloseStory}/>}
      { create && <Create onCloseCreate={onCloseCreate}  user={user}  />}
      <div>
        <Friends />
        <StoryList  stories={stories} user={user} onOpenStory={onOpenStory} />
      </div>
      <div className="side-sugestion">
      
      </div>
    </div>
  );
}
