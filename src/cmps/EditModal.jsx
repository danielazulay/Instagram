import { useState } from "react";
import { SvgService } from "../services/svg.service";
import { saveStory } from "../store/actions/story.actions";
import { UploadTxt } from "../cmps/UploadTxt";

export function EditModal({story, openEdit, user }) {
  const [text, setText] = useState("");




  function ontSubmit(event) {
    console.log("before"+JSON.stringify(story))
    event.preventDefault();
    story.txt = text
    saveStory(story);
    openEdit();

    console.log("after"+JSON.stringify(story))
  }

  return (
    <div className="modal-edit">
      <button className="buttom-submit" onClick={openEdit}>
      <span 
            
                  dangerouslySetInnerHTML={{
                    __html: SvgService.getSvg("X"),
                  }}
                />
      </button>
      <div className="model">
        <div className="header">

          <h3 className="tittle-share show">Edit post</h3>
          <button
            id="show-button"
            className={`share-button`}
            onClick={ontSubmit}
          >
            submit
          </button>
        </div>
        <div className="modal-upload">
          
   =

              <div className="form-txt">
              <UploadTxt
                setText={setText}
                text={text}
                user={user}
                url={story.imgUrl}
              />
            </div>
            </div>
          

          
   
          
        </div>
      </div>

  );
}
