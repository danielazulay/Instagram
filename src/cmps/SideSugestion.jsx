import { useEffect, useState } from "react";
import { CircleImg } from "./buttons/CircleImg";
import { useSelector } from "react-redux";
import { userService } from "../services/user.service";


export function SideSugestion({friendSave,btnFriend}){
    const user = useSelector((userSate) => userSate.userModule.user);

    const [friend, setFriends] = useState([]);
    
    function checkFriend(id){
        return user.following.indexOf(id) !== -1 ? true : false
    }

    useEffect(() => {
       let friends = userService.loadFrinds();
       console.log(friends)

       setFriends(friends)
    }, []); 


    return(
        <div className="sugestion-container">
    
            <div className="sugestion-loginuser">
            <CircleImg  img={user.imgUrl}  height={44} width={44} />
            <div className="login-user">
              <h6 >{user.email}</h6>
                <h6 className="gray">{user.fullname}</h6>
                </div>
            </div>
            <h5 className="suggestion-title gray">Suggested for you</h5>
            {friend.map((el, index) => (
        
                <div className="sugestions" key={index}>
        
                <CircleImg  img={el.imgUrl.medium}  height={44} width={44} />
                <div className="sugestion-name">
                <h6>{el.userName+" "+el.fullname}</h6>
                <h6 className="gray">Suggested for you</h6>

                </div>
                <button className="button-follow" onClick={()=>friendSave(el._id)}>{checkFriend(el._id) ?`Unfollow`:"Follow"}</button>
                </div>

            ))}
        </div>
    )
}