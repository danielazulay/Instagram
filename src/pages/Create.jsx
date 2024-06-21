import { useState } from "react";
import { SvgService } from "../services/svg.service";
import { saveStory } from "../store/actions/story.actions";
import { UploadTxt } from "../cmps/UploadTxt";
import { ImgUploader } from "../cmps/ImgUploader";

export function Create({ onCloseCreate, user }) {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(false);

  // function handleChange(event) {
  //   setUrl(event.currentTarget.value);
  // }

  function changePage() {
    setPage((status) => !status);
  }

  function onUploaded(imgUrl) {
    setUrl(imgUrl);
  }

  function ontSubmit(event) {
    event.preventDefault();
    const story = {
      by: { fullname: user.fullname, imgUrl: user.imgUrl, _id: user._id },
      comments: [],
      imgUrl: url,
      likedBy: [],
      loc: {
        lat: 11.11,
        lng: 22.22,
        name: `Location`,
      },
      tags: [],
      txt: text,
    };
    saveStory(story);
    onCloseCreate();
  }

  return (
    <div className="profile-model">
      <button className="create-button" onClick={onCloseCreate}>
        x
      </button>
      <div className="model">
        <div className="header">
          <button
            id="show-button"
            className={`back-button ${!page ? "hide" : ""}`}
            onClick={() => setPage()}
          >
            <span
              className="emoji"
              dangerouslySetInnerHTML={{
                __html: SvgService.getSvg("back"),
              }}
            />
          </button>
          <h3 className="tittle-share show">Create new post</h3>
          <button
            id="show-button"
            className={`share-button ${!page ? "hide" : ""}`}
            onClick={ontSubmit}
          >
            share
          </button>
        </div>
        <div className="modal-upload">
          {!page && (
            <div className="form-img">
              {/* <UploadImg
              setUrl={setUrl}
              changePage={changePage}
              handleChange={handleChange}
              url={url}
            /> */}
              <div
                className="icon-upload"
                dangerouslySetInnerHTML={{
                  __html: SvgService.getSvg("upload"),
                }}
              />
              <h3>Drag photos and videos here</h3>
              <ImgUploader changePage={changePage} onUploaded={onUploaded} />
            </div>
          )}

          {page && (
            <div className="form-txt">
              <UploadTxt
                setText={setText}
                text={text}
                user={user}
                setPage={setPage}
                url={url}
              />{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
