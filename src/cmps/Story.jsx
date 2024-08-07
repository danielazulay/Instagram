import { utilService } from "../services/util.service";
import { useState } from "react";
import { MenuButton } from "./MenuButtons";
import { Emoji } from "./buttons/Emoji";
import { SvgService } from "../services/svg.service";
import { FormPost } from "./FormPost";
import { CircleImg } from "./buttons/CircleImg";
import { UpdateUSer } from "../store/actions/user.actions";
import { saveStory } from "../store/actions/story.actions";
import { MenuEdit } from "./MenuEdit";
import { EditModal } from "./EditModal";
import { StoryDetails } from "./StoryDetails";


export function Story({friendSave,checkFriend, story, user }) {
  const [spand, setSpand] = useState(false);
  const [post, setPost] = useState("");
  const [selected, setSelected] = useState(false);
  const [emojiPosition, setEmojiPosition] = useState({x :0,y :0})
  const [save,setSave] =useState(false)
  const [menu,setMenu] =useState(false)
  const [edit,setEdit] =useState(false)
  const [storyId, setStoryId] = useState(null);



  function onCloseStory() {
    setStoryId(null);
  }

  function onOpenStory(story) {
    setStoryId(story);
  }



  function postSaved(id) {

    let index = user.saved.indexOf(id)

    if(-1 !== index){
    user.saved.splice(index,1);
    }else{
      user.saved.push(id);
    }

    UpdateUSer(user);
    setSave((past)=>!past)

  }

  
  function openMenu(){
    setMenu((past)=>!past)
  }


  function openEdit(){
    setEdit((past)=>!past)
  }

  function checkIfSaved(id) {
    return user.saved.indexOf(id) ===-1 ? false : true;
  }

  function checkLike() {

    return story.likedBy.find((element) => user._id == element._id) !==
      undefined
      ? true
      : false;
  }


  function handleLike(action) {
    const newLike = {
      _id: user._id,
      fullname: user.fullname,
      imgUrl: user.imgUrl,
    };
    if (action) {

      story.likedBy.push(newLike);
    } else  {
     
      story.likedBy = story.likedBy.filter((el) => el._id !== user._id);
    }

    saveStory(story);
  }

  function handleChange(event) {
    setPost(event.currentTarget.value);
  }

  function onPostSubmit(event) {
    event.preventDefault();
    let obj = {
      id: utilService.makeId(),
      by: { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl },
      txt: post,
      likedBy: [],
    };
    story.comments.push(obj);
    saveStory(story);
    setPost("");
  }

  function expand() {
    setSpand((spand) => !spand);
  }

  function handleSmileClick (ev){
    setEmojiPosition({ x: ev.screenX, y: ev.screenY });
    setSelected(prev => !prev);
  }

  function handleMenuEdit(){
    setMenu((prev)=>!prev)
  }

  return (
    <div className="story-block">
      <div className="story-titlle">
        <CircleImg img={story.by.imgUrl} />
        <h2>{story.by.fullname}</h2>


        <button  className="compose-button"
        onClick={handleMenuEdit}
         dangerouslySetInnerHTML={{
        __html: SvgService.getSvg("dots"),}}/>
       
      </div>

      <img className="story-img" src={story.imgUrl} alt="img" />
      <MenuButton
      postSaved={postSaved}
      checkIfSaved={checkIfSaved}
        handleLike={handleLike}
        checkLike={checkLike}
        story={story}
        user={user}
        onOpenStory={onOpenStory}
      />

      <div className="story-text">        
        <pre><b className="gray">{story.by.fullname + " "}</b>{story.txt.length< 112? story.txt :  (!spand  ? utilService.resumeText(story.txt):story.txt)}</pre> 
        {story.txt.length > 112? <span
          style={{ visibility: spand ? "hidden" : "visible" }}
          onClick={expand}>
          <span> ...more</span>
        </span>:<></>}
      </div>

      <a onClick={() => onOpenStory(story._id)} className="vill-all">
        <span to={`/${story._id}`}>
          View all {story.comments.length} comments
        </span>
      </a>
      <div className="coment-block">
        <FormPost
          onPostSubmit={onPostSubmit}
          setSelected={setSelected}
          handleChange={handleChange}
          post={post}
        />
        <span
          className="emoji mini"
          onClick={handleSmileClick}
          dangerouslySetInnerHTML={{
            __html: SvgService.getSvg("smile"),
           
          }}

        />
          
        {selected ? (
       <Emoji
       setSelected={setSelected}
         setPost={setPost}
         height={250}
         style={{
           position: "fixed",
           left: `${emojiPosition.x}`,
           top: `${emojiPosition.y}`-135,
           zIndex:999 ,
         }}
       />
        ) : (
          <></>
        )}
        {edit&& <EditModal openEdit={openEdit} openMenu={openMenu} story={story} user={user}/>}
        {menu&&<MenuEdit openMenu={openMenu}  openEdit={openEdit} onOpenStory={onOpenStory} postSaved={postSaved} checkIfSaved={checkIfSaved} checkFriend={checkFriend} friendSave={friendSave} handleMenuEdit={handleMenuEdit} user={user} story={story}/>}
     
         {storyId && (
        <StoryDetails
        openEdit={openEdit} 
        openMenu={openMenu}
        friendSave={friendSave}
        checkFriend={checkFriend}
          storyId={storyId}
          user={user}
          onCloseStory={onCloseStory}
        />
         )}
      </div>


    </div>
  );
}
