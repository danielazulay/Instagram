import { httpService } from "./http.service";
import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";

export const storyService = {
  generateStories,
  query,
  queryById,
  remove,
  add,
};
let STORY = "story";


async function generateStories() {
  let stories = utilService.loadFromStorage(STORY);

  if (!stories || !stories.length) {
    let coments = [];
    stories = [];
    for (let j = 1; j <= 5; j++) {
      let newRandomCommnet = {
        id: `c${j}`,
        by: {
          _id: `u101`,
          fullname: `Commenter ${j}`,
          imgUrl: `https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&amp;dl=pexels-8moments-1266810.jpg&amp;fm=jpg`,
        },
        txt: "This is a comment is number 1",
        likedBy: [
          // {
          //     "_id": `u101`,
          //     "fullname": `Liker ${j}`,
          //     "imgUrl": `https://source.unsplash.com/random/40x40/?user1`
          // }
        ],
        time:new Date().getTime(),
      };
      coments.push(newRandomCommnet);
    }

    for (let i = 1; i <= 10; i++) {
      let img = await fetch("https://picsum.photos/500/600");
      const story = {
        _id: `s${i}1`,
        txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ${i}`,
        imgUrl: img.url,
        by: {
          _id: `u101`,
          fullname: `User u101`,
          imgUrl: `https://source.unsplash.com/random/40x40/?user${i}`,
        },
        loc: {
          lat: 11.11 + i,
          lng: 22.22 + i,
          name: `Location ${i}`,
        },
        comments: coments,
        likedBy: [],
        tags: ["tag1", "tag2"],
        time:new Date().getTime(),
      };
      stories.push(story);
    }
    utilService.saveToStorage(STORY, stories);
  }
}
async function queryById(storyId) {
  let stories = await storageService.get(STORY, storyId);
  return stories;
}

async function query() {
  try {
    let stories = await storageService.query(STORY);

    return stories;
  } catch {
    throw new Error();
  }

  //return httpService.get(`story${queryStr}`)
  // return storageService.query('review')
}

async function remove(storyId) {
  await httpService.delete(`story/${storyId}`);
  // await storageService.remove('review', reviewId)
}

async function add({ txt, aboutUserId }) {
  const addedStory = await httpService.story(`story`, { txt, aboutUserId });

  return addedStory;
}
