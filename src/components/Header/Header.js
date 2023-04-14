import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo-container'></div>
      <div className='header-text-container'>
        <Link to='/' className='whats-the-scoop'>What's the Scoop?</Link>
        <h5 className='todays-news'>Today's News at Your Finger Tips</h5>
      </div>
      <div className='logo-container-2'></div>
    </div>
  )
}

export default Header