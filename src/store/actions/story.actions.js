import { storyService } from '../../services/story.service.js'
import { store } from '../store.js'
import { ADD_STORY, REMOVE_STORY, UPDATE_STORY } from '../reducers/story.reducer.js'
import { SET_USER} from '../reducers/user.reducer.js'

// Action Creators
export function getActionRemoveStory(reviewId) {
    return { type: REMOVE_STORY, reviewId }
}
export function getActionAddStory(review) {
    return { type: ADD_STORY, review }
}

// export async function loadStory() {
//     try {
//         const reviews = await storyService.query() // Change to Redux way (action -> query)
//         store.dispatch({ type: UPDATE_STORY, reviews })

//     } catch (err) {
//         console.log('Storyctions: err in loadStories', err)
//         throw err
//     }
// }

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