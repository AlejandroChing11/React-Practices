import React from 'react';
import ReactDOM from 'react-dom/client';
import { Gretting, UserCard } from './Greeting';
import Product, {Navbar} from './Product';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>
        {/* <Gretting title = "Hola Mundo" name="Ryan"/>
        <Gretting title = "Hola React" name="Alejandro"/>
        <Gretting title = "Hola JSX"/>
        <Gretting title = "Hola Javascript"/>
        <Gretting title = "Hola Alejandro"/> */}
        <UserCard title= "Hello this is my UserCard" name="AlejandroCard"/>
    </>
);
