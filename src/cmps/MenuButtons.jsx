import { SvgService } from "../services/svg.service";

export function MenuButton({
  checkIfSaved,
  postSaved,
  handleLike,
  checkLike,
  story,
  onOpenStory,
}) {
  return (
    <div>
      <div className="svgMenuLine">
        <div className="svgMenu">
          <div className="menu-buttons">
            {checkLike() ? (
              <span className="black"
                onClick={() => handleLike(false)}
                dangerouslySetInnerHTML={{ __html: SvgService.getSvg("like") }}
              />
            ) : (
              <span className="black"
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
              className="compose-button black"
              dangerouslySetInnerHTML={{ __html: SvgService.getSvg("comment") }}
            />
          </button>

          <span
            className="compose-button black"
            dangerouslySetInnerHTML={{ __html: SvgService.getSvg("send") }}
          />
        </div>
        {checkIfSaved(story._id) ? (
          <span
            dangerouslySetInnerHTML={{ __html: SvgService.getSvg("saved") }}
            onClick={() => postSaved(story._id)}
          />
        ) : (
          <span
            dangerouslySetInnerHTML={{ __html: SvgService.getSvg("save") }}
            onClick={() => postSaved(story._id)}
          />
        )}
      </div>
      <div className="likescount">{story.likedBy.length + " likes"}</div>
    </div>
  );
}
