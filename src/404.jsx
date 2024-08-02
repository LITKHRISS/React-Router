import { Link } from "./Link.jsx"

export default function Page404 () {
    return (
        <>
            <div>
            <h1>This is NOT fine (404)</h1>
            <img src='src/resourses/this-is-fine.webp' alt='Gif del perro This is not fine'/>
            </div>
           
            <Link to='/'> Go to home </Link>
        </>
    )
}