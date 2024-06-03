// import { useState } from "react";
// import { SvgService } from "../services/svg.service";
// import { saveStory } from "../store/actions/story.actions";
// import { utilService } from "../services/util.service";
// import { CircleImg } from "../cmps/buttons/CircleImg";

// export function CreateShare({ onCloseCreate, user }) {
//   const [value, setValue] = useState("");

//   function handleChange(event) {
//     setValue(event.currentTarget.value);
//   }

// //   function ontSubmit(event) {
// //     console.log(value);
// //     event.preventDefault();
// //     const story = {
// //       by: { fullname: user.fullname, imgUrl: user.imgUrl, _id: user._id },
// //       comments: [],
// //       imgUrl: value,
// //       likedBy: [],
// //       loc: {
// //         lat: 11.11,
// //         lng: 22.22,
// //         name: `Location`,
// //       },
// //       tags: [],
// //       txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
// //     };
// //     console.log(story);
// //     saveStory(story);
// //   }

//   return (
//     <div className="share-model">
//       <button className="create-button" onClick={onCloseCreate}>
//         x
//       </button>
//       <div className="create">
//         <div className="header">
//           <button className="back-button" onClick={onCloseCreate}>
//             &larr;
//           </button>
//           <h3 className="tittle-share">Create new post</h3>
//           <button className="share-button" onClick={onCloseCreate}>
//             share
//           </button>
//         </div>
//         <div className="devide-share">
//             <img className="img-share" src="" alt="foto"></img>
//         <div className="detail-share">
//             <CircleImg img={user.urlImg}/>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }
