
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from '../pages/Profile'
import Landing from '../pages/Landing'


function Main() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>

                        <Route index element={<Landing />} />
                        <Route path='/profile' element={<Profile />} />







                    </Route>
                </Routes>
            </BrowserRouter>



        </>
    )
}

export default Main