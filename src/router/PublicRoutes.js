
import { Routes, Route, Navigate } from 'react-router-dom'
import Espatulas from '../components/Spatula/Espatulas'
import Cuchillos from '../components/Knvies/Cuchillos'
import Cucharas from '../components/Spoons/Cucharas'
import Cart from '../components/Cart/Cart'
import ItemDetailContainer from '../components/ItemDetailsContainer/ItemDetailsContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { Header } from '../components/Header/Header'
import Checkout from '../components/Check-Out/Checkout'
import LoginScreen from '../components/LoginScreen/LoginScreen';






const PublicRoutes = () => {
    

    return (
        <>
        <Header/>
        <Routes>


                <Route path='/' element={<ItemListContainer />} />
                <Route path='/productos/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path="/cucharas" element={<Cucharas/>} />
                <Route path='/cuchillos' element={<Cuchillos />} />
                <Route path='/espatulas' element={<Espatulas />} />
                <Route path='*' element={<Navigate to="/" />} />

        </Routes>
        </>
    )
}

export default PublicRoutes