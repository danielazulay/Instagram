import { userService } from '../../services/user.service.js'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGE_COUNT = 'CHANGE_COUNT'
export const SET_USER = 'SET_USER'
export const SET_WATCHED_USER = 'SET_WATCHED_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_USERS = 'SET_USERS'
export const SET_SCORE = 'SET_SCORE'
export const UPDATE_USER = 'UPDATE_USER'



const initialState = {
    user: userService.getLoggedinUser(),
    users: userService.getFriends(),
}

export function userReducer(state = initialState, action) {

    var newState = state
    switch (action.type) {
        case INCREMENT:
            newState = { ...state }
            break
        case SET_USER:
            newState = { ...state, user: action.user }
            break
        case SET_WATCHED_USER:
            newState = { ...state }
            break
        case REMOVE_USER:
            newState = {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }
            break
        case UPDATE_USER:
            newState = { ...state, user: action.user }
            break
    //         case UPDATE_STORY:
    //   return {
    //     ...state,
    //     stories: state.stories.map((story) =>
    //     story._id === action.story._id ? action.story : story
    //     ),
    //   };
        default:
    }
    // For debug:
    // window.userState = newState
    // console.log('State:', newState)
    return newState

}
