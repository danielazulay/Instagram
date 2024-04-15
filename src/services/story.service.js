import { httpService } from "./http.service";

export const storyService = {
    generateStories,
    query,
    remove,
    add
}

function generateStories() {
    let data = []
    for (let i = 1; i <= 10; i++) {
        const story = {
            "_id": `s${i}`,
            "txt": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ${i}`,
            "imgUrl": `https://source.unsplash.com/random/800x600/?landscape${i}`,
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
            "comments": [
                {
                    "id": `c${i}1`,
                    "by": {
                        "_id": `u${i}5`,
                        "fullname": `Commenter ${i}`,
                        "imgUrl": `https://source.unsplash.com/random/40x40/?commenter${i}`
                    },
                    "txt": "This is a comment",
                    "likedBy": [
                        {
                            "_id": `u${i}6`,
                            "fullname": `Liker ${i}`,
                            "imgUrl": `https://source.unsplash.com/random/40x40/?liker${i}`
                        }
                    ]
                }
            ],
            "likedBy": [
                {
                    "_id": `u${i}5`,
                    "fullname": `Liker ${i}`,
                    "imgUrl": `https://source.unsplash.com/random/40x40/?liker${i}`
                }
            ],
            "tags": ["tag1", "tag2"]
        };
        data.push(story);
    }
    return data;
}

function query(filterBy) {
    var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
    return httpService.get(`story${queryStr}`)
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