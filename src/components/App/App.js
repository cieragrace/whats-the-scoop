import './App.css'
import Home from '../Home/Home'
import CategoryGrid from '../CategoryGrid/CategoryGrid'

const App = () => {
const categories = ["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", 
                  "Health", "Home", "Insider", "Magazine", "Movies", "NY Region", 
                  "Obituaries", "Opinion", "Politics", "Real Estate", "Science", 
                  "Sports", "Sunday Review", "Technology", "Theater", "T-Magazine", 
                  "Travel", "Upshot", "US", "World"]
  return (
    <div className='app-container'>
      <Home  />
      <CategoryGrid categories={categories}/>
    </div>
  )
}
export default App