
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from '../pages/Profile'
import Landing from '../pages/Landing'
import WomenEthnic from '../pages/WomenEthnic'


import WomenWestern from '../pages/WomenWestern';
import Mens from '../pages/Mens';
import Kids from '../pages/Kids';
import HomeKitchen from '../pages/HomeKitchen';
import Beauty from '../pages/Beauty';
import Footwear from '../pages/Footwear';
import Electronics from '../pages/Electronics';

import Saree from '../pages/Saree';
import Kurtas from '../pages/Kurtas';
import Tops from '../pages/Tops';
import Dresses from '../pages/Dresses';
import Tshirts from '../pages/Tshirts';
import Shirts from '../pages/Shirts';
import Pants from '../pages/Pants';
import Vests from '../pages/Vests';
import Frocks from '../pages/Frocks';
import Toys from '../pages/Toys';
import Details from '../pages/Details';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';
import Orders from '../pages/Orders';



function Main() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>

                        <Route index element={<Landing />} />

                    
                        <Route path='/womenethnic' element={<WomenEthnic />} />
                        <Route path='/saree' element={<Saree />} />
                        <Route path='/kurtas' element={<Kurtas />} />



                        <Route path='/womenwestern' element={<WomenWestern />} />
                        <Route path='/tops' element={<Tops />} />
                        <Route path='/dresses' element={<Dresses />} />

                        <Route path='/men' element={<Mens />} />
                        <Route path='/tshirts' element={<Tshirts />} />
                        <Route path='/shirts' element={<Shirts />} />
                        <Route path='/pants' element={<Pants />} />
                        <Route path='/vests' element={<Vests />} />

                        <Route path='/kids' element={<Kids />} />
                        <Route path='/frocks' element={<Frocks />} />
                        <Route path='/toys' element={<Toys />} />

                        <Route path='/home' element={<HomeKitchen />} />
                        <Route path='/beauty' element={<Beauty />} />
                        <Route path='/footwear' element={<Footwear />} />
                        <Route path='/electronics' element={<Electronics />} />

                        <Route path='/profile' element={<Profile />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/details/:id' element={<Details />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/payment' element={<Payment />} />
                        <Route path='/orders' element={<Orders />} />







                    </Route>
                </Routes>
            </BrowserRouter>



        </>
    )
}

export default Main