import './Home.css'
import Header from '../Header/Header'
import CategoryGrid from '../CategoryGrid/CategoryGrid'

const Home = ({categories, categoryAPICall}) => {
  return (
    <div className='home-container'>
      <Header />
      <CategoryGrid 
        categories={categories} 
        categoryAPICall={categoryAPICall}/>
    </div>
  )
}
export default Home