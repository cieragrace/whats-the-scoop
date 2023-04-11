import './CategoryGrid.css'
import CategoryCard from '../CategoryCard/CategoryCard'

const CategoryGrid = () => {
const categories = ["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", 
                    "Health", "Home", "Insider", "Magazine", "Movies", "NY Region", 
                    "Obituaries", "Opinion", "Politics", "Real Estate", "Science", 
                    "Sports", "Sunday Review", "Technology", "Theater", "T-Magazine", 
                    "Travel", "Upshot", "US", "World"]

const catCard = () => {
    const makeCard = categories.map(category => {
      return(
        <CategoryCard />
      )
    })
}
  return(
    <section>
      { catCard }
    </section>
  )
}

export default CategoryGrid