import './App.css'
import Home from '../Home/Home'
import getAPIData from '../../apiCalls'
import CategoryPage from '../CategoryCard/CategoryCard'
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'

const App = () => {
const [storyList, setStoryList] = useState([])
const categories = ["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", 
                  "Health", "Home", "Insider", "Magazine", "Movies", "NY Region", 
                  "Obituaries", "Opinion", "Politics", "Real Estate", "Science", 
                  "Sports", "Sunday Review", "Technology", "Theater", "T-Magazine", 
                  "Travel", "Upshot", "US", "World"]

const categoryAPICall = (category) => {
  getAPIData(category)
  .then((data) => {
    setStoryList(data)
  })
  .catch((error) => {
    console.log(error)
  })
}

  return (
    <main className='app-container'>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home 
              categories={categories}
              categoryAPICall={categoryAPICall} 
            />
          )}
        />
        <Route 
          exact
          path="/:category"
          render={() => (
            <CategoryPage 
              stories={storyList}
            />
          )}  
        />
      </Switch>
    </main>
  )
}
export default App