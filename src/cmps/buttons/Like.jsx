import { SvgService } from "../../services/svg.service";


export function Like({ checkLike,handleLike }) {


  return (
    <>
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
    </>
  );
}
