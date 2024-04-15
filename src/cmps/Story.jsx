
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function Story({story}) {
//   const [location, setLocation] = useState("");


//   const lat = story.loc.lat
//   const long = story.loc.lng
//   console.log(story);

//   useEffect(() => {
//     async function fetchLocation() {
//       try {
//         const location = await GeoPlace();
//         setLocation(location);
//         console.log(location);
//       } catch (error) {
//         console.error("Error fetching location:", error);
//       }
//     }
//     fetchLocation();
//   }, []);

//   async function GeoPlace() {
//     try {
//       let response = await fetch(
//         `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${lat},${long}&key=AIzaSyBliPN-2Gfyc7oNSvEIdYZpcyk-r77NmHc`,
//         { method: "GET" }
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();

//       const location = data.results[0].formatted_address;
//       return location;
//     } catch (error) {
//       console.error("Error fetching location:", error);
//       return "Location not available";
//     }
//   }

  return (
    <div>
      <h2>
        {story.by.fullname}
        {/* {location} */}
      </h2>
      <img src={story.imgUrl} alt="blah blah" />
      <svg aria-label="Like"  fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
      <h6>{story.likedBy.length + " Likes"}</h6>
      <h6>{story.by.fullname}</h6>
      <h5>{story.txt}</h5>
      <Link to="#">View all {story.comments.length} comment</Link>
      <Link to="#">Add a commnet...</Link>

    </div>
  );
}
