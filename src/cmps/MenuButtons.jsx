import { SvgService } from "../services/svg.service";
import { saveStory } from "../store/actions/story.actions";



export function MenuButton({story,user,onOpenStory}){


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
        } else if (!action) {
          story.likedBy = story.likedBy.filter((el) => el._id !== user._id);
        }
        saveStory(story);
      }

return(
<div>
<div className="svgMenuLine">
      <div className="svgMenu">
        <div className="menu-buttons">
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
          </div>

          </div>
  
)
}