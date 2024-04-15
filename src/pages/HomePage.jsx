

import { SugestionsNav } from '../cmps/SugestionsNav'
import { Friends } from '../cmps/Friends'
import { SideSugestion } from '../cmps/SideSugestion'
import { StoryList } from '../cmps/StoryList'
import {  useSelector } from 'react-redux'


export function HomePage() {
    // const count = useSelector(storeState => storeState.userModule.count)
   
    // function changeCount(diff) {
    //     console.log('Changing count by:', diff);
    //     dispatch({ type: CHANGE_COUNT, diff })
    // }
    const stories = useSelector(storeState => storeState.storyModule)
    return (
        <div className='home-page'>
            <SideSugestion/>
            <Friends/>
            <SugestionsNav/>
            <StoryList stories={stories}/> 
            {/* Change story to StoryList and pass stories to it */}
        </div >
    )
}