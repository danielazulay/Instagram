import {  NavLink } from "react-router-dom";
import { SvgService } from "../services/svg.service";
// import { saveStory } from "../store/actions/story.actions";
import { CircleImg } from "./buttons/CircleImg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Create } from "../pages/Create";


export function SideMenu() {
  const user = useSelector((userSate) => userSate.userModule.user);

  const [create, setCreate] = useState(false);

  function onCloseCreate() {
    setCreate((status) => !status);
  }

  return (
    <div className="side-menu">
      <div className="top-menu">
        <span
          dangerouslySetInnerHTML={{
            __html: SvgService.getSvg("instagran"),
          }}
        />
        <form>
          <input type="text"></input>
        </form>
        <span dangerouslySetInnerHTML={{ __html: SvgService.getSvg("lev") }} />
      </div>

      <div
        className="instagran-logo icon"
        dangerouslySetInnerHTML={{
          __html: SvgService.getSvg("instagran"),
        }}
      />
      <ul className="menu">
        <NavLink to={`/`} className="black" >
          <li className="list-menu  icon">
            <div
              className="icon"
              dangerouslySetInnerHTML={{
                __html: SvgService.getSvg("home"),
              }}
            />
            <span className="btn-name">Home</span>
          </li>
        </NavLink>

        <li className="list-menu icon">
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("search"),
            }}
          />
          <span className="btn-name">Search</span>
        </li>

        <li className="list-menu icon">
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("message"),
            }}
          />
          <span className="btn-name">Messages</span>
        </li>
        <li className="list-menu " onClick={onCloseCreate}>
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("create"),
            }}
          />
          <span className="btn-name">Create</span>
        </li>

        <NavLink to={`/profile`}>
          <li className="list-menu">
            <CircleImg img={user.imgUrl} />
            <span className="btn-name">Profile</span>
          </li>
        </NavLink>
      </ul>

      <div className="bottom-menu">
        <ol className="bottom-bts">
          <NavLink to={`/`}>
            <li className="list-menu icon">
              <div
                className="icon"
                dangerouslySetInnerHTML={{
                  __html: SvgService.getSvg("home"),
                }}
              />
              <span className="btn-name">Home</span>
            </li>
          </NavLink>

          <li className="list-menu icon">
            <div
              className="icon"
              dangerouslySetInnerHTML={{
                __html: SvgService.getSvg("search"),
              }}
            />
            <span className="btn-name">Search</span>
          </li>

          <li className="list-menu icon">
            <div
              className="icon"
              dangerouslySetInnerHTML={{
                __html: SvgService.getSvg("message"),
              }}
            />
            <span className="btn-name">Messages</span>
          </li>
          <li className="list-menu" onClick={onCloseCreate}>
            <div
              className="icon"
              dangerouslySetInnerHTML={{
                __html: SvgService.getSvg("create"),
              }}
            />
            <span className="btn-name">Create</span>
          </li>

          <NavLink to={`/profile`} >
            <li className=".list-menu" >
              <CircleImg img={user.imgUrl} />
              <span className="btn-name ">Profile</span>
            </li>
          </NavLink>
        </ol>
      </div>

      {create && <Create  onCloseCreate={onCloseCreate} user={user} />}
    </div>
  );
}
