import { SvgService } from "../services/svg.service";
import { MenuButton } from "./MenuButtons";
import { useState } from "react";
import { saveStory } from "../store/actions/story.actions";
import { FormPost } from "./FormPost";
import { Emoji } from "./buttons/Emoji";
import { CircleImg } from "./buttons/CircleImg";
import { utilService } from "../services/util.service";

export function StoryDetails({
  selected,
  setSelected,
  story,
  onCloseStory,
  user,
  
}) {
  const [post, setPost] = useState("");

  function checkLike() {
    return story.likedBy.find((element) => user._id == element._id) !==
      undefined
      ? true
      : false;
  }

  function checkLikeComment(comment) {
    if(comment.likedBy.length === 0)return false

    const res = comment.likedBy.findIndex((element)=>element._id === user._id)
    console.log(res)
    return res === 0 ? true: false
   
  }

  function handleLike(action, commnetId) {
    const newLike = {
      _id: user._id,
      fullname: user.fullname,
      imgUrl: user.imgUrl,
    };
    if (commnetId) {
      let commentIdx = story.comments.findIndex((element) => element.id === commnetId)
      if (action) {
        story.comments[commentIdx].likedBy.push(newLike);
      } else {
        story.comments[commentIdx].likedBy = story.comments[commentIdx].likedBy.filter((el) => el._id !== user._id);
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
    let obj = { id: utilService.makeId(), by: {_id:user._id,fullname:user.fullname,imgUrl:user.imgUrl }, txt: post ,likedBy:[]};
    story.comments.push(obj);
    saveStory(story);
    setPost("");
  }

  return (
    <div className="story-details">
      <button className="story-button" onClick={onCloseStory}>
        x
      </button>
      <div className="story">
        <div className="divide-post">
          <img className="img-story" src={story.imgUrl}></img>
          <div className="coments-story">
            <div className="story-header">
              <div className="story-titlle-detailed">
                <CircleImg img={story.imgUrl} />
                <h2>{story.by.fullname}</h2>
              </div>

              <button
                className="compose-button"
                dangerouslySetInnerHTML={{ __html: SvgService.getSvg("dots") }}
              />
            </div>

            <ul>
              {story.comments.map((commnet) => {
                console.log("img "+commnet.by.imgUrl)
                return (
                  <li key={commnet.id}>
                    <div className="post-list">
                      <div className="storyTitlle">
                        <CircleImg img={commnet.by.imgUrl} />
                        <h3>{commnet.by.fullname}</h3>

                        {checkLikeComment(commnet) ? (
                          <span
                            onClick={() => handleLike(false, commnet.id)}
                            dangerouslySetInnerHTML={{
                              __html: SvgService.getSvg("like"),
                            }}
                          />
                        ) : (
                          <span
                            onClick={() => handleLike(true, commnet.id)}
                            dangerouslySetInnerHTML={{
                              __html: SvgService.getSvg("lev"),
                            }}
                          />
                        )}
                      </div>
                      <p>{commnet.txt}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="menu-bar">
              <MenuButton
                handleLike={handleLike}
                checkLike={checkLike}
                story={story}
                user={user}
              />
            </div>
            <div className="story-post">
              <span
                className="img-smile"
                onClick={() => setSelected((prev) => !prev)}
                dangerouslySetInnerHTML={{
                  __html: SvgService.getSvg("smile"),
                }}
              />
              {selected ? (
                <Emoji
                setSelected={setSelected}
                  setPost={setPost}
                  height={250}
                  style={{
                    position: "absolute",
                    bottom: "202px",
                    zIndex: 999,
                    left: 860,
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
