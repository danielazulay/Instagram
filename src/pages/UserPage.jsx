import { useSelector } from "react-redux";

import { useParams } from 'react-router-dom';
import { UpdateFriend, UpdateUSer } from "../store/actions/user.actions";
import { Friend } from "../cmps/Friend";

export function Profile() {
  const users = useSelector((userSate) => userSate.userModule.users);
  const user= useSelector((userSate) => userSate.userModule.user);

  let { searchTxt } = useParams();


  function checkFriend(id){
    return user.following.indexOf(id) !== -1 ? true : false
}

function friendSave(friend_id){

  let index = user.following.indexOf(friend_id)
  let friend = users.filter((el)=>friend_id ===el._id )[0]
  
  if(-1 !== index){
  user.following.splice(index,1);
  let userIndex =   friend.followers.indexOf(user._id)

  friend.followers.splice(userIndex,1);
  }else{

    user.following.push(friend_id);
    friend.followers.push(user._id)

  }
  UpdateFriend(friend);
  UpdateUSer(user);
}


  return (
    <div className="profile-page">
               <div className={`recent-list`}>
          <span>Recent</span>
          {searchTxt && (
            <ul>
              {users
                .filter((el) =>
                  el.fullname.toLowerCase().includes(searchTxt.toLowerCase()) && !checkFriend(el._id)
                )
                .map((friend) => (
                  <li key={friend._id}>
                    <Friend user={friend}  friendSave={friendSave} checkFriend={checkFriend}></Friend>
                  </li>
                ))}
            </ul>
          )}
        </div>
    </div>
  );
}
