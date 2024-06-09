
import { HomePage } from './pages/HomePage.jsx'
import { Profile } from './pages/Profile.jsx'



// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage/>,
        label: 'Home 🏠',
    },
    {
        path: '/profile',
        component: <Profile/>,
        label: 'Profile',
    },
    // {
    //     path: '/profile/:id',
    //     component: <Profile/>,
    //     label: 'Profile',
    // }
    // {
    //     path: 'about',
    //     component: <AboutUs />,
    //     label: 'About us'
    // }
]

export default routes