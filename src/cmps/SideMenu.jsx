import { Link, NavLink } from "react-router-dom";
import { SvgService } from "../services/svg.service";
// import { saveStory } from "../store/actions/story.actions";
import { CircleImg } from "./buttons/CircleImg";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Create } from "../pages/Create";
import { Friend } from "./Friend";
import { userService } from "../services/user.service";
import { UpdateUSer } from "../store/actions/user.actions";

export function SideMenu() {

  const user = useSelector((userSate) => userSate.userModule.user);

  const friends = useSelector((userSate) => userSate.userModule.users);
  const [search, setSearch] = useState(false);
  const [create, setCreate] = useState(false);
  const [searchTxt, SetSearchTxt] = useState("");

  const searchBarRef = useRef(null);

  function checkFriend(id){
    return user.following.indexOf(id) !== -1 ? true : false
}

  function friendSave(friend_id){

    let index = user.following.indexOf(friend_id)

    if(-1 !== index){
    user.following.splice(index,1);

    }else{
  
      user.following.push(friend_id);

    }

    userService.updateLocalUserFields(user)


    UpdateUSer(user);
  }

  function handleSeach(event) {
    SetSearchTxt(event.currentTarget.value);
  }

  function onCloseCreate() {
    setCreate((status) => !status);
  }

  function setSearchBar() {
    setSearch((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      console.log(event.target);
      if (searchBarRef && !searchBarRef.current.contains(event.target)) {
        setSearch(false);
      }
    }

    if (search) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search]);

  return (
    <div className={`side-menu`}>
      <div className="top-menu">
        <span
          className="heart-top-menu"
          dangerouslySetInnerHTML={{
            __html: SvgService.getSvg("instagran"),
          }}
        />
        <form className="search-menu heart-top-menu">
          <input placeholder="Search" type="text"></input>
        </form>
        <span
          className="heart-top-menu"
          dangerouslySetInnerHTML={{ __html: SvgService.getSvg("lev") }}
        />
      </div>
      <div className="instagran-logo icon">
        <span
          dangerouslySetInnerHTML={{
            __html: SvgService.getSvg("instagran"),
          }}
        />

        <Link to="/">
          <span
            className="small black icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("int"),
            }}
          />
        </Link>
      </div>

      <ul className="menu">
        <NavLink to={`/Instagram`} className="black">
          <li className="list-menu">
            <div
              className={`icon`}
              dangerouslySetInnerHTML={{
                __html: SvgService.getSvg("home"),
              }}
            />
            <span className="btn-name">Home</span>
          </li>
        </NavLink>

        <li className="list-menu" onClick={setSearchBar}>
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("search"),
            }}
          />
          <span className="btn-name">Search</span>
        </li>

        <li className="list-menu">
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

        <NavLink to={`/Instagram/${user.userName}`}>
          <li className="list-menu">
            <CircleImg img={user.imgUrl} width={24} height={24} />
            <span className="btn-name">Profile</span>
          </li>
          </NavLink>
      </ul>

      <div className="bottom-menu">
        <ol className="bottom-bts">
          <NavLink to={`/Instagram`}>
            <li className="list-menu">
              <div
                className="icon"
                dangerouslySetInnerHTML={{
                  __html: SvgService.getSvg("home"),
                }}
              />
              <span className="btn-name">Home</span>
            </li>
          </NavLink>

          <li className="list-menu">
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

          <NavLink to={`/Instagram/${user.userName}`}>
            <li className=".list-menu">
              <CircleImg img={user.imgUrl} height={24} width={24} />
              <span className="btn-name ">Profile</span>
            </li>
          </NavLink>
        </ol>
      </div>
      <div
        className={`search-bar ${search ? "show" : "hide"}`}
        ref={searchBarRef}
      >
        <div className="header-search">
          <span className="search-title">Search</span>
          <div className="search-input">
            <form>
              <input
                type="text"
                placeholder="Search"
                value={searchTxt}
                onChange={handleSeach}
              ></input>
              <div
              onClick={()=>SetSearchTxt("")}
                className="exclude"
                dangerouslySetInnerHTML={{
                  __html: SvgService.getSvg("clean"),
                }}
              />
            </form>
          </div>
          <div className={`recent-list`}>
          <span>Recent</span>
          {searchTxt && (
            <ul>
              {friends
                .filter((el) =>
                  el.fullname.toLowerCase().includes(searchTxt.toLowerCase()) && !checkFriend(el._id)
                )
                .map((firend) => (
                  <li key={firend._id}>
                    <Friend user={firend}  friendSave={friendSave} checkFriend={checkFriend}></Friend>
                  </li>
                ))}
            </ul>
          )}
        </div>
        </div>

      </div>

      {create && <Create onCloseCreate={onCloseCreate} user={user} />}
    </div>
  );
}
