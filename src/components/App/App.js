import './App.css'
import Home from '../Home/Home'
import Header from '../Header/Header'
import getAPIData from '../../apiCalls'
import CategoryPage from '../CategoryPage/CategoryPage'
import { Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

const App = () => {
const [stories, setStoryList] = useState([])
const [chosenCategory, setCategory] = useState('')

const categories = ["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", 
                  "Health", "Home", "Insider", "Magazine", "Movies", "NY Region", 
                  "Obituaries", "Opinion", "Politics", "Real Estate", "Science", 
                  "Sports", "Sunday Review", "Technology", "Theater", "T-Magazine", 
                  "Travel", "Upshot", "US", "World"]
               

const categoryAPICall = (category) => {
  getAPIData(category)
  .then((data) => {
    const storiesWithIdsAndIndexes = data.results.map((story, index) => ({
      ...story,
      id: index || index
    }))
    setStoryList(storiesWithIdsAndIndexes)
    setCategory(category)
  })
  .catch((error) => console.log("There is an error with the data"))
}

useEffect(() => {
  console.log("app-stories", stories);
}, [stories]);

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
              setStoryList={setStoryList}
            />
          )}
        />
        <Route 
          exact
          path="/category/:category"
          render={() => (
            <>
            <Header />
            <CategoryPage
              stories={stories}
              />
              </>
          )}  
        />
      </Switch>
    </main>
  )
}
export default App