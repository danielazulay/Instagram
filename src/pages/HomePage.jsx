import { useEffect, useState } from "react";
import { Friends } from "../cmps/Friends";
import { SideSugestion } from "../cmps/SideSugestion";
import { StoryList } from "../cmps/StoryList";
import { useSelector } from "react-redux";
import { loadStories } from "../store/actions/story.actions";
import { StoryDetails } from "../cmps/StoryDetails";

export function HomePage() {
  const [story, setStory] = useState(null);


  const stories = useSelector((storeState) => storeState.storyModule.stories);
  const user = useSelector((userSate) => userSate.userModule.user);
  // const count = useSelector(storeState => storeState.userModule.count)

  // function changeCount(diff) {
  //     console.log('Changing count by:', diff);
  //     dispatch({ type: CHANGE_COUNT, diff })
  // }
  const [emojie, setEmojiPicker] = useState(null);
  const [selected, setSelected] = useState(false);


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
        <Friends />
        <StoryList   selected={selected} setSelected={setSelected} setEmojiPicker={setEmojiPicker} stories={stories} user={user} onOpenStory={onOpenStory} />
      </div>
      <div className="side-sugestion">
        <SideSugestion />
      </div>
      {/* Change story to StoryList and pass stories to it */}
    </div>
  );
}
