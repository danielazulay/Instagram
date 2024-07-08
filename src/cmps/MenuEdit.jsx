import { useEffect, useState } from "react";
import { getActionRemoveStory } from "../store/actions/story.actions";

export function MenuEdit({openEdit,openMenu,onOpenStory,postSaved,checkIfSaved,checkFriend, friendSave, handleMenuEdit, user, story }) {
 
 
    const [friend, setFriend] = useState(checkFriend(story.by._id));
  

  useEffect(() => {
    const isFriend = checkFriend(story.by._id);
    setFriend(isFriend);
  }, [story.by._id, checkFriend]);


  useEffect(() => {
    const isFriend = checkFriend(story.by._id);
    setFriend(isFriend);
  }, [story.by._id, checkFriend]);

  const handleFriendToggle = () => {
    friendSave(story.by._id);
    setFriend(prev => !prev);
  };

  function handleDelete(){
    getActionRemoveStory(story._id)
    handleMenuEdit()
  }

  function handleSaveFavorite(){
    postSaved(story._id)
    handleMenuEdit()
  }


  
  function handleOpenPost(){
    handleMenuEdit()
    onOpenStory(story._id)
  }

  return (
    <div className="menu-model">
      <div className="model">
        <div className="modal-list">
          <ul>
            {story.by._id === user._id ? (
              <>
              <li className="topradius" onClick={handleDelete}>Delete</li>
              <li onClick={()=>{openEdit() 
              openMenu()}}>Edit</li>
              </>
            ) : friend ? (
              <li className="topradius"  onClick={handleFriendToggle}>Unfollow</li>
            ) : (
              <li className="topradius"  onClick={handleFriendToggle}>Follow</li>
            )}
            {checkIfSaved(story._id) ?<li onClick={handleSaveFavorite}>Remove from Favorites</li> :<li onClick={handleSaveFavorite}>Add to Favorites</li>}

            <li onClick={handleOpenPost}>Open the post</li>
            <li className="bottomradius" onClick={handleMenuEdit}>Cancel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
