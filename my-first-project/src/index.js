import React from 'react';
import ReactDOM from 'react-dom/client';
import { Gretting, UserCard } from './Greeting';
import Product, { Navbar } from './Product';
import { Button } from './button.js';
import { TaskCard } from './Task';
import { Saludar } from './Saludar';
const root = ReactDOM.createRoot(document.getElementById('root'));

const HandleChange = (info) => {
    console.log(info.target.value);
};


root.render(
    <>

        <Button text='Saludar'/>

        <input id="hola"onChange={HandleChange}/>





        {/* <Button text="Click me" />
        <Button text="Pay " />
        <Button text='' name="Alejandro" /> */}
        {/* <Gretting title = "Hola Mundo" name="Ryan"/>
        <Gretting title = "Hola React" name="Alejandro"/>
        <Gretting title = "Hola JSX"/>
        <Gretting title = "Hola Javascript"/>
        <Gretting title = "Hola Alejandro"/> */}
        {/* <UserCard name= "Mei Li ching" amount={500} married={true} points={[10, 9]} address={{street: "91 street", city: "Barranquilla"}}/>
        <UserCard name="Alejandro Ching" amont={2000} married={false} points={[10, 9]} address={{street: "74 avenue Street",
            city: "Barranquilla",}}/> */}

    </>
);
