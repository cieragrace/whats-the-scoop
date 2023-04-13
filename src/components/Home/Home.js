import './Home.css'
import Header from '../Header/Header'
import CategoryGrid from '../CategoryGrid/CategoryGrid'

const Home = ({categories, categoryAPICall, stories}) => {
  return (
    <div className='home-container'>
      <Header />
      <CategoryGrid 
        categories={categories} 
        categoryAPICall={categoryAPICall}
        stories={stories}/>
    </div>
  )
}
export default Home