import { SvgService } from "../services/svg.service";
import { MenuButton } from "./MenuButtons";
import { useEffect, useState } from "react";
import { saveStory } from "../store/actions/story.actions";
import { FormPost } from "./FormPost";
import { Emoji } from "./buttons/Emoji";
import { CircleImg } from "./buttons/CircleImg";
import { utilService } from "../services/util.service";
import { storyService } from "../services/story.service";
import { UpdateUSer } from "../store/actions/user.actions";

export function StoryDetails({
  selected,
  setSelected,
  onCloseStory,
  user,
  storyId,
}) {
  const [story, setStory] = useState();
  const [post, setPost] = useState("");
  const [emojiPosition, setEmojiPosition] = useState({ x: 0, y: 0 });
  const [save, setSave] = useState(false);

  useEffect(() => {
    getStory();
  }, [storyId]);

  async function getStory() {
    try {
      let stories = await storyService.queryById(storyId);
      setStory(stories);
    } catch (err) {
      console.log(err);
    }
  }

  function calculateTimeDifference(postTime) {
    // Get the current time in milliseconds since epoch
    let now = new Date().getTime();
  
    // Calculate the difference in milliseconds between now and postTime
    let differenceInMilliseconds = now - postTime;
  
    // Convert milliseconds to hours
    let differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
  
    // If the difference is greater than 24 hours, return days ago
    if (differenceInHours > 24) {
      return Math.floor(differenceInHours / 24) + "d";
    }
  
    // If the difference is less than 1 hour, return minutes ago
    if (differenceInHours < 1) {
      return Math.floor(differenceInHours * 60) + "m";
    }
  
    // Otherwise, return hours ago
    return Math.floor(differenceInHours) + "h";
  }

  function postSaved(id) {
    let index = user.saved.indexOf(id);

    if (-1 !== index) {
      user.saved.splice(index, 1);
    } else {
      user.saved.push(id);
    }

    UpdateUSer(user);
    setSave((past) => !past);
  }

  function checkIfSaved(id) {
    return user.saved.indexOf(id) === -1 ? false : true;
  }

  function checkLike() {
    return story.likedBy.find((element) => user._id == element._id) !==
      undefined
      ? true
      : false;
  }

  function checkLikeComment(comment) {
    if (comment.likedBy.length === 0) return false;

    const res = comment.likedBy.findIndex(
      (element) => element._id === user._id
    );
    return res === 0 ? true : false;
  }

  function handleLike(action, commnetId) {
    const newLike = {
      _id: user._id,
      fullname: user.fullname,
      imgUrl: user.imgUrl,
    };
    if (commnetId) {
      let commentIdx = story.comments.findIndex(
        (element) => element.id === commnetId
      );
      if (action) {
        story.comments[commentIdx].likedBy.push(newLike);
      } else {
        story.comments[commentIdx].likedBy = story.comments[
          commentIdx
        ].likedBy.filter((el) => el._id !== user._id);
      }
    } else {
      if (action) {
        story.likedBy.push(newLike);
      } else if (!action) {
        story.likedBy = story.likedBy.filter((el) => el._id !== user._id);
      }
    }
    saveStory(story);
  }

  function handleChange(event) {
    setPost(event.currentTarget.value);
  }

  function onPostSubmit(event) {
    event.preventDefault();
    let obj = {
      id: utilService.makeId(),
      by: { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl },
      txt: post,
      likedBy: [],
      time: new Date().getTime(),
    };
    story.comments.push(obj);
    saveStory(story);
    setPost("");
  }

  function handleSmileClick(ev) {

    setEmojiPosition({ x: ev.screenX, y: ev.screenY });
    setSelected((prev) => !prev);
  }

  if (!story) {
    return <></>;
  }

  return (
    <div className="story-details">
      <button className="story-button"  onClick={onCloseStory}>
      <span  
                  dangerouslySetInnerHTML={{
                    __html: SvgService.getSvg("X"),
                  }}
                />
      </button>
      <div className="story">
        <div className="divide-post">
          <img className="img-story" src={story.imgUrl} ></img>

          
          <div className="coments-story">

              <div className="story-header">
                <div className="story-titlle-detailed">
                  <CircleImg img={user.imgUrl} />
                  <h2>{story.by.fullname}</h2>
                </div>
                <button
                  className="compose-button"
                  dangerouslySetInnerHTML={{
                    __html: SvgService.getSvg("dots"),
                  }}
                />
              </div>

 
            <ul>
            <li className="tilte-block">
                <div className="post-detailed">
                  <CircleImg img={user.imgUrl} />
                  <p>{story.txt}</p>
                </div>
              </li>
              {story.comments.map((commnet) => {
                return (
                  <li key={commnet.id}>
                    <div className="post-list">
                      <div className="storyTitlle">
                        <div className="tilte-block">
                          <CircleImg img={commnet.by.imgUrl} />
                          <h3>{commnet.by.fullname}</h3>
                        </div>

                        {checkLikeComment(commnet) ? (
                          <span
                            onClick={() => handleLike(false, commnet.id)}
                            dangerouslySetInnerHTML={{
                              __html: SvgService.getSvg("like-small"),
                            }}
                          />
                        ) : (
                          <span
                            onClick={() => handleLike(true, commnet.id)}
                            dangerouslySetInnerHTML={{
                              __html: SvgService.getSvg("lev-small"),
                            }}
                          />
                        )}
                      </div>
                      <p>{commnet.txt}
                      </p>
                      <span className="comment-time">{calculateTimeDifference(commnet.time)}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="menu-bar">
              <MenuButton
                postSaved={postSaved}
                checkIfSaved={checkIfSaved}
                handleLike={handleLike}
                checkLike={checkLike}
                story={story}
                user={user}
              />
            </div>
            <div className="story-post">
              <span
                className="img-smile"
                onClick={handleSmileClick}
                dangerouslySetInnerHTML={{
                  __html: SvgService.getSvg("smile2"),
                }}
              />
              {selected ? (
                <Emoji
                  setSelected={setSelected}
                  setPost={setPost}
                  height={250}
                  style={{
                    position: "absolute",
                    left: `${emojiPosition.x}`,
                    bottom: `${emojiPosition.y}` - 680,
                    zIndex: 999,
                  }}
                />
              ) : (
                <></>
              )}

              <FormPost
                onPostSubmit={onPostSubmit}
                setSelected={setSelected}
                handleChange={handleChange}
                post={post}
              ></FormPost>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
