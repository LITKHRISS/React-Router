import { navigate } from '../Link.jsx'

export default function HomePage () {
    return (
      <>
      <h1>Home</h1>
      <p>Pagina de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')} > Ir a sobre nosotros </button>
      </>
    )
  }