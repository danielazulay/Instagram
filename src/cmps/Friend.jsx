import { NavLink } from "react-router-dom";
import { CircleImg } from "./buttons/CircleImg";


export function Friend({user,txt,friendSave,checkFriend}){

    return(
        <section className="Friends">
              <div className="sugestions">
        
        <CircleImg  img={user.imgUrl}  height={44} width={44} />
        <div className="sugestion-name">
        <NavLink to={`/Instagram/${user.userName}`}>
        <h6 className="name">{user.fullname}</h6>
        </NavLink>
        <h6 className="gray">{txt?txt :user.following.length} following</h6>

        </div>
        <button className="button-follow" onClick={()=>friendSave(user._id)}>{checkFriend(user._id)?`Unfollow`:`Follow`}</button>
    
        </div>
        </section>
    )
}