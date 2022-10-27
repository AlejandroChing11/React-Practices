import { VscGlobe } from 'react-icons/vsc'


export const Post = () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }}>

        <VscGlobe/>
        Traer Datos
    </button>
};