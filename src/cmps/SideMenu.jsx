import { Link } from "react-router-dom";
import { SvgService } from "../services/svg.service";
// import { saveStory } from "../store/actions/story.actions";
import { CircleImg } from "./buttons/CircleImg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Create } from "../pages/Create";



export function SideMenu() {



  const user = useSelector((userSate) => userSate.userModule.user);

  const [create, setCreate] = useState(false);

  

  function onCloseCreate(){
      setCreate((status)=>!status)
    }
  

  return (
    <div className="side-menu">
      <div
        className="instagran-logo"
        dangerouslySetInnerHTML={{
          __html: SvgService.getSvg("instagran"),
        }}
      />
      <ul className="menu">
        <Link to={`/`}>
        <li className="list-menu gray">
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("home"),
            }}
          />
          Home
        </li>
        </Link>
  
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
     
      { create && <Create onCloseCreate={onCloseCreate}  user={user}  />}
    </div>
  );
}
