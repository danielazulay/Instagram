import { utilService } from "../services/util.service";
import { useState } from "react";
import { MenuButton } from "./MenuButtons";

import { Emoji } from "./Emoji";
import { SvgService } from "../services/svg.service";
import { FormPost } from "./FormPost";
import { saveStory } from "../store/actions/story.actions";
import { CircleImg } from "./CircleImg";

export function Story({ story, user, onOpenStory }) {
  let [spand, setSpand] = useState(false);
  const [selected, setSelected] = useState(false);
  const [post, setPost] = useState("");

  function handleChange(event) {
    setPost(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let obj = { id: Math.random(1 - 100), by: { ...user }, txt: post };
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
      <MenuButton story={story} user={user} onOpenStory={onOpenStory} />

      <h5 className="story-text">
        {!spand ? utilService.resumeText(story.txt) + "... " : story.txt}
        <span
          style={{ visibility: spand ? "hidden" : "visible" }}
          onClick={expand}
        >
          more
        </span>
      </h5>
      <div className="coment-block">
        <a onClick={() => onOpenStory(story)}>
          <span to={`/${story._id}`}>
            View all {story.comments.length} comments
          </span>
        </a>

        <FormPost
          handleSubmit={handleSubmit}
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
              bottom: "420px",
              zIndex: 900,
              left: 800,
            }}
          />
        ) : (
          <></>
        )}
      </div>
      <hr></hr>
    </div>
  );
}
