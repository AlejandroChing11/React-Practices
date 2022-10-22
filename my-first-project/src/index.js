import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Gretting () {
    return <div>
        <h1>This is a h1 in a div</h1>
        <p>Mw2</p>
        </div>;
};

root.render(<div>
    <Gretting/>
    <Gretting/>
    <Gretting/>
</div>);

