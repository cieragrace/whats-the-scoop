import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo-container'></div>
      <div className='header-text-container'>
        <h1 className='whats-the-scoop'>What's the Scoop?</h1>
        <div className='header-mid'>
          {/* <p className='date'>This is the date</p> */}
          {/* <p className='extra-extra'>Extra! Extra!</p> */}
        </div>
        <h5 className='todays-news'>Today's News at Your Finger Tips</h5>
      </div>
      <div className='logo-container-2'></div>
    </div>
  )
}

export default Header