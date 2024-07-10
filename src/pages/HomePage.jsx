import { useEffect } from "react";


import { SideSugestion } from "../cmps/SideSugestion";
import { StoryList } from "../cmps/StoryList";
import { useSelector } from "react-redux";
import { loadStories } from "../store/actions/story.actions";
import { UpdateFriend, UpdateUSer, loadFriends } from "../store/actions/user.actions";


export function HomePage() {
  const stories = useSelector((storeState) => storeState.storyModule.stories);
  const user = useSelector((userSate) => userSate.userModule.user);
  const friends = useSelector((userSate) => userSate.userModule.users);

  useEffect(  () => {
   
     onLoadStories();
     onLoadFriends()
     
  }, [stories]);
  


  function friendSave(friend_id){

    let index = user.following.indexOf(friend_id)
 
    let friend = friends.filter((el)=>friend_id ===el._id )[0]

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

  function checkFriend(id){
    return user.following.indexOf(id) !== -1 ? true : false
}

  function onLoadStories() {
    loadStories();
  }

  function onLoadFriends() {
    loadFriends()
  }


  if(!stories) return <>...loading</>
  return (

    <div className="home-page">
         
      <div className="story-list">
        <StoryList friendSave={friendSave} checkFriend={checkFriend} stories={stories} user={user}  />
      </div>
      <div className="side-sugestion">
        <SideSugestion friendSave={friendSave} checkFriend={checkFriend}/>
        
      </div> 
    </div>

  );
}
