import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import GlobalStyle from './features/GlobalStyle';
import Home from './features/Home';
import Login from './features/Login';
import Favorite from './features/Favorite';
import Register from './features/Register';
import ProductShow from './features/ProductShow';
import Notification from './features/Notification';
import Cart from './features/Cart';
import BookArchive from './features/BookArchive';
import AddBook from './features/AddBook';
import useToken from './features/useToken';

const App = () => {
    const { token, setToken } = useToken();
    console.log(token);

    if (!token || token.lenght === 0) {
        console.log("go to login");

        return (
            <>
                <GlobalStyle />
                <Login setToken={setToken} />
                {/* <Routes>
                    <Route path="/register" element={<Register />} />
                </Routes> */}
            </>
        )
    }
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/productShow/:id" element={<ProductShow />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/bookArchive" element={<BookArchive />} />
                <Route path="/addBook" element={<AddBook />} />
            </Routes>
        </>
    )
}

export default App;