import { Link } from "react-router-dom";
import { SvgService } from "../services/svg.service";
// import { saveStory } from "../store/actions/story.actions";
import { CircleImg } from "./buttons/CircleImg";


export function SideMenu({user,onCloseCreate}) {

  return (
    <div className="side-menu">
      <div
        className="instagran-logo"
        dangerouslySetInnerHTML={{
          __html: SvgService.getSvg("instagran"),
        }}
      />
      <ul className="menu">

        <li className="list-menu gray">
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("home"),
            }}
          />
          Home
        </li>

  
        <li className="list-menu gray">
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("search"),
            }}
          />
          Search
        </li>

        <li className="list-menu gray">
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("message"),
            }}
          />
          Messages
        </li>
        <li className="list-menu gray"
        onClick={onCloseCreate}
        >
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("create"),
            }}
          />
          Create
          </li>

        <Link to={`/profile`}>
        <li className="list-menu gray">
        <CircleImg img={user.imgUrl}/>
          Profile
        </li>
        </Link>

      </ul>
    </div>
  );
}
