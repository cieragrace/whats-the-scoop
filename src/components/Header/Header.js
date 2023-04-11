import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='whats-the-scoop'>What's the Scoop?</h1>
      <section className='header-mid'>
        <p className='extra-extra'>Extra! Extra!</p>
        <p className='date'>This is the date</p>
      </section>
      <h5 className='todays-news'>Today's News at Your Finger Tips</h5>
    </div>
  )
}

export default Header