import { SvgService } from "../services/svg.service";
import { MenuButton } from "./MenuButtons";
import { useState } from "react";
import { saveStory } from "../store/actions/story.actions";
import { FormPost } from "./FormPost";
import { Emoji } from "./Emoji";

export function StoryDetails({
  selected,
  setSelected,
  story,
  onCloseStory,
  user,
}) {
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

  return (
    <div className="story-details">
      <button className="story-button" onClick={onCloseStory}>
        x
      </button>
      <div className="story">
        <div className="divide-post">
          <img className="img-story" src={story.imgUrl}></img>
          <div className="coments-story">
            <div className="story-title-button">
              <div className="story-titlle-detailed">
                <img className="logo" src={story.imgUrl} />
                <h2>{story.by.fullname}</h2>
              </div>

              <button
                className="compose-button"
                dangerouslySetInnerHTML={{ __html: SvgService.getSvg("dots") }}
              />
            </div>
            <hr></hr>
            <ul>
              {story.comments.map((post) => {
                return (
                  <li key={post.id}>
                    <div className="post-list">
                      <div className="storyTitlle">
                        <img className="logo " src={post.by.imgUrl}></img>
                        <h3>{post.by.fullname}</h3>
                        <span
                          className="love"
                          dangerouslySetInnerHTML={{
                            __html: SvgService.getSvg("love"),
                          }}
                        />
                      </div>
                      <p>{post.txt}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <hr></hr>
            <MenuButton story={story} user={user} />
            <hr></hr>
            <div className="story-post">
              <div>
                <span
                  className="img-smile"
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
                      zIndex: 999,
                      left: 650,
                    }}
                  />
                ) : (
                  <></>
                )}
              </div>
              <FormPost
                handleSubmit={handleSubmit}
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
