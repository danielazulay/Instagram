import { useSelector } from "react-redux";
import { SvgService } from "../services/svg.service";
import { UpdateUSer } from "../store/actions/user.actions";

export function MenuButton({ handleLike, checkLike, story, onOpenStory }) {
  const user = useSelector((userSate) => userSate.userModule.user);

  function saveStory(id) {

    user.saved.push(id);
    UpdateUSer(user);

  }
  console.log(user)
  return (
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
          <button
            className="commnet-button"
            onClick={() => onOpenStory(story._id)}
          >
            <span
              to={`/${story._id}`}
              className="compose-button"
              dangerouslySetInnerHTML={{ __html: SvgService.getSvg("comment") }}
            />
          </button>

          <span
            className="compose-button"
            dangerouslySetInnerHTML={{ __html: SvgService.getSvg("send") }}
          />
        </div>
        <span  
          dangerouslySetInnerHTML={{ __html: SvgService.getSvg("save") }}
          onClick={() => saveStory(story._id)}
        />
      </div>
      <div className="likescount">{story.likedBy.length + " likes"}</div>
    </div>
  );
}
