import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Gretting () {
    const married = false;
    const age = 18;

    // if (married) {
    //     return <h1> Estoy casado!</h1>
    // };

    //Ternary operators
    return <h1>{married ? 'Estoy casado!' : 'No estoy casado'}</h1>

};

root.render(
    Gretting()
);
