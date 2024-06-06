
import { Routes, Route } from 'react-router'
import routes from './routes'
import { SideMenu } from './cmps/SideMenu';



export function RootCmp() {


    return (
        <div className='main'>
              <SideMenu />
            <main className="pages">
                <Routes>
                    {routes.map(route => <Route  key={route.path} exact={true} element={route.component} path={route.path}  />)}
                </Routes>
             
            </main>
            {story && <StoryDetails   selected={selected} setSelected={setSelected} setEmojiPicker={setEmojiPicker} story={story} user={user} onCloseStory={onCloseStory}/>}
        </div>
    )
}


