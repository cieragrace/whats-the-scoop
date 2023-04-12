import './Home.css'
import Header from '../Header/Header'
import CategoryGrid from '../CategoryGrid/CategoryGrid'

const Home = ({categories}) => {
  return (
    <div className='home-container'>
      <Header />
      <CategoryGrid categories={categories} />
    </div>
  )
}
export default Home