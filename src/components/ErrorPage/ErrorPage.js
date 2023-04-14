import './ErrorPage.css'
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return(
    <main className='error-container'>
      <h1 className='oh-no'>Oh No! Looks like something went wrong</h1>
      <Link to='/' className='home-link'>Back To Home</Link>
      <div className='error-image'></div>
    </main>
  )
}

export default ErrorPage