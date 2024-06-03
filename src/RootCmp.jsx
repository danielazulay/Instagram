// import React from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes'





export function RootCmp() {

    // const user = useSelector((userSate) => userSate.userModule.user);

    return (
        <div className='main'>

            <main className="pages">
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                </Routes>
             
            </main>

        </div>
    )
}


