import { SvgService } from "../services/svg.service";
import { saveStory } from "../store/actions/story.actions";
import { CircleImg } from "./buttons/CircleImg";


export function SideMenu({user}) {

function addStory(){
  const story = {
    "txt": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
    "imgUrl": `https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg`,
    "by": user
    ,
    "loc": {
        "lat": 11.11 ,
        "lng": 22.22,
        "name": `Location`
    },
    "comments": [],
    "likedBy": [],
    "tags": []
}

saveStory(story)
console.log("post",story)

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
        onClick={addStory}
        >
          <div
            className="icon"
            dangerouslySetInnerHTML={{
              __html: SvgService.getSvg("create"),
            }}
          />
          Create
        </li>

        <li className="list-menu gray">
        <CircleImg img={user.imgUrl}/>
          Profile
        </li>

      </ul>
    </div>
  );
}
