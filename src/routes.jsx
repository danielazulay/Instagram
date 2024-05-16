import { StoryDetails } from './cmps/StoryDetails.jsx'
import { HomePage } from './pages/HomePage.jsx'



// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage/>,
        label: 'Home 🏠',
    }
    // {
    //     path: 'about',
    //     component: <AboutUs />,
    //     label: 'About us'
    // }
]

export default routes