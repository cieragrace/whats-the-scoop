import './App.css'
import Home from '../Home/Home'
import { Switch, Route } from 'react-router-dom'

const App = () => {
const categories = ["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", 
                  "Health", "Home", "Insider", "Magazine", "Movies", "NY Region", 
                  "Obituaries", "Opinion", "Politics", "Real Estate", "Science", 
                  "Sports", "Sunday Review", "Technology", "Theater", "T-Magazine", 
                  "Travel", "Upshot", "US", "World"]
  return (
    <main className='app-container'>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home 
              categories={categories} 
            />
          )}
        />
      </Switch>
    </main>
  )
}
export default App