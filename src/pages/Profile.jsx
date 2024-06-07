import { useSelector } from "react-redux";
import { CircleImg } from "../cmps/buttons/CircleImg";
import { SvgService } from "../services/svg.service";
import { Create } from "./Create";
import { useState } from "react";

export function Profile() {
  const user = useSelector((userSate) => userSate.userModule.user);
  const stories = useSelector((storeState) => storeState.storyModule.stories);
  let [tab,setTab] = useState(true)


  function countStories() {


    let storyCount = stories.filter((el) => el.by._id === user._id);

    return storyCount.length;
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
        <div className="profile-menu">
          <button onClick={()=>setTab((prev)=>!prev)}>
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("post-svg"),
            }}
          />
            POST</button>
            <button onClick={()=>setTab((prev)=>{!prev})}> <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("saved-svg"),
            }}
          />
            SAVED</button>
        </div>
        <div className="grid-posts">
            {tab?stories.map((el)=>{
                return(
                    <div className="block-story" key={el._id}>
                    <img src={el.imgUrl}></img>
                    </div>
                )
            }):<></>}
        </div>
 
      </div>
            
    </div>
  );
}
