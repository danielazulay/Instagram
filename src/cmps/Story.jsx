import { utilService } from "../services/util.service";
import { useState } from "react";
import { MenuButton } from "./MenuButtons";

import { Emoji } from "./buttons/Emoji";
import { SvgService } from "../services/svg.service";
import { FormPost } from "./FormPost";
import { saveStory } from "../store/actions/story.actions";
import { CircleImg } from "./buttons/CircleImg";

export function Story({ story, user, onOpenStory }) {
  let [spand, setSpand] = useState(false);
  const [selected, setSelected] = useState(false);
  const [post, setPost] = useState("");

  function checkLike() {
    return story.likedBy.find((element) => user._id == element._id) !==
      undefined
      ? true
      : false;
  }

  function handleLike(action) {
    const newLike = {
      _id: user._id,
      fullname: user.fullname,
      imgUrl: user.imgUrl,
    };

    if (action) {
      story.likedBy.push(newLike);
    } else if (!action) {
      story.likedBy = story.likedBy.filter((el) => el._id !== user._id);
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

  function expand() {
    setSpand((spand) => !spand);
  }

  return (
    <div className="story-block">
      <div className="story-titlle">
        <CircleImg img={story.imgUrl} />
        <h2>{story.by.fullname}</h2>
      </div>

      <img className="story-img" src={story.imgUrl} alt="blah blah" />
      <MenuButton handleLike={handleLike} checkLike={checkLike} story={story} user={user} onOpenStory={onOpenStory} />

      <h5 className="story-text">
        <b>{story.by.fullname+" "}</b>
        {!spand ? utilService.resumeText(story.txt)  : story.txt}
        <span
          style={{ visibility: spand ? "hidden" : "visible" }}
          onClick={expand}
        >
          <h3> ...more</h3>
        </span>
      </h5>
     
        <a onClick={() => onOpenStory(story)}  className="vill-all">
          <span  to={`/${story._id}`}> 
            View all {story.comments.length} comments
          </span>
        </a>
        <div className="coment-block">
        <FormPost
          onPostSubmit={onPostSubmit}
          setSelected={setSelected}
          handleChange={handleChange}
          post={post}
        />
        <span
          className="emoji"
          onClick={() => setSelected((prev) => !prev)}
          dangerouslySetInnerHTML={{
            __html: SvgService.getSvg("smile"),
          }}
        />
        {selected ? (
          <Emoji
            setPost={setPost}
            height={250}
            style={{
              position: "absolute",
              bottom: "130px",
              zIndex: 900,
              left: 800,
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
