import React from 'react';
import ReactDOM from 'react-dom/client';
import { Gretting, UserCard } from './Greeting';
import Product, {Navbar} from './Product';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>
        <Gretting />
        <UserCard />
        <Product />
        <Navbar />
    </>
)
