import { storyService } from '../../services/story.service.js'
import { store } from '../store.js'
import { ADD_STORY, REMOVE_STORY, SET_STORIES,UPDATE_STORY } from '../reducers/story.reducer.js'

import { storageService } from '../../services/async-storage.service.js'
// Action Creators
let STORY_DB = "story"
export function getActionRemoveStory(reviewId) {
    return { type: REMOVE_STORY, reviewId }
}
export function getActionAddStory(review) {
    return { type: ADD_STORY, review }
}

export async function loadStories() {
    try {
        const stories = await storyService.query() // Change to Redux way (action -> query)
        store.dispatch({ type: SET_STORIES, stories })

    } catch (err) {
        console.log('Storyctions: err in loadStories', err)
        throw err
    }
}

export async function saveStory(story) {
	try {
        let savedStory
		const type = story._id ? UPDATE_STORY : ADD_STORY
        if(story._id){
            savedStory = await storageService.put(STORY_DB,story)
        }else{
            savedStory = await storageService.post(STORY_DB,story)
        }
		store.dispatch({ type, story: savedStory })
	} catch (err) {
		console.log('Had issues saving story', err)
		throw err
	}
}


// export async function addStory(story) {
//     try {
//         const addedStory = await storyService.add(story)
//         store.dispatch(getActionAddStory(addedStory))
//         const { Story } = addedStory.byUser
//         store.dispatch({ type: SET_USER, Story })
//     } catch (err) {
//         console.log('ReviewActions: err in addReview', err)
//         throw err
//     }
// }

// export async function removeStory(storyId) {
//     try {
//         await storyService.remove(storyId)
//         store.dispatch(getActionRemoveStory(storyId))
//     } catch (err) {
//         console.log('ReviewActions: err in removeReview', err)
//         throw err
//     }
// }