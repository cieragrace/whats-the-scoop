import './App.css'
import Home from '../Home/Home'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import Header from '../Header/Header'
import getAPIData from '../../apiCalls'
import CategoryPage from '../CategoryPage/CategoryPage'
import { Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

const App = () => {
const [stories, setStoryList] = useState([])
const [data, setData] = useState([])
// const [error, setError] = useState("")

const categories = ["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", 
                  "Health", "Home", "Insider", "Magazine", "Movies", "NY Region", 
                  "Obituaries", "Opinion", "Politics", "Real Estate", "Science", 
                  "Sports", "Sunday Review", "Technology", "Theater", "T-Magazine", 
                  "Travel", "Upshot", "US", "World"]

                  
const categoryAPICall = (category) => {
  getAPIData(category)
  .then((data) => setStoryList(data.results))
  .catch((error) => console.log("There is an error with the data"))
}

 
useEffect(() => {
  console.log("app-stories", stories);
}, [stories]);

// showStoryDetails = (id) => {
//   const findStory = stories.find(story => story.id === id)
//   getStoryAPICall(`stories/${story.id}`)
//   .then((data) => {
//     console.log('data', data)
//     setSingleStory(data)
//     console.log(singleStory)
//     })
//     .catch((error) => console.log(error))
//   }

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
        <Route 
        exact
        path="/:category/:id"
        render={() => (
          <ArticleDetails 
            // storyID={match.params.id}
          />
        )}
        />
      </Switch>
    </main>
  )
}
export default App