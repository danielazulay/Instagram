import { useSelector } from "react-redux";
import { CircleImg } from "../cmps/buttons/CircleImg";
import { SvgService } from "../services/svg.service";
import { useState } from "react";
import { StoryDetails } from "../cmps/StoryDetails";

export function Profile() {
  const user = useSelector((userSate) => userSate.userModule.user);
  const stories = useSelector((storeState) => storeState.storyModule.stories);

  const [emojie, setEmojiPicker] = useState(null);
  const [selected, setSelected] = useState(false);
  const [storyId, setStoryId] = useState(null);
  let [tab, setTab] = useState(true);

  let found = [];

  function loadSimg(id) {
    let story = stories.find((el) => el._id === id);

    return story.imgUrl;
  }

  function onCloseStory() {
    setStoryId(null);
  }

  function countStories() {
    if (!stories || !user) return 0;

    found = stories.filter((el) => {
      return el.by._id === user._id;
    });

    return found.length;
  }

  return (
    <div className="profile-page">
      <div className="grid-container">
        <div className="profile-container">
          <div className="img-grid">
            <CircleImg img={user.imgUrl} height={150} width={150} />
          </div>
          <div className="profile-loginname">
            <h2>{user.fullname}</h2>
            <button>Edit Profile</button>
            <button>View archive</button>
          </div>
          <div className="profile-info">
            <h5>{countStories()} post</h5>
            <h5>{user.following.length} following</h5>
            <h5>{user.followers.length} followers</h5>
          </div>
          <div className="profile-name">
            <h5>{user.fullname}</h5>
          </div>
        </div>
        <div className="mobile-profile">
        <div className="img-profile">
            <CircleImg img={user.imgUrl} height={77} width={77} />
            <div className="profile-loginname">
            <h2>{user.fullname}</h2>
            <button className="profile-edit">Edit Profile</button>
            <button className="profile-edit">View archive</button>
          </div>
          </div>
          <h5>{user.fullname}</h5>
        
          <div className="mobile-profile-info">
            <span className="info-profile">{countStories()} post</span>
            <span className="info-profile">{user.following.length} following</span>
            <span className="info-profile">{user.followers.length} followers</span>
          </div>

        </div>
        <div className="profile-menu">
          <button className="opt-menu" onClick={() => setTab(true)}>
            <div
              className="icon"
              dangerouslySetInnerHTML={{
                __html: SvgService.getSvg("post-svg"),
              }}
            />
            <span>POST</span>
          </button>
          <button className="opt-menu"  onClick={() => setTab(false)}>
            {" "}
            <div
              className="icon"
              dangerouslySetInnerHTML={{
                __html: SvgService.getSvg("saved-svg"),
              }}
            />
           SAVED
          </button>
        </div>
        <div className="grid-posts">
          {tab
            ? stories.map((el) => {
                return (
                  <div
                    className="block-story info"
                    key={el._id}
                    onClick={() => {
                      setStoryId(el._id);
                    }}
                  >
                    <img src={el.imgUrl} alt="Story" />

                    {/* <span
                      className="overlay-svg"
                      dangerouslySetInnerHTML={{
                        __html: SvgService.getSvg("lev"),
                      }}
                    /> */}
                  </div>
                );
              })
            : user.saved.map((el) => {
                return (
                  <div
                    className="block-story info"
                    key={el}
                    onClick={() => {
                      setStoryId(el);
                    }}
                  >
                    <img src={loadSimg(el)}/>
                  </div>
                );
              })}
        </div>
      </div>
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
    </div>
  );
}
