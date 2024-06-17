import { useEffect, useState } from "react";

import { SideSugestion } from "../cmps/SideSugestion";
import { StoryList } from "../cmps/StoryList";
import { useSelector } from "react-redux";
import { loadStories } from "../store/actions/story.actions";
import { StoryDetails } from "../cmps/StoryDetails";

export function HomePage() {
  const stories = useSelector((storeState) => storeState.storyModule.stories);
  const user = useSelector((userSate) => userSate.userModule.user);

  const [storyId, setStoryId] = useState(null);
  const [emojie, setEmojiPicker] = useState(null);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    onLoadStories();
  }, []);

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
        <SideSugestion />
      </div>
    </div>

  );
}
