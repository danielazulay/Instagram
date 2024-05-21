// import { useEffect, useState } from "react";

// import { SvgService } from "../services/svg.service";
// import { saveStory } from "../store/actions/story.actions";
import { utilService } from "../services/util.service";
import { useState } from "react";
import { MenuButton } from "./MenuButtons";
import {ButtonPost} from "../cmps/ButtonPost"
import { Emoji } from "./Emoji";
// import { useState,useEffect } from "react";
// import { userService } from "../services/user.service";

export function Story({ selected, story, user,onOpenStory}) {

  let [spand, setSpand] = useState(false)

  const [post, setPost] = useState("");
  
  function expand(){
    setSpand(spand => !spand)
  }
  // function handleLike(action) {
  //   const newLike = {
  //     _id: user._id,
  //     fullname: user.fullname,
  //     imgUrl: user.imgUrl,
  //   };

  //   if (action) {
  //     story.likedBy.push(newLike);
  //   } else if (!action) {
  //     story.likedBy = story.likedBy.filter((el) => el._id !== user._id);
  //   }
  //   saveStory(story);
  // }

  return (
    <div>
      <div className="storyTitlle">      <img className="logo" src={story.imgUrl}/>
      <h2>{story.by.fullname}</h2></div>

      <img className="story-img" src={story.imgUrl} alt="blah blah" />
      <MenuButton  story={story} user={user} onOpenStory={onOpenStory}/>
      {/* <div className="svgMenuLine">
      <div className="svgMenu">
        <div>
        {checkLike() ? (
          <span
            onClick={() => handleLike(false)}
            dangerouslySetInnerHTML={{ __html: SvgService.getSvg("like") }}
          />
          
        ) : (
          <span
            onClick={() => handleLike(true)}
            dangerouslySetInnerHTML={{ __html: SvgService.getSvg("lev") }}
          />
        )}

        </div>
       <button className="commnet-button" onClick={()=>onOpenStory(story)}><span to={`/${story._id}`} className="compose-button"
           dangerouslySetInnerHTML={{ __html: SvgService.getSvg("comment") }}/>
        </button> 

          <span  className="compose-button"
           dangerouslySetInnerHTML={{ __html: SvgService.getSvg("send") }}/>


      </div>
      <span
          // onClick={handleLike}
          dangerouslySetInnerHTML={{ __html: SvgService.getSvg("save") }}
        />  

      </div>
      <div className="likescount">
          {story.likedBy.length +" Likes"}
          </div> */}


      <h5 className="story-text">{!spand ? utilService.resumeText(story.txt)+"... " : story.txt}<span style={{ visibility: spand? 'hidden' : 'visible' }} onClick={expand}>more</span></h5>
      <div className="coment-post">
      <a  onClick={()=>onOpenStory(story)}><span to={`/${story._id}`}>View all {story.comments.length} comments</span></a>
      <input type="text" placeholder="Add a comment..."></input><ButtonPost/>
      
      </div>
      <hr></hr>
    </div>
  );
}
