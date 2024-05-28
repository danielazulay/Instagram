// import React from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes'
import { useSelector } from 'react-redux';
import { SideMenu } from './cmps/SideMenu';




export function RootCmp() {

    const user = useSelector((userSate) => userSate.userModule.user);

    return (
        <div className='main'>
        <SideMenu user={user} />
            <main className="pages">
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                </Routes>
             
            </main>

        </div>
    )
}


