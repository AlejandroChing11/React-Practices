export const Post= () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
           .then(data => console.log(data))
           .catch(error => console.error(error))
    }}>
        

        Traer Datos
    </button>
};