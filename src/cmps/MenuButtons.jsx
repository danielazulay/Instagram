import { SvgService } from "../services/svg.service";




export function MenuButton({ handleLike,checkLike,story,  onOpenStory}) {
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
          <button className="commnet-button" onClick={() => onOpenStory(story)}>
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
        <span dangerouslySetInnerHTML={{ __html: SvgService.getSvg("save") }} />
      </div>
      <div className="likescount">{story.likedBy.length + " likes"}</div>
    </div>
  );
}
