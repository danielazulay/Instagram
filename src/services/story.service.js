import { httpService } from "./http.service";
import {storageService} from "./async-storage.service"
import { utilService } from "./util.service";

export const storyService = {
    generateStories,
    query,
    remove,
    add
}
let STORY = "story"
generateStories()
function generateStories() {
    let stories = utilService.loadFromStorage(STORY)
 
    if(!stories || !stories.length){

        let  coments = []
        stories = []  
        for(let j = 1 ;j <= 5; j++){

           let newRandomCommnet ={ 
            "id": `${j}`,
            "by": {
                "_id": `u${j}1`,
                "fullname": `Commenter ${j}`,
                "imgUrl": `https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&amp;dl=pexels-8moments-1266810.jpg&amp;fm=jpg`
            },
            "txt": "This is a comment is number 1",
            "likedBy": [
                {
                    "_id": `u101`,
                    "fullname": `Liker ${j}`,
                    "imgUrl": `https://source.unsplash.com/random/40x40/?user1`
                }
            ]
        }
        coments.push(newRandomCommnet)
        }

        for (let i = 1; i <= 10; i++) {
            const story = {
                "_id": `u${i}1`,
                "txt": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ${i}`,
                "imgUrl": `https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg`,
                "by": {
                    "_id": `u${i}`,
                    "fullname": `User ${i}`,
                    "imgUrl": `https://source.unsplash.com/random/40x40/?user${i}`
                },
                "loc": {
                    "lat": 11.11 + i,
                    "lng": 22.22 + i,
                    "name": `Location ${i}`
                },
                "comments": coments,
                "likedBy": [
                    {
                        "_id": `u${i}`,
                        "fullname": `Liker ${i}`,
                        "imgUrl": `https://source.unsplash.com/random/40x40/?liker${i}`
                    }
                ],
                "tags": ["tag1", "tag2"]
            };
            stories.push(story)

        }
        utilService.saveToStorage(STORY,stories)
    }

}



async function query() {
    try{
        let stories = await storageService.query(STORY) 

            return stories
    }catch{
        throw new Error()
    }
   
    //return httpService.get(`story${queryStr}`)
    // return storageService.query('review')
}



async function remove(storyId) {
    await httpService.delete(`story/${storyId}`)
    // await storageService.remove('review', reviewId)
}

async function add({ txt, aboutUserId }) {
    const addedStory = await httpService.story(`story`, { txt, aboutUserId })

    // const aboutUser = await userService.getById(aboutUserId)
    // const reviewToAdd = {
    //     txt,
    //     byUser: userService.getLoggedinUser(),
    //     aboutUser: {
    //         _id: aboutUser._id,
    //         fullname: aboutUser.fullname,
    //         imgUrl: aboutUser.imgUrl
    //     }
    // }

    // reviewToAdd.byUser.score += 10
    // await userService.update(reviewToAdd.byUser)
    // const addedReview = await storageService.story('review', reviewToAdd)


    return addedStory
}

