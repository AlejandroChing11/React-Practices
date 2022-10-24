export function Gretting() {
    // const married = true;
    // const age = 18;

    // if (married) {
    //     return <h1> Estoy casado!</h1>
    // };

    //Ternary operators.
    // return <h1>{married ? 'Estoy casado! 🥴' : 'No estoy casado'}</h1>

    const User = {
        name: 'John',
        age: 18,
        married: true
    };

    function add(x, y) {
        return x + y;
    };

    return <>
        <h1>{User.name}</h1>
        <h1>{User.age}</h1>
        <h1>{User.married.toString()}</h1>
        <h1>{add(10, 40)}</h1>
    </>

};

export function UserCard() {
    return 'AlejandroCard';
};